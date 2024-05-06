export default {
  PORT: 4000,
  spotify: {
    client_id: '',
    client_secret: '',
  },
  allowedOrigins: 'http://localhost:3000',
  userAccessToken: {
    cookieName: 'auth_fountain',
    cookieDomain: 'localhost',
    ttl: 60 * 60 * 24,
    publicKey: '',

    privateKey: '',
  },
  googleOauth20: {
    clientId: '',
    clientSecret: '',
  },
  services: {
    api: {
      baseUrl: 'http://localhost:3001',
    },
    ui: {
      baseUrl: 'http://localhost:3000',
    },
  },
};
