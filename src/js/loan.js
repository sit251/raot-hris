import { render } from "./script.js";
import { showDashboard } from "./dashboard.js";
import { loanFAQ } from "./data.js";
import {
    createHeader,
    createMenuCard,
    createBackButton
} from "./components.js";

import { db } from "../firebase/firebase-config.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

export function showLoan() {

render(`

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-cash-stack"></i>
สวัสดิการเงินกู้
</h2>

<p class="subtitle">
บริการข้อมูลเงินกู้และกองทุนสวัสดิการ<br>
เลือกเมนูที่ต้องการใช้งาน
</p>

<div class="section-title">
    เมนูบริการ
</div>

<div class="menu-card" id="loanRegisterBtn">

    <div class="menu-icon">
<i class="bi bi-person-plus-fill"></i>
</div>

    <div>

        <div class="menu-title">
            สมัครสมาชิก
        </div>

        <div class="menu-desc">
    ขั้นตอนการสมัครและเอกสารประกอบ
</div>

    </div>

</div>

<br>

<div class="menu-card" id="loanInfoBtn">

    <div class="menu-icon">
<i class="bi bi-wallet2"></i>
</div>

    <div>

        <div class="menu-title">
            ข้อมูลเงินกู้
        </div>

        <div class="menu-desc">
            วงเงินกู้ ดอกเบี้ย และเงื่อนไข
        </div>

    </div>

</div>

<div class="menu-card" id="guarantorBtn">

    <div class="menu-icon">
<i class="bi bi-people-fill"></i>
</div>

    <div>

        <div class="menu-title">
            ผู้ค้ำประกัน
        </div>

        <div class="menu-desc">
            ข้อมูลผู้ค้ำและการตรวจสอบ
        </div>

    </div>

</div>

<div class="menu-card" id="meetingBtn">

    <div class="menu-icon">
        <i class="bi bi-clipboard-check-fill"></i>
    </div>

    <div>

        <div class="menu-title">
            ตรวจสอบการเข้ารอบประชุม
        </div>

        <div class="menu-desc">
            ค้นหาด้วยเลขพนักงาน
        </div>

    </div>

</div>

<div class="menu-card" id="loanFAQBtn">

    <div class="menu-icon">
        <i class="bi bi-patch-question-fill"></i>
    </div>

    <div>

        <div class="menu-title">
            คำถามที่พบบ่อย
        </div>

        <div class="menu-desc">
            คำถามเพิ่มเติมเกี่ยวกับเงินกู้
        </div>

    </div>

</div>

<button
class="login-btn welfare-btn"
id="backDashboard">

<span>

<i class="bi bi-house-door-fill"></i>

กลับหน้าหลัก

</span>

<i class="bi bi-chevron-right"></i>

</button>

</div>

`); 

document
.getElementById("backDashboard")
.addEventListener("click", () => showDashboard(window.currentUser));

document
.getElementById("loanRegisterBtn")
.addEventListener("click", showLoanRegister);

document
.getElementById("loanInfoBtn")
.addEventListener("click", showLoanInfo);

document
.getElementById("guarantorBtn")
.addEventListener("click", showGuarantor);

document
.getElementById("meetingBtn")
.addEventListener("click", showMeeting);

document
.getElementById("loanFAQBtn")
.addEventListener("click", showLoanFAQ);

}

