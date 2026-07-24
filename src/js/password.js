import { showDashboard } from "./dashboard.js";
import { db } from "../firebase/firebase-config.js";

import {
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

export function showPassword(user){

    console.log("USER =", user);

    document.getElementById("app").innerHTML = `

    <div class="login-box">

        <div class="password-page">

            <button id="backBtn" class="back-btn">

                <i class="bi bi-arrow-left"></i>

            </button>

            <h2>เปลี่ยนรหัสผ่าน</h2>

            <div class="profile-info">

    <label>รหัสผ่านเดิม</label>

    <div class="input-group">

        <i class="bi bi-lock-fill"></i>

        <input
            id="oldPassword"
            type="password"
            class="textbox"
            placeholder="กรอกรหัสผ่านเดิม">

        <i
            id="toggleOldPassword"
            class="bi bi-eye-fill eye-icon"></i>

    </div>

</div>

            <div class="profile-info">

    <label>รหัสผ่านใหม่</label>

    <div class="input-group">

        <i class="bi bi-lock-fill"></i>

        <input
            id="newPassword"
            type="password"
            class="textbox"
            placeholder="กรอกรหัสผ่านใหม่">

        <i
            id="toggleNewPassword"
            class="bi bi-eye-fill eye-icon"></i>

    </div>

</div>

            <div class="profile-info">

    <label>ยืนยันรหัสผ่านใหม่</label>

    <div class="input-group">

        <i class="bi bi-lock-fill"></i>

        <input
            id="confirmPassword"
            type="password"
            class="textbox"
            placeholder="ยืนยันรหัสผ่านใหม่">

        <i
            id="toggleConfirmPassword"
            class="bi bi-eye-fill eye-icon"></i>

    </div>

</div>

            <div
    id="passwordMessage"
    class="password-message"></div>

<button
    id="savePasswordBtn"
    class="save-profile-btn">

    <i class="bi bi-floppy-fill"></i>

    บันทึก

</button>

        </div>

    </div>

    `;

    document
    .getElementById("backBtn")
    .addEventListener("click",()=>{

        showDashboard(user);
});


document
.getElementById("savePasswordBtn")
.addEventListener("click", async () => {

    const oldPassword =
        document.getElementById("oldPassword").value.trim();

    const newPassword =
        document.getElementById("newPassword").value.trim();

    const confirmPassword =
        document.getElementById("confirmPassword").value.trim();

    const message =
        document.getElementById("passwordMessage");

message.style.color = "#d32f2f";
message.innerHTML = "";

// กรอกข้อมูลให้ครบ
if(!oldPassword || !newPassword || !confirmPassword){

    message.innerHTML = "กรุณากรอกรหัสผ่านให้ครบ";

    return;

}

// รหัสใหม่ต้องไม่ซ้ำรหัสเดิม
if(oldPassword === newPassword){

    message.innerHTML = "รหัสผ่านใหม่ต้องไม่ซ้ำรหัสผ่านเดิม";

    return;

}

// ตรวจสอบรหัสเดิม
if(oldPassword !== user.password){

    message.innerHTML = "รหัสผ่านเดิมไม่ถูกต้อง";

    return;

}

// ความยาวรหัสใหม่
if(newPassword.length < 4){

    message.innerHTML = "รหัสผ่านต้องมีอย่างน้อย 4 ตัวอักษร";

    return;

}

// ยืนยันรหัสผ่าน
if(newPassword !== confirmPassword){

    message.innerHTML = "ยืนยันรหัสผ่านไม่ตรงกัน";

    return;

}

    try{

        await updateDoc(

    doc(db, "employees", user.citizenId),

    {
        password: newPassword
    }

);

        user.password = newPassword;

        window.currentUser.password = newPassword;

        message.style.color = "#008000";

        message.innerHTML = "เปลี่ยนรหัสผ่านสำเร็จ";

        setTimeout(()=>{

            showDashboard(user);

        },1500);

    }catch(err){

    console.error(err);

    message.innerHTML = err.message;

}

}); 

// ===== แสดง / ซ่อน รหัสผ่าน =====

function togglePassword(inputId, iconId){

    const input = document.getElementById(inputId);

    const icon = document.getElementById(iconId);

    icon.addEventListener("click", () => {

        if(input.type === "password"){

            input.type = "text";

            icon.classList.remove("bi-eye-fill");

            icon.classList.add("bi-eye-slash-fill");

        }else{

            input.type = "password";

            icon.classList.remove("bi-eye-slash-fill");

            icon.classList.add("bi-eye-fill");

        }

    });

}

togglePassword("oldPassword", "toggleOldPassword");

togglePassword("newPassword", "toggleNewPassword");

togglePassword("confirmPassword", "toggleConfirmPassword"); 

}