import express from 'express';
// Set node config dir to src/config
process.env.NODE_CONFIG_DIR = process.cwd() + '/src/config';

import config from 'config';

import baseRoutes from './routes/index';
import appMiddleware from './middleware/index';

const app = express();
const port = config.get('PORT') ?? 3002;

appMiddleware(app);
app.use(baseRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