function showLoanRegister() {

    render(`

    <div class="login-box">

        <h2 style="color:#006633;">
        📝 สมัครสมาชิก
        </h2>

        <p class="subtitle">
        ข้อมูลการสมัครสมาชิกกองทุนสวัสดิการเงินกู้
        </p>

        <div class="faq-card">

<div class="question">

<i class="bi bi-question-circle-fill"></i>
สมัครสมาชิกอย่างไร

</div>

<div class="answer">

เข้าสู่ระบบลูกหนี้

<br>

➡ เงินทุนสวัสดิการ

<br>

➡ สมัครส่งเงินสมทบ

<br>

➡ สมัครสมาชิก

<br>

➡ กรอกข้อมูล

<br>

➡ บันทึก

<br>

➡ กดส่งคำขอในระบบ

<br><br>

<b style="color:red;">
<i class="bi bi-pin-angle-fill"></i>
อย่าลืมส่งเอกสารตัวจริงมายังกองค่าตอบแทนและสวัสดิการ
</b>

<br><br>

เอกสารแนบ

<ul>

<li>สำเนาบัตรประชาชน</li>

<li>สำเนาบัตรพนักงาน</li>

<li>สำเนาทะเบียนบ้าน</li>

<li>กรณีมีคู่สมรส แนบสำเนาบัตรประชาชน สำเนาทะเบียนบ้าน และสำเนาใบสำคัญสมรส</li>

</ul>

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-patch-question-fill"></i>

ต้องส่งเงินสมทบเท่าไหร่ ส่งเงินครั้งเดียวทั้งหมดเลยได้หรือไม่

</div>

<div class="answer">

<b>พนักงาน</b>

<br>

ส่งเงินสมทบ <b>12,000 บาท</b>

<br><br>

ไม่สามารถส่งครั้งเดียวได้

<br><br>

<b>รูปแบบที่ 1</b>

<br>

12 เดือน เดือนละ 1,000 บาท

<br><br>

<b>รูปแบบที่ 2</b>

<br>

6 เดือน เดือนละ 2,000 บาท

<br><br>

<b>ลูกจ้างประจำ</b>

<br>

ส่งเงินสมทบ <b>2,000 บาท</b>

<br>

ชำระครั้งเดียว

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-patch-question-fill"></i>

เมื่อไหร่จะกู้ได้

</div>

<div class="answer">

เมื่อหักเงินสมทบครบ

<b>12,000 บาท</b>

จึงสามารถยื่นกู้ได้

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-patch-question-fill"></i>

เงินสมทบ 12,000 บาท เมื่อไม่อยากเป็นสมาชิก จะได้รับเงินคืนหรือไม่

</div>

<div class="answer">

<b>ไม่สามารถเรียกคืนได้</b>

<br><br>

แต่เมื่อส่งเงินสมทบครบแล้ว

พนักงานหรือลูกจ้างประจำ

จะได้รับสิทธิประโยชน์ของกองทุนสวัสดิการ

จนกว่าจะพ้นสภาพการเป็นพนักงานหรือลูกจ้างของ กยท.

</div>

</div>

<button
class="login-btn welfare-btn"
id="backLoan">

<span>

<i class="bi bi-arrow-left-circle-fill"></i>

กลับหน้าสวัสดิการเงินกู้

</span>

<i class="bi bi-chevron-right"></i>

</button>

    </div>

    `);

    document
        .getElementById("backLoan")
        .addEventListener("click", showLoan);

}

function showLoanInfo() {

    render(`

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-wallet2"></i>
ข้อมูลเงินกู้
</h2>

<p class="subtitle">
วงเงินกู้ อัตราดอกเบี้ย และเงื่อนไขการกู้
</p>

<div class="faq-card">

<div class="question">

<i class="bi bi-patch-question-fill"></i>

กู้ได้เท่าไหร่

</div>

<div class="answer">

<b>1. เพื่อบรรเทาความเดือดร้อน</b>

<ul>

<li>วงเงินไม่เกิน 200,000 บาท</li>

<li>ดอกเบี้ย 1%</li>

<li>ผ่อนได้ไม่เกิน 6 ปี</li>

</ul>

<b>2. เพื่อรักษาพยาบาล</b>

<ul>

<li>วงเงินไม่เกิน 200,000 บาท (ตามยอดจริง)</li>

<li>ดอกเบี้ย 1%</li>

<li>ผ่อนได้ไม่เกิน 6 ปี</li>

</ul>

<b>3. เพื่อการศึกษา</b>

<ul>

<li>วงเงินไม่เกิน 200,000 บาท</li>

<li>ดอกเบี้ย 2%</li>

<li>ผ่อนได้ไม่เกิน 6 ปี</li>

<li>เริ่มหักเมื่อจบการศึกษา</li>

</ul>

<b>4. ซื้อ / สร้าง / ไถ่ถอนที่อยู่อาศัย</b>

<ul>

<li>วงเงินไม่เกิน 2,000,000 บาท</li>

<li>ดอกเบี้ย 2.65%</li>

<li>ผ่อนได้ไม่เกิน 15 ปี</li>

</ul>

<b>5. เพื่อส่งเสริมสวัสดิการอื่น ๆ</b>

<ul>

<li>ใช้บุคคลค้ำ วงเงินไม่เกิน 300,000 บาท</li>

<li>ใช้หลักทรัพย์ค้ำ วงเงินไม่เกิน 600,000 บาท</li>

<li>ดอกเบี้ย 3%</li>

<li>ผ่อนได้ไม่เกิน 8 ปี</li>

</ul>

<b>6. ซื้ออุปกรณ์อิเล็กทรอนิกส์</b>

<ul>

<li>วงเงินไม่เกิน 50,000 บาท</li>

<li>ดอกเบี้ย 2%</li>

<li>ผ่อนได้ไม่เกิน 4 ปี</li>

</ul>

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-patch-question-fill"></i>

กรณีกู้อยู่แล้ว 1 สัญญา จะกู้เพิ่มได้หรือไม่

</div>

<div class="answer">

ผู้กู้สามารถกู้ได้เพียง 1 สัญญา

<br><br>

ยกเว้น

<ul>

<li>กู้เพื่อบรรเทาความเดือดร้อน</li>

<li>กู้เพื่อรักษาพยาบาล</li>

</ul>

สามารถกู้เพิ่มได้

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-patch-question-fill"></i>

หากต้องการปิดเงินกู้ ปิดได้หรือไม่

</div>

<div class="answer">

สามารถปิดเงินกู้ได้

<br><br>

<b>ตั้งแต่วันที่ 1 - 10 ของทุกเดือน</b>

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-patch-question-fill"></i>

หากปิดเงินกู้เดิมแล้ว เมื่อไหร่จะยื่นกู้ใหม่ได้

</div>

<div class="answer">

เมื่อปิดเงินกู้เดิมแล้ว

สามารถยื่นกู้ในระบบได้ทันที

</div>

</div>

<button
class="login-btn welfare-btn"
id="backLoan">

<span>

<i class="bi bi-arrow-left-circle-fill"></i>

กลับหน้าสวัสดิการเงินกู้

</span>

<i class="bi bi-chevron-right"></i>

</button>

</div>

`);

    document
        .getElementById("backLoan")
        .addEventListener("click", showLoan);

}

