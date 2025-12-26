export default function handler(req, res) {
  console.log("Referer recebido:", req.headers.referer);
  const referer = req.headers.referer || "";

  if (!referer.startsWith("https://work.ink/2bAf/sistema-de-key")) {
    return res.status(403).json({ error: "Access Denied" });
  }

  const keyDoDia = "KEY1234"; 
  res.status(200).json({ key: keyDoDia });
}
