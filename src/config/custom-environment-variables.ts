module.exports = {
  PORT: 'PORT',
  spotify: {
    client_id: 'SPOTIFY_CLIENT_ID',
    client_secret: 'SPOTIFY_CLIENT_SECRET',
  },
  allowedOrigins: 'ALLOWED_ORIGINS',
  userAccessToken: {
    cookieName: 'USER_TOKEN_COOKIE_NAME',
    cookieDomain: 'USER_TOKEN_COOKIE_DOMAIN',
    ttl: {
      __name: 'USER_TOKEN_TTL',
      __format: 'number',
    },
    publicKey: 'PUBLIC_KEY',
    privateKey: 'PRIVATE_KEY',
  },
  googleOauth20: {
    clientId: 'GOOGLE_OAUTH20_CLIENT_ID',
    clientSecret: 'GOOGLE_OAUTH20_CLIENT_SECRET',
  },
  services: {
    api: {
      baseUrl: 'API_BASE_URL',
    },
    ui: {
      baseUrl: 'UI_BASE_URL',
    },
  },
};
