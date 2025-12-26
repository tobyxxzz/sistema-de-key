export default function handler(req, res) {
  const token = Math.random().toString(36).slice(2, 10)

  res.setHeader("Cache-Control", "no-store")
  res.writeHead(302, {
    Location: `/k/?token=${token}`
  })
  res.end()
}
