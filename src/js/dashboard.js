import { showWelfare } from "./welfare.js";

export function showDashboard(user) {

    document.getElementById("app").innerHTML = `

    <div class="login-box">

        <h2>👋 สวัสดี</h2>

        <h1>${user.fullname}</h1>

        <hr><br>

        <h3>🏢 ${user.department}</h3>

        <br>

<button
    class="login-btn"
    id="welfareBtn">

    💰 สวัสดิการ

</button>

        <br><br>

        <button class="login-btn">
            กองทุน
        </button>

        <br><br>

        <button class="login-btn">
            ข่าวสาร
        </button>

        <br><br>

        <button class="login-btn">
            FAQ
        </button>

    </div>

    `;

document
    .getElementById("welfareBtn")
    .addEventListener("click", showWelfare);

}