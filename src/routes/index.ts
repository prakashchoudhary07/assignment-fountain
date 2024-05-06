import { Request, Response, Router } from 'express';

import search from './search';
import auth from './auth';
import users from './users';
import authenticate from '../middleware/authenticate';

const router = Router();

const PREFIX = '/api/v1';

router.use(PREFIX + '/auth', auth);
router.use(PREFIX + '/users', authenticate, users);
router.use(PREFIX + '/search', authenticate, search);

// Handel unknown routes
router.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

export default router;
