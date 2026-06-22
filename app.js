// Main application file
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Check if config.js exists
function isFeatureEnabled() {
  try {
    const config = require('./config');
    return config.featureEnabled === true;
  } catch (err) {
    return false;
  }
}

// Home route
app.get('/', (req, res) => {
  const featureEnabled = isFeatureEnabled();
  
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Simple node App</title>
      <style>
        body { font-family: Arial; background: #f0f0f0; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; }
        h1 { color: #333; }
        .feature { padding: 20px; margin: 20px 0; border-radius: 5px; }
        .enabled { background: #d4edda; border: 1px solid #28a745; color: #155724; }
        .disabled { background: #f8d7da; border: 1px solid #f5c6cb; color: #721c24; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Feature Toggle Demo</h1>
        
        ${featureEnabled ? `
          <div class="feature enabled">
            <h2>✅ Feature is ENABLED</h2>
            <p>This feature is active because config.js exists with <code>featureEnabled: true</code></p>
            <p><strong>To disable:</strong> Delete config.js or set featureEnabled to false</p>
          </div>
        ` : `
          <div class="feature disabled">
            <h2>❌ Feature is DISABLED</h2>
            <p>The config.js file does not exist or feature is disabled.</p>
            <p><strong>To enable:</strong> Make sure config.js exists with <code>featureEnabled: true</code></p>
          </div>
        `}
      </div>
    </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`\nServer running on http://localhost:${PORT}`);
  console.log(`Feature status: ${isFeatureEnabled() ? '✅ ENABLED' : '❌ DISABLED'}\n`);
});
