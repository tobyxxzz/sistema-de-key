export default function handler(req, res) {
  const referer = req.headers.referer || "";

  // Só libera se vier da página do Work Ink
  if (!referer.startsWith("https://work.ink/2bAf/sistema-de-key")) {
    return res.status(403).json({ error: "Acesso bloqueado! Use o Work Ink." });
  }

  // Aqui vai a key do dia
  const keyDoDia = "KEY" + new Date().toISOString().slice(0,10).replace(/-/g,"");
  res.status(200).json({ key: keyDoDia });
}
