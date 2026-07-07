export function showSplash(next) {

    document.getElementById("app").innerHTML = `

    <div class="splash-screen">

        <img src="src/assets/logo.png" class="splash-logo">

        <h1>RAOT HRIS</h1>

        <p>ระบบสวัสดิการและค่าตอบแทน</p>

        <span class="loading"></span>

    </div>

    `;

    setTimeout(() => {

        next();

    }, 2000);

}