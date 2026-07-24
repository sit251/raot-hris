import { render } from "./script.js";
import { showDashboard } from "./dashboard.js";

export function showNews() {

    render(`

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-newspaper"></i>
ข่าวสาร
</h2>

<p class="subtitle">
ข่าวประชาสัมพันธ์และประกาศจากฝ่ายทรัพยากรมนุษย์<br>
ติดตามข้อมูลข่าวสารล่าสุด
</p>

<div class="section-title">
ข่าวประชาสัมพันธ์
</div>

<div class="faq-card">

<img
src="https://i.ibb.co/SXgdhJ3z/12.jpg"
style="width:100%;border-radius:12px;display:block;">

</div>

<hr>

<div class="faq-card">

<img
src="https://i.ibb.co/yFDNGf8j/10-1.jpg"
style="width:100%;border-radius:12px;display:block;">

</div>

<hr>

<div class="faq-card">

<img
src="https://i.ibb.co/j7PFKpC/1782208422567.jpg"
style="width:100%;border-radius:12px;display:block;">

</div>

<br><br>

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