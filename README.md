# Simple Feature Toggle

A minimal Node.js web server that demonstrates feature toggling using a configuration file.

## Project Overview

This project includes:
- `app.js`: Main Express server and feature toggle logic
- `config.js`: Optional configuration file that controls whether the feature is enabled
- `package.json`: Dependency and script metadata
- `Dockerfile`: Container instructions for building the app image
- `README.md`: Project documentation

The app starts an Express server on port `3000`. It checks for `config.js` and only displays the feature when `featureEnabled` is set to `true`.

## Requirements

- Node.js 22+ (local development)
- npm
- Docker (optional, for container builds)

## Install and Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open the app in your browser:
   ```text
   http://localhost:3000
   ```

## Docker Usage

Build the Docker image:
```bash
docker build -t node-feature-toggle .
```

Run the container:
```bash
docker run -p 3000:3000 node-feature-toggle
```

Open the app:
```text
http://localhost:3000
```

## Feature Toggle Behavior

The server determines whether the feature is enabled by loading `config.js`.

- If `config.js` exists and contains `featureEnabled: true`, the feature is shown.
- If `config.js` is missing or `featureEnabled` is `false`, the feature is hidden.

### Enable the feature

Ensure `config.js` exists and contains:
```js
module.exports = {
  featureEnabled: true,
};
```

### Disable the feature

Either:
- Delete `config.js`, or
- Set `featureEnabled` to `false`:
```js
module.exports = {
  featureEnabled: false,
};
```

## Project Files

- `app.js`: Express server and feature toggle logic
- `config.js`: Optional config file for enabling/disabling the feature
- `package.json`: Project dependencies and scripts
- `Dockerfile`: Container build configuration
- `README.md`: Project documentation

## Notes

- The app listens on port `3000`.
- The Docker image uses `node:22-alpine` and runs `node app.js`.
- `config.js` is optional; absence defaults the feature to disabled.

