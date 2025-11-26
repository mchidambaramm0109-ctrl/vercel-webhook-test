// pages/api/webhook.js

export default async function handler(req, res) {
  console.log('🔔 Webhook triggered!');
  console.log('Method:', req.method);
  console.log('Body:', req.body);
  
  // Send notification to webhook.site (your test URL)
  const webhookUrl = 'https://webhook.site/a28cfef0-f55c-4192-b62f-e44a4b5439dd';
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Hello from Vercel!',
        timestamp: new Date().toISOString(),
        event: 'test',
        data: req.body
      })
    });
    
    console.log('✅ Sent to webhook.site');
    res.status(200).json({ success: true, message: 'Webhook sent!' });
    
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
