import Router from 'express-promise-router'
import {
  signin,
  signup,
  signout,
  profile
} from '../controllers/auth.controller.js'
import { isAuth } from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/signin', signin)

router.post('/signup', signup)

router.post('/signout', signout)

router.get('/profile', isAuth, profile)

export default router
