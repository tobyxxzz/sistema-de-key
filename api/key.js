import crypto from "crypto";

const SECRET = "ZENITHGOD";

export default function handler(req, res) {
  const { token } = req.query;
  if (!token || !token.includes(".")) {
    return res.json({ error: "inválido" });
  }

  const [timeStr, sig] = token.split(".");
  const time = Number(timeStr);

  if (!time) return res.json({ error: "inválido" });

  // valida assinatura
  const checkSig = crypto
    .createHmac("sha256", SECRET)
    .update(timeStr)
    .digest("hex")
    .slice(0, 8);

  if (sig !== checkSig) {
    return res.json({ error: "inválido" });
  }

  // expira em 24h
  if (Date.now() - time > 24 * 60 * 60 * 1000) {
    return res.json({ error: "expirado" });
  }

  const day = new Date().toISOString().slice(0, 10);
  const key = `ZENITH-${day}-${sig}`;

  res.json({ key });
}
