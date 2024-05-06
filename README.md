# fountain-assignment-backend

This is a nodejs, express app

## Getting Started

Install all packages by navigating to the project folder

(using the package manager of your choice npm, yarn, pnpm)

```bash
npm install
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
