import { Router } from 'express';
import { search } from '../controller/search';
const router = Router();

router.get('/search', search);

export default router;
