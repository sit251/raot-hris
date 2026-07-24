import { showSplash } from "./splash.js";
import { login } from "./login.js";

export function render(html) {
    document.getElementById("app").innerHTML = html;
}

function showLogin() {

    render(`
        <div class="login-box">

            <img src="https://i.ibb.co/M53CtxpX/a.png" class="logo">

            <h1>ระบบสวัสดิการและค่าตอบแทน</h1>

            <h3>การยางแห่งประเทศไทย</h3>

            <p class="subtitle">
                Human Resource Information System (HRIS)
            </p>

            <div class="input-group">

    <i class="bi bi-person-vcard-fill"></i>

    <input
    id="empid"
    type="text"
    placeholder="เลขบัตรประชาชน"
    class="textbox"
    autocomplete="off"
    autocorrect="off"
    autocapitalize="off"
    spellcheck="false">

</div>

            <div class="input-group">

    <i class="bi bi-lock-fill"></i>

    <input
    id="password"
    type="password"
    placeholder="รหัสผ่าน"
    class="textbox"
    autocomplete="off">

    <i
        id="togglePassword"
        class="bi bi-eye-fill eye-icon"></i>

</div>

            <button id="loginBtn" class="login-btn">
    เข้าสู่ระบบ
</button>

<div class="login-options">

    <label class="remember">

        <input
            type="checkbox"
            id="rememberMe">

        จำเลขบัตรประชาชน

    </label>

    <a
        href="#"
        id="forgotPassword">

        ลืมรหัสผ่าน?

    </a>

</div>

<div id="message"></div>

</div>

<!-- Forgot Password Modal -->

<div id="forgotModal" class="logout-modal">

    <div class="logout-box">

        <div class="logout-icon">
            <i class="bi bi-key-fill"></i>
        </div>

        <h2>ลืมรหัสผ่าน</h2>

            <div class="forgot-item">
    <i class="bi bi-info-circle-fill"></i>
    <span>หากท่านลืมรหัสผ่าน</span>
</div>

<div class="forgot-item">
    <i class="bi bi-building-fill"></i>
    <span>กรุณาติดต่อกองค่าตอบแทนและสวัสดิการ</span>
</div>

<div class="forgot-item">
    <i class="bi bi-arrow-repeat"></i>
    <span>เพื่อดำเนินการรีเซ็ตรหัสผ่าน</span>
</div>

<div class="forgot-item">
    <i class="bi bi-telephone-fill"></i>
    <span>02-XXX-XXXX</span>
</div>

        <div class="logout-buttons">

            <button
                id="closeForgotModal"
                class="confirm-btn">

                ปิด

            </button>

        </div>

    </div>

</div>
    `);

    document
    .getElementById("loginBtn")
    .addEventListener("click", () => {

        const empid = document.getElementById("empid").value.trim();
        const rememberMe = document.getElementById("rememberMe");

        if (rememberMe.checked) {

            // จำเลขบัตรประชาชน
            localStorage.setItem("rememberEmpid", empid);

        } else {

            // ไม่จำเลขบัตรประชาชน
            localStorage.removeItem("rememberEmpid");

        }

        login();

    });

// ===== Remember Citizen ID =====

const rememberMe = document.getElementById("rememberMe");

const savedEmpid = localStorage.getItem("rememberEmpid");

if (savedEmpid) {

    rememberMe.checked = true;

    const empInput = document.getElementById("empid");

    setTimeout(() => {

        empInput.value = savedEmpid;

        empInput.classList.add("remember-fill");

    }, 200);

}

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const forgotPassword = document.getElementById("forgotPassword");
const forgotModal = document.getElementById("forgotModal");
const closeForgotModal = document.getElementById("closeForgotModal");

forgotPassword.addEventListener("click", (e) => {

    e.preventDefault();

    forgotModal.classList.add("show");

});

closeForgotModal.addEventListener("click", () => {

    forgotModal.classList.remove("show");

});


togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.classList.remove("bi-eye-fill");
        togglePassword.classList.add("bi-eye-slash-fill");

    } else {

        passwordInput.type = "password";

        togglePassword.classList.remove("bi-eye-slash-fill");
        togglePassword.classList.add("bi-eye-fill");

    }

});
}

showSplash(showLogin);

export { showLogin };