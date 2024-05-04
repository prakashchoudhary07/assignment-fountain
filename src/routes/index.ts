import { Request, Response, Router } from 'express';

import search from './search';

const router = Router();

router.use('/api/v1', search);

// Handel unknown routes
router.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

export default router;
