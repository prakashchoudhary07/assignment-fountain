import express from 'express';
import baseRoutes from './routes/index';

const app = express();
const port = process.env.PORT ?? 3001;

app.use(baseRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
