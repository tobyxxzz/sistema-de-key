export default function handler(req, res) {
  const referer = req.headers.referer || "";

  if (!referer.startsWith("https://work.ink/2bAf/sistema-de-key")) {
    return res.status(403).json({ error: "Acesso bloqueado! Use o Work Ink." });
  }

  const keyDoDia = "KEY1234"; // aqui tu pode colocar a key do dia
  res.status(200).json({ key: keyDoDia });
}
