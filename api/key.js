// api/key.js
export default function handler(req, res) {
  const referer = req.headers.referer || "";

  // só libera se veio do Work Ink
  if (!referer.startsWith("https://work.ink/")) {
    return res.status(403).json({ error: "Access Denied" });
  }

  // key do dia (pode trocar todo dia ou gerar dinamicamente)
  const keyDoDia = "KEY1234"; 

  res.status(200).json({ key: keyDoDia });
}
