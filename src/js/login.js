import { db } from "../firebase/firebase-config.js";
import { showDashboard } from "./dashboard.js";
import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

export async function login() {

    const empid = document.getElementById("empid").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    message.style.color = "red";
    message.innerHTML = "";

    if (!empid || !password) {
        message.innerHTML = "กรุณากรอกรหัสพนักงานและรหัสผ่าน";
        return;
    }

    try {

        const ref = doc(db, "employees", empid);
        const snap = await getDoc(ref);

        if (!snap.exists()) {
            message.innerHTML = "ไม่พบรหัสพนักงาน";
            return;
        }

        const user = snap.data();

        if (user.password !== password) {
            message.innerHTML = "รหัสผ่านไม่ถูกต้อง";
            return;
        }

window.currentUser = user;

showDashboard(user);

    } catch (err) {

        console.error(err);
        message.innerHTML = "เกิดข้อผิดพลาด";

    }

}