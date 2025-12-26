export default function handler(req, res) {
  const { token } = req.query;

  // token secreto (NUNCA divulga)
  const VALID_TOKEN = "TOKEN_DO_WORKINK_AQUI";

  if (token !== VALID_TOKEN) {
    res.status(403).json({ error: "Access denied" });
    return;
  }

  // gera key do dia automaticamente
  const now = new Date();
  const day = String(now.getUTCDate()).padStart(2, "0");
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  const year = now.getUTCFullYear();

  const keyDoDia = `ZENITH-${year}${month}${day}`;

  res.status(200).json({
    key: keyDoDia
  });
}
