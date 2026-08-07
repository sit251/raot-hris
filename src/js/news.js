import { render } from "./script.js";
import { showDashboard } from "./dashboard.js";
import { db } from "../firebase/firebase-config.js";
import {
    collection,
    getDocs,
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

    document
        .getElementById("backDashboard")
        .addEventListener("click", () => showDashboard(window.currentUser));

    // ดึงข่าวจาก Firestore มาแสดง
    loadNews();

}

async function loadNews() {

    const newsListEl = document.getElementById("newsList");

    try {

        // "news" คือชื่อ collection ใน Firestore
        const newsRef = collection(db, "news");

        const snapshot = await getDocs(newsRef);

        if (snapshot.empty) {
            newsListEl.innerHTML = `<p style="text-align:center; color:#888;">ยังไม่มีข่าวประชาสัมพันธ์</p>`;
            return;
        }

        let html = "";

        snapshot.forEach((doc) => {

            const item = doc.data();

            const title = item.title || "ไม่มีหัวข้อ";
            const date = item.date || "";
            const pdfUrl = item.pdfUrl || "";

            html += `
                <div class="news-card" ${pdfUrl ? `onclick="window.open('${pdfUrl}', '_blank')"` : ""}>
                    <div class="news-card-icon">
                        <i class="bi bi-file-earmark-text-fill"></i>
                    </div>
                    <div class="news-card-body">
                        <div class="news-card-title">${title}</div>
                        ${date ? `
                            <div class="news-card-date">
                                <i class="bi bi-calendar-event"></i> ${date}
                            </div>
                        ` : ""}
                    </div>
                    ${pdfUrl ? `<i class="bi bi-chevron-right news-card-arrow"></i>` : ""}
                </div>
            `;

        });

        newsListEl.innerHTML = `
            <style>
                .news-card {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    background: #fff;
                    border-radius: 16px;
                    padding: 14px 16px;
                    margin-bottom: 14px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    cursor: pointer;
                    transition: transform 0.15s ease, box-shadow 0.15s ease;
                }
                .news-card:active {
                    transform: scale(0.98);
                }
                .news-card-icon {
                    flex-shrink: 0;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: #e6f4ea;
                    color: #006633;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.3rem;
                }
                .news-card-body {
                    flex: 1;
                    min-width: 0;
                }
                .news-card-title {
                    font-weight: 700;
                    color: #006633;
                    font-size: 1rem;
                    line-height: 1.4;
                }
                .news-card-date {
                    margin-top: 4px;
                    font-size: 0.85rem;
                    color: #666;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                .news-card-arrow {
                    flex-shrink: 0;
                    color: #999;
                    font-size: 1.1rem;
                }
            </style>
            ${html}
        `;

    } catch (error) {

        console.error("โหลดข่าวไม่สำเร็จ:", error);
        newsListEl.innerHTML = `<p style="text-align:center; color:red;">โหลดข่าวไม่สำเร็จ กรุณาลองใหม่ภายหลัง</p>`;

    }

}
