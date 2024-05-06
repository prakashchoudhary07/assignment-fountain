import passport, { use } from 'passport';
import config from 'config';

import { NextFunction, Request, Response } from 'express';
import * as authService from '../service/auth';

const TTL: number = Number(config.get('userAccessToken.ttl'));

/**
 *
 * Sets cookies for
 * @param res {Object}
 * @param user {Users}
 */
const setCookies = (res: Response, user: any): void => {
  const COOKIE_OPTIONS: any = {
    domain: config.get('userAccessToken.cookieDomain'),
    expires: new Date(Date.now() + TTL * 1000),
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  };

  const token = authService.generateAuthToken({ userId: user.sub }); // id

  res.cookie(config.get('userAccessToken.cookieName'), token, COOKIE_OPTIONS);
};

/**
 * Fetches the user info from Google and authenticates User
 *
 * @param req {Object} - Express request object
 * @param res {Object} - Express response object
 * @param next {Function} - Express middleware function
 */
const googleAuthCallback = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let redirectURL = new URL(config.get('services.ui.baseUrl'));

  try {
    return passport.authenticate(
      'google',
      {},
      async (err: any, _: any, user: any) => {
        if (err) {
          console.error(err);
          return res
            .status(401)
            .json({ message: 'User cannot be authenticated' });
        }

        const data = await authService.loginOrSignupWithGoogle(user._json);

        // respond with a cookie
        setCookies(res, data);

        return res.redirect(redirectURL.href);
      }
    )(req, res, next);
  } catch (err: any) {
    console.error(err);
  }
};

// Logs out the user from the device
const logOut = (_req: Request, res: Response): Response => {
  const cookieName: string = config.get('userAccessToken.cookieName');

  res.clearCookie(cookieName, {
    domain: config.get('userAccessToken.cookieDomain'),
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  });

  return res.status(200).json({ message: 'SignOut successful' });
};

export { googleAuthCallback, logOut };
