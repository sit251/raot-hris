import { render } from "./script.js";
import { showDashboard } from "./dashboard.js";
import { welfareFAQ } from "./data.js";
export function showWelfare(){

render(`

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-heart-pulse-fill"></i>
สวัสดิการสงเคราะห์
</h2>

<p class="subtitle">
บริการข้อมูลสวัสดิการและสิทธิประโยชน์<br>
เลือกเมนูที่ต้องการใช้งาน
</p>

<div class="section-title">
เมนูบริการ
</div>

<div class="menu-card" id="hospitalBtn">

<div class="menu-icon">
<i class="bi bi-hospital-fill"></i>
</div>

<div>

<div class="menu-title">
สถานพยาบาล
</div>

<div class="menu-desc">
ข้อมูลสถานพยาบาลและสิทธิการรักษา
</div>

</div>

</div>

<div class="menu-card" id="familyBtn">

<div class="menu-icon">
<i class="bi bi-people-fill"></i>
</div>

<div>

<div class="menu-title">
สวัสดิการครอบครัว
</div>

<div class="menu-desc">
สิทธิประโยชน์สำหรับบุตรและครอบครัว
</div>

</div>

</div>

<div class="menu-card" id="funeralBtn">

<div class="menu-icon">
<i class="bi bi-flower1"></i>
</div>

<div>

<div class="menu-title">
เงินช่วยเหลือกรณีเสียชีวิต
</div>

<div class="menu-desc">
ค่าทำศพและสิทธิประโยชน์ที่เกี่ยวข้อง
</div>

</div>

</div>

<div class="menu-card" id="faqBtn">

<div class="menu-icon">
<i class="bi bi-patch-question-fill"></i>
</div>

<div>

<div class="menu-title">
คำถามทั่วไป
</div>

<div class="menu-desc">
รวมคำถามที่พบบ่อยเกี่ยวกับสวัสดิการ
</div>

</div>

</div>

<button
class="login-btn welfare-btn"
id="backBtn">

<span>

<i class="bi bi-house-door-fill"></i>

กลับสู่หน้าหลัก

</span>

<i class="bi bi-chevron-right"></i>

</button>

</div>

`);

document.getElementById("hospitalBtn").addEventListener("click", showHospital);
document.getElementById("familyBtn").addEventListener("click", showFamily);
document.getElementById("funeralBtn").addEventListener("click", showFuneral);
document.getElementById("faqBtn").addEventListener("click", showFAQ);
document.getElementById("backBtn").addEventListener("click", () => showDashboard(window.currentUser));

}

function showHospital(){

render(`

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-hospital-fill"></i>
สถานพยาบาล
</h2>

<p class="subtitle">
ตรวจสอบรายชื่อสถานพยาบาลและข้อมูลการใช้สิทธิรักษาพยาบาล
</p>

<div class="faq-card">

<div class="question">

<i class="bi bi-building"></i>

สถานพยาบาลของทางราชการ

</div>

<div class="answer">

สามารถตรวจสอบรายชื่อสถานพยาบาลของทางราชการได้

<br><br>

<a
href="https://drive.google.com/open?id=1U2mmwafScvf7NIucpkj6VeZcFGU-OXZ5&usp=drive_copy"
target="_blank">

<i class="bi bi-file-earmark-arrow-down-fill"></i>

ดาวน์โหลดรายชื่อสถานพยาบาลของทางราชการ

</a>

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-hospital"></i>

สถานพยาบาลเอกชน

</div>

<div class="answer">

สามารถตรวจสอบรายชื่อสถานพยาบาลเอกชนที่ใช้สิทธิได้

<br><br>

<a
href="https://drive.google.com/open?id=1OlKJ67oDBLsiToRGxx7Nnw35qGVbaQUI&usp=drive_copy"
target="_blank">

<i class="bi bi-file-earmark-arrow-down-fill"></i>

ดาวน์โหลดรายชื่อสถานพยาบาลเอกชน

</a>

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-info-circle-fill"></i>

ขอหนังสือส่งตัวที่ไหน

</div>

<div class="answer">

<b>ส่วนกลาง</b>

<br>

กองค่าตอบแทนและสวัสดิการ
ฝ่ายทรัพยากรมนุษย์

<br><br>

<b>ส่วนภูมิภาค</b>

<br>

ติดต่อหน่วยงานต้นสังกัด

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-question-circle-fill"></i>

ผู้ป่วยใน ไม่ต้องสำรองจ่าย ต้องทำอย่างไร

</div>

<div class="answer">

ขอหนังสือส่งตัวจากต้นสังกัด

<br><br>

แล้วนำไปยื่นที่โรงพยาบาล

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-calendar-check-fill"></i>

หนังสือส่งตัวมีอายุกี่วัน

</div>

<div class="answer">

7 วัน นับจากวันที่ออกหนังสือส่งตัว

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-hospital-fill"></i>

เข้าโรงพยาบาลเอกชนได้หรือไม่

</div>

<div class="answer">

ได้ แต่ต้องเป็นผู้ป่วยใน

<br><br>

เบิกได้ครึ่งหนึ่งของค่ารักษาจริง

แต่ไม่เกิน <b>8,000 บาท</b>

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-arrow-left-circle-fill"></i>

โรงพยาบาลรัฐที่ไม่ได้เป็นคู่สัญญาเข้าได้หรือไม่

</div>

<div class="answer">

สามารถเข้ารับการรักษาได้ทุกแห่งทั่วประเทศ

<br><br>

หากเป็นโรงพยาบาลคู่สัญญา
ไม่ต้องสำรองจ่าย

<br><br>

หากไม่ใช่โรงพยาบาลคู่สัญญา

ให้สำรองจ่ายก่อน
แล้วนำใบเสร็จมาเบิก

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-heart-pulse-fill"></i>

ครอบฟันเบิกได้หรือไม่

</div>

<div class="answer">

สามารถเบิกได้
หากเป็นการครอบฟันเพื่อการรักษาพยาบาล

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-clipboard2-pulse-fill"></i>

ตรวจสุขภาพเบิกได้หรือไม่

</div>

<div class="answer">

สามารถเบิกได้
เมื่อสำนักงานเป็นผู้จัดให้มีการตรวจสุขภาพ

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-hourglass-split"></i>

ข้อบังคับค่ารักษาพยาบาล ถึงไหนแล้ว

</div>

<div class="answer">

ปัจจุบันอยู่ระหว่างการพิจารณาของกระทรวงแรงงาน

</div>

</div>

<button
class="login-btn welfare-btn"
id="backToWelfare">

<span>

<i class="bi bi-arrow-left-circle-fill"></i>

กลับหน้าสวัสดิการ

</span>

<i class="bi bi-chevron-right"></i>

</button>

</div>

`);

document
.getElementById("backToWelfare")
.addEventListener("click", showWelfare);

}

