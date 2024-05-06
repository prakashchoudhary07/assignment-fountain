import { Router } from 'express';
import { search } from '../controller/search';
import { validateSearchQueryParams } from '../middleware/searchValidate';
const router = Router();

router.get('/', validateSearchQueryParams, search);

export default router;
