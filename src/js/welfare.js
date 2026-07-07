import { render } from "./script.js";
import { showDashboard } from "./dashboard.js";

export function showWelfare(){

render(`

<div class="login-box">

<h2 style="color:#006633;">❤️ สวัสดิการสงเคราะห์</h2>

<p class="subtitle">

เลือกหมวดข้อมูลที่ต้องการค้นหา

</p>

<button
    class="login-btn"
    id="hospitalBtn">

🏥 สถานพยาบาล

</button>

<br><br>

<button
class="login-btn"
id="familyBtn">

👨‍👩‍👧 สวัสดิการครอบครัว

</button>

<br><br>

<button
class="login-btn"
id="funeralBtn">

🕊️ เงินช่วยเหลือกรณีเสียชีวิต

</button>

<br><br>

<button
class="login-btn"
id="faqBtn">

❓ คำถามทั่วไป

</button>

<br><br>

<button
class="login-btn"
style="background:#777;"
id="backBtn">

🔙 กลับหน้าหลัก

</button>

</div>

`);

document
    .getElementById("hospitalBtn")
    .addEventListener("click", showHospital);

document
.getElementById("familyBtn")
.addEventListener("click", showFamily);

document
.getElementById("funeralBtn")
.addEventListener("click", showFuneral);

document
.getElementById("faqBtn")
.addEventListener("click", showFAQ);

document
.getElementById("backBtn")
.addEventListener("click", () => showDashboard(window.currentUser));

}

function showHospital(){

render(`

<div class="login-box">

<h2>🏥 สถานพยาบาล</h2>

<p class="subtitle">
ตรวจสอบรายชื่อสถานพยาบาลและข้อมูลการใช้สิทธิรักษาพยาบาล
</p>

<div class="faq-card">

<div class="question">
🏛️ สถานพยาบาลของทางราชการ
</div>

<div class="answer">

สามารถตรวจสอบรายชื่อสถานพยาบาลของทางราชการได้จากเอกสารด้านล่าง

<br><br>

<a
href="https://drive.google.com/open?id=1U2mmwafScvf7NIucpkj6VeZcFGU-OXZ5&usp=drive_copy"
target="_blank">

📄 ดาวน์โหลดรายชื่อสถานพยาบาลของทางราชการ

</a>

</div>

</div>

<div class="faq-card">

<div class="question">
🏥 สถานพยาบาลเอกชน
</div>

<div class="answer">

สามารถตรวจสอบรายชื่อสถานพยาบาลเอกชนที่ใช้สิทธิได้จากเอกสารด้านล่าง

<br><br>

<a
href="https://drive.google.com/open?id=1OlKJ67oDBLsiToRGxx7Nnw35qGVbaQUI&usp=drive_copy"
target="_blank">

📄 ดาวน์โหลดรายชื่อสถานพยาบาลเอกชน

</a>

</div>

</div>

<div class="faq-card">

<div class="question">
❓ ขอหนังสือส่งตัวที่ไหน
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
❓ ผู้ป่วยใน ไม่ต้องสำรองจ่าย ต้องทำอย่างไร
</div>

<div class="answer">

ขอหนังสือส่งตัวจากต้นสังกัด

แล้วนำไปยื่นที่โรงพยาบาล

</div>

</div>

<div class="faq-card">

<div class="question">
❓ หนังสือส่งตัวมีอายุกี่วัน
</div>

<div class="answer">

7 วัน

นับจากวันที่ออกหนังสือส่งตัว

</div>

</div>

<div class="faq-card">

<div class="question">
❓ เข้าโรงพยาบาลเอกชนได้หรือไม่
</div>

<div class="answer">

ได้

แต่ต้องเป็นผู้ป่วยใน

<br><br>

เบิกได้ครึ่งหนึ่งของค่ารักษาจริง

แต่ไม่เกิน

<b>8,000 บาท</b>

</div>

</div>

<div class="faq-card">

<div class="question">
❓ โรงพยาบาลรัฐที่ไม่ได้เป็นคู่สัญญาเข้าได้หรือไม่
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
❓ ครอบฟันเบิกได้หรือไม่
</div>

<div class="answer">

สามารถเบิกได้

หากเป็นการครอบฟันเพื่อการรักษาพยาบาล

</div>

</div>

<div class="faq-card">

<div class="question">
❓ ตรวจสุขภาพเบิกได้หรือไม่
</div>

<div class="answer">

สามารถเบิกได้

เมื่อสำนักงานเป็นผู้จัดให้มีการตรวจสุขภาพ

</div>

</div>

<div class="faq-card">

<div class="question">
❓ ข้อบังคับค่ารักษาพยาบาล ถึงไหนแล้ว
</div>

<div class="answer">

ปัจจุบัน

อยู่ระหว่างการพิจารณาของกระทรวงแรงงาน

</div>

</div>

<button
class="login-btn"
id="backToWelfare">

🔙 กลับ

</button>

</div>

`);

document
.getElementById("backToWelfare")
.addEventListener("click", showWelfare);

}

