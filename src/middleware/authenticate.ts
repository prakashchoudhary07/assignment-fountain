import config from 'config';
import { NextFunction, Request, Response } from 'express';
import * as authService from '../service/auth';

const COOKIE_NAME: string = config.get('userAccessToken.cookieName');
console.log({ COOKIE_NAME });

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any | Response> => {
  try {
    let token = req.cookies[COOKIE_NAME];
    authService.verifyAuthToken(token);
    return next();
  } catch (err: any) {
    console.error('Error in verifying user token', { error: err.stack });
    return res.status(401).json({ message: 'Unauthenticated User' });
  }
};

export default authenticate;
