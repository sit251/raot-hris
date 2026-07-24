import { render } from "./script.js";
import { showDashboard } from "./dashboard.js";

export function showContact() {

    render(`

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-telephone-fill"></i>
ติดต่อ HR
</h2>

<p class="subtitle">
ข้อมูลการติดต่อกองค่าตอบแทนและสวัสดิการ<br>
ช่องทางการติดต่อและเบอร์ภายใน
</p>

<div class="faq-card">

    <div class="question">
    <i class="bi bi-telephone-fill"></i>
    เบอร์โทรศัพท์กลาง
</div>

    <div class="answer">
        <b>02-433-2222</b>
    </div>

</div>

<div class="faq-card">

    <i class="bi bi-cash-coin"></i>
แผนกค่าตอบแทน

    <div class="answer">

<span style="font-size:22px;font-weight:bold;color:#006633;">

321

</span>

<br>

หมายเลขต่อภายใน

</div>

</div>

<div class="faq-card">

    <i class="bi bi-graph-up-arrow"></i>
แผนกกองทุนสำรองเลี้ยงชีพ

    <div class="answer">

<span style="font-size:22px;font-weight:bold;color:#006633;">

322

</span>

<br>

หมายเลขต่อภายใน

</div>

</div>

<div class="faq-card">

    <i class="bi bi-cash-stack"></i>
แผนกสวัสดิการเงินกู้

    <div class="answer">
        <span style="font-size:22px;font-weight:bold;color:#006633;">
            323
        </span>
        <br>
        หมายเลขต่อภายใน
    </div>

</div>

<div class="faq-card">

    <i class="bi bi-heart-pulse-fill"></i>
แผนกสวัสดิการสงเคราะห์

    <div class="answer">

<span style="font-size:22px;font-weight:bold;color:#006633;">

324

</span>

<br>

หมายเลขต่อภายใน

</div>

</div>

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

`);

    document
        .getElementById("backDashboard")
        .addEventListener("click", () => showDashboard(window.currentUser));

}