function showGuarantor() {

    render(`

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-people-fill"></i>
ผู้ค้ำประกัน
</h2>

<p class="subtitle">
ข้อมูลเกี่ยวกับผู้ค้ำประกันและการยื่นกู้
</p>

<div class="faq-card">

<div class="question">

<i class="bi bi-patch-question-fill"></i>

เราสามารถค้ำประกันเงินกู้ได้กี่สัญญา

</div>

<div class="answer">

สามารถค้ำประกันเงินกู้สวัสดิการ

<b>ได้คนละไม่เกิน 3 สัญญา</b>

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-patch-question-fill"></i>

ตรวจสอบรายชื่อผู้ค้ำประกันได้ที่ไหน

</div>

<div class="answer">

พนักงานสามารถตรวจสอบรายชื่อผู้ค้ำประกันได้ที่

<br><br>

<i class="bi bi-arrow-right-circle-fill"></i> เข้าสู่ระบบลูกหนี้

<br>

<i class="bi bi-arrow-right-circle-fill"></i> เงินทุนสวัสดิการ

<br>

<i class="bi bi-arrow-right-circle-fill"></i> รายชื่อผู้ค้ำประกัน

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-patch-question-fill"></i>

กรณีส่งคำขอกู้ไปแล้ว หากต้องการแก้ไขข้อมูลคำขอกู้ได้หรือไม่

</div>

<div class="answer">

ตรวจสอบสถานะเอกสารก่อน

<br><br>

<b><i class="bi bi-pin-angle-fill"></i> สถานะยังไม่ส่ง</b>

<br>

ผู้กู้สามารถแก้ไขได้เอง

<br><br>

<b><i class="bi bi-pin-angle-fill"></i> รอพิจารณาจากอำเภอ</b>

<br>

การเงินสาขาสามารถแก้ไขได้

<br><br>

<b><i class="bi bi-pin-angle-fill"></i> รอพิจารณาจากจังหวัด</b>

<br>

การเงินจังหวัดสามารถแก้ไขได้

<br><br>

<b><i class="bi bi-pin-angle-fill"></i> รอพิจารณาจากส่วนกลาง</b>

<br>

แผนกสวัสดิการเงินกู้สามารถแก้ไขได้

</div>

</div>

<div class="faq-card">

<div class="question">

<i class="bi bi-patch-question-fill"></i>

หากต้องการกู้แบบใช้หลักทรัพย์ค้ำประกัน แต่มูลค่าของหลักทรัพย์ 80% น้อยกว่ายอดเงินที่ต้องการกู้ ทำอย่างไร

</div>

<div class="answer">

สามารถเสนอให้คณะกรรมการพิจารณา

เพิ่มวงเงินได้

<b>ไม่เกิน 3 เท่า</b>

<br><br>

<b>คณะกรรมการประกอบด้วย</b>

<ul>

<li>ผอ.กยท.จังหวัด</li>

<li>หัวหน้าระดับกอง</li>

<li>เลขานุการเงินทุนสวัสดิการ / หัวหน้าระดับกอง</li>

</ul>

</div>

</div>

<button
class="login-btn welfare-btn"
id="backLoan">

<span>

<i class="bi bi-arrow-left-circle-fill"></i>

กลับหน้าสวัสดิการเงินกู้

</span>

<i class="bi bi-chevron-right"></i>

</button>

</div>

`);

    document
        .getElementById("backLoan")
        .addEventListener("click", showLoan);

}

