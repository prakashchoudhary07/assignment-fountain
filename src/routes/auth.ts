import { Router } from 'express';
import passport from 'passport';
import { googleAuthCallback, logOut } from '../controller/auth';

const router = Router();

router.get(
  '/google/login',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

router.get('/google/callback', googleAuthCallback);

router.get('/logout', logOut);

export default router;