function showFamily(){

render(`

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-people-fill"></i>
สวัสดิการครอบครัว
</h2>

<p class="subtitle">
ข้อมูลสวัสดิการสำหรับบุตรและการศึกษาของบุตร
</p>

<div class="faq-card">

<div class="question">

<i class="bi bi-person-heart"></i>

ค่าช่วยเหลือบุตร

</div>

<div class="answer">

เอกสารและหลักเกณฑ์การขอรับค่าช่วยเหลือบุตร

<br><br>

<a
href="https://drive.google.com/file/d/1zLEmT49FQdwlZGt1LO4O6hRC2C9-kvSG/view?usp=sharing"
target="_blank">

<i class="bi bi-file-earmark-arrow-down-fill"></i>

ดาวน์โหลดเอกสาร

</a>

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-mortarboard-fill"></i>

ค่าช่วยเหลือการศึกษาของบุตร

</div>

<div class="answer">

เอกสารและหลักเกณฑ์การขอรับค่าการศึกษาบุตร

<br><br>

<a
href="https://drive.google.com/file/d/1CteVMzC340-EnPDrx5E3AQBrHZvsTbzc/view?usp=sharing"
target="_blank">

<i class="bi bi-file-earmark-arrow-down-fill"></i>

ดาวน์โหลดเอกสาร

</a>

</div>

</div>

<button
class="login-btn welfare-btn"
id="backToWelfare">

<span>

<i class="bi bi-arrow-left-circle-fill"></i>

กลับหน้าสวัสดิการ

</span>

<i class="bi bi-chevron-right"></i>

</button>

</div>

`);

document
.getElementById("backToWelfare")
.addEventListener("click", showWelfare);

}

function showFuneral(){

render(`

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-flower1"></i>
เงินช่วยเหลือกรณีเสียชีวิต
</h2>

<p class="subtitle">
ข้อมูลเกี่ยวกับค่าทำศพและสิทธิประโยชน์ที่เกี่ยวข้อง
</p>

<div class="faq-card">

<div class="question">

<i class="bi bi-file-earmark-text-fill"></i>

ค่าทำศพ

</div>

<div class="answer">

เอกสารและหลักเกณฑ์การขอรับค่าทำศพ

<br><br>

<a
href="https://drive.google.com/file/d/1MbiSPzYFNbabYjRqr_s24UGyPwbdkZhx/view?usp=sharing"
target="_blank">

<i class="bi bi-file-earmark-arrow-down-fill"></i>

ดาวน์โหลดเอกสาร

</a>

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-person-check-fill"></i>

ผู้มีอำนาจอนุมัติค่าทำศพ

</div>

<div class="answer">

<a
href="https://drive.google.com/file/d/1JCe1zaFG5emQa0S-gi5af3_8cbEFhWMx/view?usp=sharing"
target="_blank">

<i class="bi bi-file-earmark-arrow-down-fill"></i>

ดาวน์โหลดเอกสาร

</a>

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-cash-coin"></i>

ฌาปนกิจ (ฌกยท.)

</div>

<div class="answer">

สมาชิกจะได้รับเงินตามจำนวนที่เรียกเก็บจากสมาชิกทั้งหมด

<br><br>

เรียกเก็บสมาชิกคนละ

<b>10 บาท</b>

<br><br>

ปัจจุบันมีสมาชิกประมาณ

<b>2,800 คน</b>

<br><br>

คิดเป็นเงินประมาณ

<b>28,000 บาท</b>

<br><br>

แบ่งการจ่ายเป็น

<ul style="margin-top:10px">

<li>งวดแรก 60%</li>

<li>งวดสุดท้าย 40%</li>

</ul>

</div>

</div>

<button
class="login-btn welfare-btn"
id="backToWelfare">

<span>

<i class="bi bi-arrow-left-circle-fill"></i>

กลับหน้าสวัสดิการ

</span>

<i class="bi bi-chevron-right"></i>

</button>

</div>

`);

document
.getElementById("backToWelfare")
.addEventListener("click", showWelfare);

}

function showFAQ() {

    let html = `

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-patch-question-fill"></i>
คำถามทั่วไป
</h2>

<p class="subtitle">
รวมคำถามที่พบบ่อยเกี่ยวกับสวัสดิการ
</p>

`;

    welfareFAQ.forEach(item => {

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
id="backToWelfare">

<span>

<i class="bi bi-arrow-left-circle-fill"></i>

กลับหน้าสวัสดิการ

</span>

<i class="bi bi-chevron-right"></i>

</button>

</div>

`;

    render(html);

    document
        .getElementById("backToWelfare")
        .addEventListener("click", showWelfare);

}