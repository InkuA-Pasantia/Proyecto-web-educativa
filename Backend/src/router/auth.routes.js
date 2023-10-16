import Router from 'express-promise-router';
import {
  signin,
  signup,
  signout,
  profile
} from '../controller/auth.controller.js';
import { isAuth } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/signin', signin);

router.post('/signup', isAuth, signup);

router.post('/signout', signout);

router.get('/profile', isAuth, profile);

export default router;
