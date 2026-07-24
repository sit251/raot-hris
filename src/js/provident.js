import { render } from "./script.js";
import { showDashboard } from "./dashboard.js";
import { providentFAQ } from "./data.js";

export function showProvident() {

    render(`

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-graph-up-arrow"></i>
กองทุนสำรองเลี้ยงชีพ
</h2>

<p class="subtitle">
บริการข้อมูลกองทุนสำรองเลี้ยงชีพ<br>
เลือกเมนูที่ต้องการใช้งาน
</p>

<div class="section-title">
เมนูบริการ
</div>

<div class="menu-card" id="providentFAQBtn">

    <div class="menu-icon">
<i class="bi bi-patch-question-fill"></i>
</div>

    <div>

        <div class="menu-title">
            คำถามที่พบบ่อย
        </div>

        <div class="menu-desc">
            ข้อมูลกองทุนสำรองเลี้ยงชีพ
        </div>

    </div>

</div>

<div class="menu-card" id="mfcBtn">

    <div class="menu-icon">
<i class="bi bi-phone-fill"></i>
</div>

    <div>

        <div class="menu-title">
            App MFC
        </div>

        <div class="menu-desc">
            การเข้าใช้งานระบบ
        </div>

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

function showMFC() {

    render(`

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-phone-fill"></i>
App MFC
</h2>

<p class="subtitle">
การเข้าใช้งานระบบ MFC
</p>

<div class="faq-card">

<div class="question">

<i class="bi bi-question-circle-fill"></i>
ขอรหัสเข้า App MFC

</div>

<div class="answer">

<b>
<i class="bi bi-person-fill"></i>
ชื่อผู้ใช้งาน
</b>

<br>

เลขบัตรประชาชน 13 หลัก

<br><br>

<b>
<i class="bi bi-key-fill"></i>
รหัสผ่าน
</b>

<br>

RAOT ตามด้วยรหัสพนักงาน

<br>

<b>(RAOT ต้องเป็นตัวพิมพ์ใหญ่)</b>

<br><br>

ตัวอย่าง

<br>

<b>RAOT12345</b>

<br><br>

<b>กรณีสมาชิกเปลี่ยนรหัสผ่านแล้ว</b>

<br>

หากลืมรหัสผ่าน

สามารถกด

<b>ลืมรหัสผ่าน / ตั้งรหัสผ่านใหม่</b>

เพื่อกำหนดรหัสผ่านใหม่ได้

<br><br>

<div class="faq-image">

    <img
    src="https://drive.google.com/thumbnail?id=1WEHUe2zvx6OgmkqTBqCPA6RFLntN73HC&sz=w1000"
    alt="ตัวอย่างการตั้งรหัสผ่าน App MFC"
    class="mfc-guide-image">

</div>

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-phone-fill"></i>
เปลี่ยนโทรศัพท์ใหม่ / เปลี่ยนเบอร์โทร

</div>

<div class="answer">

กรณีสมาชิกเปลี่ยนโทรศัพท์ใหม่
เปลี่ยนหมายเลขโทรศัพท์
หรือจำรหัสเข้าใช้งาน App MFC ไม่ได้

<br><br>

<i class="bi bi-telephone-fill"></i>
โทร 10506

<br>

ขอสาย <b>แผนกกองทุนสำรองเลี้ยงชีพ</b>

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-lock-fill"></i>
ลืมรหัสผ่าน หรือรหัสถูกระงับ

</div>

<div class="answer">

สมาชิกสามารถแจ้งขอปลดล็อกรหัสผ่านได้

<br><br>

<i class="bi bi-telephone-fill"></i>
โทร 10506

<br>

ขอสาย <b>แผนกกองทุนสำรองเลี้ยงชีพ</b>

</div>

</div>

<button
class="login-btn welfare-btn"
id="backProvident">

<span>

<i class="bi bi-arrow-left-circle-fill"></i>

กลับหน้ากองทุนสำรองเลี้ยงชีพ

</span>

<i class="bi bi-chevron-right"></i>

</button>

</div>

`);

    document
        .getElementById("backProvident")
        .addEventListener("click", showProvident);

}

function showProvidentFAQ() {

    let html = `

<div class="login-box">

<i class="bi bi-patch-question-fill"></i>
คำถามที่พบบ่อย

<p class="subtitle">
ข้อมูลกองทุนสำรองเลี้ยงชีพ
</p>

`;

    providentFAQ.forEach(item => {

        html += `

<div class="faq-card">

    <div class="question">
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
id="backProvident">

<span>

<i class="bi bi-arrow-left-circle-fill"></i>

กลับหน้ากองทุนสำรองเลี้ยงชีพ

</span>

<i class="bi bi-chevron-right"></i>

</button>

</div>

`;

    render(html);

    document
        .getElementById("backProvident")
        .addEventListener("click", showProvident);

}

    document
        .getElementById("backDashboard")
        .addEventListener("click", () => showDashboard(window.currentUser));

    document
    .getElementById("providentFAQBtn")
    .addEventListener("click", showProvidentFAQ);

    document
        .getElementById("mfcBtn")
        .addEventListener("click", showMFC);  }