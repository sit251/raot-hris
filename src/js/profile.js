import { showDashboard } from "./dashboard.js";
export function showProfile(user) {

    document.getElementById("app").innerHTML = `

    <div class="login-box">

        <div class="profile-page">

            <button id="backBtn" class="back-btn">
                <i class="bi bi-arrow-left"></i>
            </button>

            <h2>แก้ไขโปรไฟล์</h2>

            <div class="profile-avatar" id="profileAvatar">

    <i class="bi bi-person-circle"></i>

</div>

<input
    type="file"
    id="photoInput"
    accept="image/*"
    style="display:none;">

            <button
    id="changePhotoBtn"
    class="change-photo-btn">

                <i class="bi bi-camera-fill"></i>

                เปลี่ยนรูปโปรไฟล์

            </button>

            <div class="profile-info">

                <label>ชื่อ-นามสกุล</label>

                <input
                    type="text"
                    value="${user.fullname}"
                    readonly>

            </div>

            <div class="profile-info">

                <label>หน่วยงาน</label>

                <input
                    type="text"
                    value="การยางแห่งประเทศไทย"
                    readonly>

            </div>

            <button
    id="saveProfileBtn"
    class="save-profile-btn">

                <i class="bi bi-floppy-fill"></i>

                บันทึก

            </button>

        </div>

    </div>

    `;

document
.getElementById("backBtn")
.addEventListener("click", () => {

    showDashboard(user);

});

document
.getElementById("saveProfileBtn")
?.addEventListener("click", () => {

    alert("บันทึกข้อมูลสำเร็จ");

});

const photoInput = document.getElementById("photoInput");

document
.getElementById("changePhotoBtn")
.addEventListener("click", () => {

    photoInput.click();

});

photoInput.addEventListener("change", (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(event){

        document.getElementById("profileAvatar").innerHTML = `

            <img
                src="${event.target.result}"
                class="avatar-preview">

        `;

    };

    reader.readAsDataURL(file);

});

}