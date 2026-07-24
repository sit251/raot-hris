import { showDashboard } from "./dashboard.js";

export function showLoading(user) {

    document.getElementById("app").innerHTML = `

    <div class="splash-screen">

        <img src="src/assets/logo.png" class="splash-logo">

        <h1>RAOT HRIS</h1>

        <p>ระบบสวัสดิการและค่าตอบแทน</p>

        <div class="loading-text">

            <i class="bi bi-shield-lock-fill"></i>

            <span>กำลังเข้าสู่ระบบ...</span>

        </div>

        <span class="loading"></span>

    </div>

    `;

    setTimeout(() => {

        showDashboard(user);

    }, 1200);

}