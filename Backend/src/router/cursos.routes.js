import Router from 'express-promise-router'
import {
  actualizarCurso,
  crearCurso,
  eliminarCurso,
  listarCurso,
  listarCursos
} from '../controllers/tareas.controller.js'
import { isAuth } from '../middlewares/auth.middleware.js'

const router = Router()

router.get('/tareas', isAuth, listarCursos)

router.get('/tareas/:id', isAuth, listarCurso)

router.post('/tareas', isAuth, crearCurso)

router.put('/tareas/:id', isAuth, actualizarCurso)

router.delete('/tareas/:id', isAuth, eliminarCurso)

export default router
