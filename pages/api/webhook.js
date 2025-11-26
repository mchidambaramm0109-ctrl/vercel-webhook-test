export default async function handler(req, res) {
  console.log('🔔 Deployment webhook received!');
  console.log('Event:', req.body);

  // Your webhook.site URL for testing (replace later with Cliq webhook)
  const webhookUrl = 'https://webhook.site/YOUR-UNIQUE-ID';

  try {
    const deploymentData = {
      event: 'Vercel Deployment',
      message: '🚀 New deployment detected!',
      timestamp: new Date().toISOString(),
      details: req.body
    };

    // Send to webhook.site (test) or Cliq (production)
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(deploymentData)
    });

    console.log('✅ Notification sent');
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('❌ Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
