import { render } from "./script.js";
import { showDashboard } from "./dashboard.js";
import { compensationFAQ } from "./data.js";

export function showCompensation() {

    let html = `

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-cash-coin"></i>
ค่าตอบแทน
</h2>

<p class="subtitle">
ข้อมูลด้านค่าตอบแทนและสิทธิประโยชน์<br>
คำถามที่พบบ่อยเกี่ยวกับค่าตอบแทน
</p>

<div class="section-title">
คำถามที่พบบ่อย
</div>

`;

    compensationFAQ.forEach(item => {

        html += `

<div class="faq-card">

    <div class="question">

    <i class="bi bi-patch-question-fill"></i>

    ${item.question}

</div>

    <div class="answer">
        ${item.answer}
    </div>

</div>

`;

    });

    html += `

<button
class="login-btn welfare-btn"
id="backDashboard">

<span>

<i class="bi bi-house-door-fill"></i>

กลับสู่หน้าหลัก

</span>

<i class="bi bi-chevron-right"></i>

</button>

</div>

`;

    render(html);

    document
        .getElementById("backDashboard")
        .addEventListener("click", () => showDashboard(window.currentUser));

}