export default async function handler(req, res) {

  const url = "https://webhook.site/a28cfef0-f55c-4192-b62f-e44a4b5439dd";

  await fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ 
      message: "Hi from Vercel",
      time: new Date().toISOString()
    })
  });

  res.status(200).json({ status: "Sent to webhook.site" });
}
//Hi i am Fine
