import crypto from "crypto";

const SECRET = "ZENITHGOD"; // troca isso

export default function handler(req, res) {
  const time = Date.now();
  const payload = `${time}`;
  const sig = crypto
    .createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex")
    .slice(0, 8);

  const token = `${time}.${sig}`;

res.json({
  url: "/k/?token=ABC123"
});

