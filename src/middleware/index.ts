import config from 'config';
import helmet from 'helmet';
import cors from 'cors';
import { Express } from 'express';

const allowedOrigins: string = config.get('allowedOrigins');

const middleware = (app: Express) => {
  app.use(helmet());
  app.use(
    cors({
      origin: allowedOrigins,
      optionsSuccessStatus: 200,
      credentials: true,
    })
  );
};

export default middleware;
