import { Express } from 'express';
import config from 'config';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import '../provider/google';

const allowedOrigins: string = config.get('allowedOrigins');

const middleware = (app: Express) => {
  app.use(cookieParser());
  app.use(helmet());
  app.use(
    cors({
      origin: allowedOrigins,
      optionsSuccessStatus: 200,
      credentials: true,
    })
  );
  app.use(passport.initialize());
};

export default middleware;
