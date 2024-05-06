import { Router } from 'express';

import { getUserProfile } from '../controller/users';

const router = Router();

router.get('/profile', getUserProfile);

export default router;
