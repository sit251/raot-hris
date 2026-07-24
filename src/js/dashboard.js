import { showWelfare } from "./welfare.js";
import { showLoan } from "./loan.js";
import { showProvident } from "./provident.js";
import { showCompensation } from "./compensation.js";
import { showNews } from "./news.js";
import { showContact } from "./contact.js";
import { showPassword } from "./password.js";
import { showLogin } from "./script.js";

export function showDashboard(user) {

    document.getElementById("app").innerHTML = `

    <div class="login-box">

<div class="dashboard-header">

    <button
        id="settingBtn"
        class="setting-btn">

        <i class="bi bi-gear-fill"></i>

    </button>

    <div class="profile-icon">
        <i class="bi bi-person-circle"></i>
    </div>

    <div class="welcome-text">

        <h2>สวัสดี</h2>

        <h1>${user.fullname}</h1>

        <p>

            <i class="bi bi-building"></i>

            การยางแห่งประเทศไทย

        </p>

    </div>

<div class="profile-menu" id="profileMenu">

    <button
    class="profile-menu-item"
    id="passwordBtn">

        <i class="bi bi-key-fill"></i>

        <span>เปลี่ยนรหัสผ่าน</span>

    </button>

    <div class="profile-menu-divider"></div>

    <button
    class="profile-menu-item danger"
    id="logoutBtn">

        <i class="bi bi-box-arrow-right"></i>

        <span>ออกจากระบบ</span>

    </button>

</div>

</div>

<div class="section-title">

    <i class="bi bi-grid-fill"></i>

    เมนูหลัก

</div>

        <div class="menu-card" id="welfareBtn">

    <div class="menu-icon">
        <i class="bi bi-heart-pulse-fill"></i>
    </div>

    <div class="menu-content">

        <div class="menu-title">
            สวัสดิการสงเคราะห์
        </div>

        <div class="menu-desc">
            ตรวจสอบสิทธิ์และข้อมูล
        </div>

    </div>

    <i class="bi bi-chevron-right menu-arrow"></i>

</div>

        <div class="menu-card" id="loanBtn">

    <div class="menu-icon">
        <i class="bi bi-cash-stack"></i>
    </div>

    <div class="menu-content">

        <div class="menu-title">
            สวัสดิการเงินกู้
        </div>

        <div class="menu-desc">
            สมัครสมาชิก ตรวจสอบสิทธิ และข้อมูลเงินกู้
        </div>

    </div>

    <i class="bi bi-chevron-right menu-arrow"></i>

</div>

            <div class="menu-card" id="providentBtn">

    <div class="menu-icon">
        <i class="bi bi-piggy-bank-fill"></i>
    </div>

    <div class="menu-content">

        <div class="menu-title">
            สวัสดิการกองทุน
        </div>

        <div class="menu-desc">
            ข้อมูลและแผนการลงทุน
        </div>

    </div>

    <i class="bi bi-chevron-right menu-arrow"></i>

</div>

            <div class="menu-card" id="compensationBtn">

    <div class="menu-icon">
        <i class="bi bi-wallet2"></i>
    </div>

    <div class="menu-content">

        <div class="menu-title">
            สวัสดิการค่าตอบแทน
        </div>

        <div class="menu-desc">
            ข้อมูลค่าตอบแทนและเอกสาร
        </div>

    </div>

    <i class="bi bi-chevron-right menu-arrow"></i>

</div>

            <div class="menu-card" id="newsBtn">

    <div class="menu-icon">
        <i class="bi bi-newspaper"></i>
    </div>

    <div class="menu-content">

        <div class="menu-title">
           ข่าวสาร
        </div>

        <div class="menu-desc">
            ข่าวประชาสัมพันธ์ฝ่าย HR
        </div>

    </div>

    <i class="bi bi-chevron-right menu-arrow"></i>

</div>

            <div class="menu-card" id="contactBtn">

    <div class="menu-icon">
        <i class="bi bi-telephone-fill"></i>
    </div>

    <div class="menu-content">

        <div class="menu-title">
            ติดต่อ HR
        </div>

        <div class="menu-desc">
            เบอร์โทรศัพท์กองค่าตอบแทนและสวัสดิการ
        </div>

    </div>

    <i class="bi bi-chevron-right menu-arrow"></i>

</div>

<!-- Logout Modal -->

<div id="logoutModal" class="logout-modal">

    <div class="logout-box">

        <div class="logout-icon">
            <i class="bi bi-box-arrow-right"></i>
        </div>

        <h2>ออกจากระบบ</h2>

        <p>คุณต้องการออกจากระบบหรือไม่?</p>

        <div class="logout-buttons">

            <button
                id="cancelLogout"
                class="cancel-btn">

                ยกเลิก

            </button>

            <button
                id="confirmLogout"
                class="confirm-btn">

                ออกจากระบบ

            </button>

        </div>

    </div>

</div>

    `;

    document
        .getElementById("welfareBtn")
        .addEventListener("click", showWelfare);

    document
        .getElementById("loanBtn")
        .addEventListener("click", showLoan);

    document
    .getElementById("providentBtn")
    .addEventListener("click", showProvident);

    document
    .getElementById("compensationBtn")
    .addEventListener("click", showCompensation);

    document
.getElementById("newsBtn")
.addEventListener("click", showNews);

    document
    .getElementById("contactBtn")
    .addEventListener("click", showContact);

    const settingBtn = document.getElementById("settingBtn");
const profileMenu = document.getElementById("profileMenu");

settingBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    profileMenu.classList.toggle("show");

});

document.addEventListener("click", () => {

    profileMenu.classList.remove("show");

});

profileMenu.addEventListener("click", (e) => {

    e.stopPropagation();

});

document
.getElementById("passwordBtn")
.addEventListener("click", () => {

    showPassword(user);

});

const logoutModal = document.getElementById("logoutModal");

document
.getElementById("logoutBtn")
.addEventListener("click", () => {

    profileMenu.classList.remove("show");

    logoutModal.classList.add("show");

});

document
.getElementById("cancelLogout")
.addEventListener("click", () => {

    logoutModal.classList.remove("show");

});

document
.getElementById("confirmLogout")
.addEventListener("click", () => {

    window.currentUser = null;

    logoutModal.classList.remove("show");

    showLogin();

});

}