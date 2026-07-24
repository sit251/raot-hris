const fs = require("fs");

const file = "index.html";

let html = fs.readFileSync(file, "utf8");

const version = Date.now();

// เปลี่ยน ?v= ทุกตำแหน่ง
html = html.replace(/\?v=\d+/g, `?v=${version}`);

fs.writeFileSync(file, html);

console.log("✔ Version Updated :", version);