export default function handler(req, res) {
  const { key } = req.query;

  if (!key || !key.startsWith("ZENITH-")) {
    return res.json({ ok: false });
  }

  // aqui tu valida se a key é a do dia, etc
  // se passou pelo Work.ink antes

  res.json({
    ok: true,
    script: "https://pastefy.app/QewZd3l4/raw"
  });
}
