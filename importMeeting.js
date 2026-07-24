const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const XLSX = require("xlsx");

// ==============================
// Firebase
// ==============================
const serviceAccount = require("./serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

// ==============================
// อ่านไฟล์ Excel
// ==============================
const workbook = XLSX.readFile("ตรวจสอบคำขอกู้-งปม.69.xlsx");

// เก็บข้อมูลทั้งหมด
const meetingData = {};
// ==============================
// อ่านทุก Sheet
// ==============================

for (const sheetName of workbook.SheetNames) {

  const sheet = workbook.Sheets[sheetName];

  const rows = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    defval: "",
  });

  // ข้ามหัวตาราง 2 แถว
  for (let i = 2; i < rows.length; i++) {

    const row = rows[i];

    let employeeNo = "";
    let fullname = "";

    // มกราคม
    if (sheetName.includes("มกราคม")) {

      employeeNo = String(row[2] || "").trim();
      fullname = String(row[3] || "").trim();

    }

    // เดือนอื่น
    else {

      employeeNo = String(row[1] || "").trim();
      fullname = String(row[2] || "").trim();

    }

    // ข้ามถ้าไม่มีข้อมูล
    if (!employeeNo || !fullname) continue;

    // ถ้ายังไม่มี
    if (!meetingData[employeeNo]) {

      meetingData[employeeNo] = {

        employeeNo,

        fullname,

        months: [],

      };

    }

    meetingData[employeeNo].months.push(sheetName);

  }

}

// ==============================
// Import Firestore
// ==============================

async function importMeeting() {

  console.log("==================================");
  console.log("เริ่มนำเข้าข้อมูลการเข้ารอบประชุม...");
  console.log("==================================");

  let success = 0;
  let failed = 0;

  for (const employeeNo in meetingData) {

    try {

      await db.collection("meetingRounds")
        .doc(employeeNo)
        .set(meetingData[employeeNo]);

      success++;

      console.log(
        `✓ ${success}. ${meetingData[employeeNo].fullname}`
      );

    } catch (err) {

      failed++;

      console.error(err.message);

    }

  }

  console.log("");
  console.log("==================================");
  console.log("Import เสร็จ");
  console.log("สำเร็จ :", success);
  console.log("ล้มเหลว :", failed);
  console.log("==================================");

  process.exit();

}

importMeeting();

