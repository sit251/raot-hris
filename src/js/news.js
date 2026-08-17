import { render } from "./script.js";
import { showDashboard } from "./dashboard.js";
import { db } from "../firebase/firebase-config.js";

import {
    collection,
    getDocs,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

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

<div id="newsList">

    กำลังโหลดข่าว...

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

loadNews();

    document
        .getElementById("backDashboard")
        .addEventListener("click", () => showDashboard(window.currentUser));

}

async function loadNews() {

    const newsList = document.getElementById("newsList");

    newsList.innerHTML = "";

    try {

        const q = query(
            collection(db, "news"),
            orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        if (snapshot.empty) {

    newsList.innerHTML = `
        <p style="text-align:center;color:#888;">
            ยังไม่มีข่าว
        </p>
    `;

    return;

}

snapshot.forEach(doc => {

    const news = doc.data();

    newsList.innerHTML += `

<a
    href="${news.pdfUrl}"
    target="_blank"
    class="menu-card news-item">

    <div class="menu-icon">

        <i class="bi bi-file-earmark-text-fill"></i>

    </div>

    <div class="menu-content">

        <div class="menu-title">

            ${news.title}

        </div>

        <div class="menu-desc">

            <i class="bi bi-calendar3"></i>

            ${news.date}

        </div>

    </div>

    <i class="bi bi-chevron-right menu-arrow"></i>

</a>

`;

});

    } catch (err) {

        console.error(err);

        newsList.innerHTML = `
            <p style="text-align:center;color:red;">
                โหลดข่าวไม่สำเร็จ
            </p>
        `;

    }

}