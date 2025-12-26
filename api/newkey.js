import { writeFileSync, readFileSync, existsSync } from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "dailyKey.json");

  let keyData = { key: "", date: "" };
  
  if (existsSync(filePath)) {
    keyData = JSON.parse(readFileSync(filePath, "utf8"));
  }

  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  if (keyData.date !== today) {
    // gera nova key
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let randomPart = "";
    for (let i = 0; i < 12; i++) {
      randomPart += chars[Math.floor(Math.random() * chars.length)];
    }
    keyData.key = `ZENITH-${randomPart}`;
    keyData.date = today;

    writeFileSync(filePath, JSON.stringify(keyData));
  }

  res.status(200).json({ key: keyData.key });
}
