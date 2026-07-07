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

            <input
                id="empid"
                type="text"
                placeholder="รหัสพนักงาน"
                class="textbox">

            <input
                id="password"
                type="password"
                placeholder="รหัสผ่าน"
                class="textbox">

            <button id="loginBtn" class="login-btn">
                เข้าสู่ระบบ
            </button>

            <div id="message"></div>

        </div>
    `);

    document
        .getElementById("loginBtn")
        .addEventListener("click", login);
}

showSplash(showLogin);

export { showLogin };