function showMeeting(){

render(`

<div class="login-box">

<div style="text-align:center; margin-bottom:25px;">

<i
class="bi bi-clipboard2-check-fill"
style="font-size:55px;color:#006633;">
</i>

<h2 style="
color:#006633;
margin:10px 0 5px;
font-size:28px;
font-weight:bold;
">

ตรวจสอบการเข้ารอบประชุม

</h2>

<p style="
color:#666;
font-size:15px;
line-height:24px;
">

ตรวจสอบรายชื่อผู้เข้าร่วมประชุม
<br>
กองทุนสวัสดิการเงินกู้

</p>

</div>

<div class="faq-card">

<div style="
font-weight:bold;
color:#006633;
margin-bottom:10px;
">

<i class="bi bi-person-badge-fill"></i>

เลขพนักงาน

</div>

<input
type="text"
id="employeeNo"
class="input-box"
placeholder="กรุณากรอกเลขพนักงาน"
autocomplete="off"
autocorrect="off"
autocapitalize="off"
spellcheck="false">

</div>

<br>

<button
class="login-btn welfare-btn"
id="searchMeeting">

<span>

<i class="bi bi-search"></i>

ตรวจสอบข้อมูล

</span>

<i class="bi bi-chevron-right"></i>

</button>

<br>

<button
class="login-btn welfare-btn"
id="backLoan">

<span>

<i class="bi bi-arrow-left-circle-fill"></i>

กลับสวัสดิการเงินกู้

</span>

<i class="bi bi-chevron-right"></i>

</button>

</div>

`);

document
.getElementById("backLoan")
.addEventListener("click", showLoan);

document
.getElementById("searchMeeting")
.addEventListener("click", searchMeeting);

}

async function searchMeeting() {

    console.log("✅ searchMeeting ทำงาน");

    const employeeNo = document
        .getElementById("employeeNo")
        .value
        .trim();

    if (!employeeNo) {

        alert("กรุณากรอกเลขพนักงาน");

        return;

    }

    try {

        const docRef = doc(db, "meetingRounds", employeeNo);

        const docSnap = await getDoc(docRef);

        console.log("exists =", docSnap.exists());
console.log("data =", docSnap.data());

        if (!docSnap.exists()) {

            alert("ไม่พบข้อมูลการเข้ารอบประชุม");

            return;

        }

        const data = docSnap.data();

        showMeetingResult(data);

    }

    catch (error) {

        console.error(error);

        alert("เกิดข้อผิดพลาด");

    }

}

function showMeetingResult(data) {

    let monthsHtml = "";

    data.months.forEach(month => {

        monthsHtml += `

<div class="faq-card">

<div class="answer">

<i class="bi bi-check-circle-fill"
style="color:#198754;"></i>

<b>${month}</b>

</div>

</div>

`;

    });

    render(`

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-clipboard2-check-fill"></i>
ตรวจสอบการเข้ารอบประชุม
</h2>

<p class="subtitle">
ผลการตรวจสอบข้อมูลการเข้าร่วมประชุม
</p>

<div class="faq-card">

<div class="question">
<i class="bi bi-person-badge-fill"></i>
ชื่อ - นามสกุล
</div>

<div class="answer">

<b style="font-size:18px;">
${data.fullname}
</b>

</div>

</div>

<br>

<div class="section-title">

<i class="bi bi-calendar-check-fill"></i>

เดือนที่ผ่านการเข้าร่วมประชุม

</div>

${monthsHtml}

<br>

<button
class="login-btn welfare-btn"
id="backMeeting">

<span>

<i class="bi bi-arrow-left-circle-fill"></i>

กลับหน้าตรวจสอบการประชุม

</span>

<i class="bi bi-chevron-right"></i>

</button>

</div>

`);

    document
        .getElementById("backMeeting")
        .addEventListener("click", showMeeting);

}

function showLoanFAQ() {

    let html = `

<div class="login-box">

<h2 style="color:#006633;">
<i class="bi bi-patch-question-fill"></i>
คำถามที่พบบ่อย
</h2>

<p class="subtitle">
คำถามที่พบบ่อยเกี่ยวกับสวัสดิการเงินกู้
</p>

`;

    loanFAQ.forEach(item => {

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
id="backLoan">

<span>

<i class="bi bi-arrow-left-circle-fill"></i>

กลับหน้าสวัสดิการเงินกู้

</span>

<i class="bi bi-chevron-right"></i>

</button>

</div>

`;

    render(html);

    document
        .getElementById("backLoan")
        .addEventListener("click", showLoan);

}