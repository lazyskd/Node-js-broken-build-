# Simple Feature Toggle

A minimal Node.js web server that demonstrates feature toggling based on a config file.

## How It Works

- The app checks if `config.js` exists
- If it exists and `featureEnabled: true`, the feature is shown
- If you delete `config.js` or set `featureEnabled: false`, the feature is hidden

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open `http://localhost:3000` in your browser

## Files

- `app.js` - Main application (reads config.js to determine if feature is enabled)
- `config.js` - Configuration file (delete this to disable the feature)
- `package.json` - Dependencies

## How to Toggle the Feature

**To disable the feature:**
- Delete `config.js`, OR
- Change `featureEnabled` to `false` in config.js

**To enable the feature:**
- Make sure `config.js` exists with `featureEnabled: true`

