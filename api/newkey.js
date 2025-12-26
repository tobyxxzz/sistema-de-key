export default function handler(req, res) {
  // Gera a key aleatória tipo: ZENITH-xxxxx
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomPart = "";
  for (let i = 0; i < 12; i++) {
    randomPart += chars[Math.floor(Math.random() * chars.length)];
  }
  const key = `ZENITH-${randomPart}`;

  // Retorna JSON
  res.status(200).json({ key });
}
