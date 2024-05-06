# fountain-assignment-backend

This is a nodejs, express app

## Getting Started

Install all packages by navigating to the project folder

(using the package manager of your choice npm, yarn, pnpm)

```bash
npm install
```

### Set the required environment variables

You can create a new file called `local.js` at `src/config` and copy the contents of `src/config/defaults.js` to it and add the API keys

Keys required

Spotify keys

- spotify client_id
- spotify client_secret

This doc can be referred https://developer.spotify.com/documentation/web-api/tutorials/getting-started

Google oauth2 keys

- google oauth2 client_id
- google oauth2 client_secret

This doc can be referred for further help: https://support.google.com/cloud/answer/6158849?hl=en, https://developers.google.com/identity/protocols/oauth2/web-server

Set thees env keys

```bash
export PORT=value
export SPOTIFY_CLIENT_ID=value
export SPOTIFY_CLIENT_SECRET=value
export ALLOWED_ORIGINS=value
export USER_TOKEN_COOKIE_NAME=value
export USER_TOKEN_COOKIE_DOMAIN=value
export USER_TOKEN_TTL=value
export GOOGLE_OAUTH20_CLIENT_ID=value
export GOOGLE_OAUTH20_CLIENT_SECRET=value
export API_BASE_URL=value
export UI_BASE_URL=value
```

To run the development server:

```bash
npm run dev

```

To run the production server:

- first build the app
  ```bash
  npm run build
  ```
- then start the app
  ```bash
  npm start
  ```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

#### App has API prefix of `/api/v1/*`, so please add the prefix before the accessing the routes

There are the routes

- `/auth/google/login` -> authenticate user
- `/auth/google/logout` -> logout the user
- `/auth/google/callback` -> callback url that is called after successful authenticating with google

Below are protected routes

- `/search` -> search spotify track, this accepts `q` as query string
- `/users/profile` -> get logged in users profile details