function showFamily() {

render(`

<div class="login-box">

<h2 style="color:#006633;">
👨‍👩‍👧 สวัสดิการครอบครัว
</h2>

<p class="subtitle">
ข้อมูลสวัสดิการสำหรับบุตรและการศึกษาของบุตร
</p>

<div class="faq-card">

<div class="question">
👶 ค่าช่วยเหลือบุตร
</div>

<div class="answer">

<a
href="https://drive.google.com/file/d/1zLEmT49FQdwlZGt1LO4O6hRC2C9-kvSG/view?usp=sharing"
target="_blank">

📄 ดาวน์โหลดเอกสาร

</a>

</div>

</div>

<div class="faq-card">

<div class="question">
🎓 ค่าช่วยเหลือการศึกษาของบุตร
</div>

<div class="answer">

<a
href="https://drive.google.com/file/d/1CteVMzC340-EnPDrx5E3AQBrHZvsTbzc/view?usp=sharing"
target="_blank">

📄 ดาวน์โหลดเอกสาร

</a>

</div>

</div>

<button
class="login-btn"
id="backToWelfare">

🔙 กลับ

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
🕊️ เงินช่วยเหลือกรณีเสียชีวิต
</h2>

<p class="subtitle">
ข้อมูลเกี่ยวกับค่าทำศพและสิทธิประโยชน์ที่เกี่ยวข้อง
</p>

<div class="faq-card">

<div class="question">
⚰️ ค่าทำศพ
</div>

<div class="answer">

<a
href="https://drive.google.com/file/d/1MbiSPzYFNbabYjRqr_s24UGyPwbdkZhx/view?usp=sharing"
target="_blank">

📄 ดาวน์โหลดเอกสาร

</a>

</div>

</div>

<div class="faq-card">

<div class="question">
🏵️ ผู้มีอำนาจอนุมัติค่าทำศพ
</div>

<div class="answer">

<a
href="https://drive.google.com/file/d/1JCe1zaFG5emQa0S-gi5af3_8cbEFhWMx/view?usp=sharing"
target="_blank">

📄 ดาวน์โหลดเอกสาร

</a>

</div>

</div>

<div class="faq-card">

<div class="question">
🏵️ ฌาปนกิจ (ฌกยท.) ได้เงินเท่าไหร่?
</div>

<div class="answer">

สมาชิกจะได้รับเงินตามจำนวนที่เรียกเก็บจากสมาชิกทั้งหมด คนละ 10 บาท

<br><br>

ปัจจุบันมีสมาชิกประมาณ 2,800 คน

คิดเป็นเงินประมาณ 28,000 บาท

<br><br>

แบ่งการจ่ายเป็น

<ul style="margin-top:10px;">
<li>งวดแรก 60%</li>
<li>งวดสุดท้าย 40%</li>
</ul>

</div>

</div>

<button
class="login-btn"
id="backToWelfare">

🔙 กลับ

</button>

</div>

`);

document
.getElementById("backToWelfare")
.addEventListener("click", showWelfare);

}

function showFAQ(){

render(`

<div class="login-box">

<h2 style="color:#006633;">
❓ คำถามทั่วไป
</h2>

<p class="subtitle">
รวมคำถามทั่วไปเกี่ยวกับสวัสดิการ
</p>

<div class="faq-card">

<div class="question">
🔴 เงินเสี่ยงภัย ได้เท่าไหร่
</div>

<div class="answer">

จ่ายเงินสวัสดิการพิเศษให้แก่ผู้ปฏิบัติงาน
ในพื้นที่เสี่ยงภัยจังหวัดชายแดนภาคใต้

<br><br>

<b>5,000 บาท / เดือน</b>

</div>

</div>

<div class="faq-card">

<div class="question">
🔴 พื้นที่เสี่ยงภัย มีที่ไหนบ้าง
</div>

<div class="answer">

จังหวัดยะลา

<br>

จังหวัดปัตตานี

<br>

จังหวัดนราธิวาส

<br>

และจังหวัดสงขลา ได้แก่

<ul style="margin-top:10px;">

<li>อำเภอจะนะ</li>

<li>อำเภอเทพา</li>

<li>อำเภอนาทวี</li>

<li>อำเภอสะบ้าย้อย</li>

<li>อำเภอสะเดา</li>

</ul>

</div>

</div>

<button
class="login-btn"
id="backToWelfare">

🔙 กลับ

</button>

</div>

`);

document
.getElementById("backToWelfare")
.addEventListener("click", showWelfare);

}