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
const workbook = XLSX.readFile("รายชื่อพนักงานและลูกจ้าง1.xlsx");

const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

const rows = XLSX.utils.sheet_to_json(sheet, {
  defval: "",
});

// ==============================
// Import
// ==============================
async function importEmployees() {
  console.log("==================================");
  console.log("เริ่มนำเข้าข้อมูล...");
  console.log("==================================");

  let success = 0;
  let failed = 0;

  for (const row of rows) {
    try {
      const employeeNo = String(row["เลขประจำตัว"]).trim();
      const fullname = String(row["ชื่อสกุล"]).trim();
      const citizenId = String(row["เลขบัตรประชาชน"]).trim();

      if (!employeeNo || !fullname || !citizenId) {
        console.log("ข้ามข้อมูล:", row);
        failed++;
        continue;
      }

      await db.collection("employees").doc(citizenId).set({
        citizenId: citizenId,
        employeeNo: employeeNo,
        fullname: fullname,
        password: employeeNo,
      });

      success++;
      console.log(`✓ ${success}. ${fullname}`);
    } catch (err) {
      failed++;
      console.error("❌", err.message);
    }
  }

  console.log("");
  console.log("==================================");
  console.log("นำเข้าเสร็จแล้ว");
  console.log("สำเร็จ :", success);
  console.log("ล้มเหลว :", failed);
  console.log("==================================");

  process.exit();
}

importEmployees();