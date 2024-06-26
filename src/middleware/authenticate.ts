import config from 'config';
import { NextFunction, Request, Response } from 'express';
import * as authService from '../service/auth';
import UserDb from '../service/userDb';

const userDb = UserDb.getInstance();

const COOKIE_NAME: string = config.get('userAccessToken.cookieName');
interface CustomRequest extends Request {
  userId?: string;
}

const authenticate = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<any | Response> => {
  try {
    let token = req.cookies[COOKIE_NAME];
    const { userId } = authService.verifyAuthToken(token);
    const isUserIdValid = userDb.checkUser(userId);
    if (isUserIdValid) {
      req.userId = userId;
      return next();
    }
    throw new Error('Failed to verify the user');
  } catch (err: any) {
    console.error('Error in verifying user token', { error: err.stack });
    return res.status(401).json({ message: 'Unauthenticated User' });
  }
};

export default authenticate;
export type { CustomRequest };
