export default function handler(req, res) {
  res.status(200).json({
    message: "Vercel endpoint working!",
    time: new Date().toISOString()
  });
}
