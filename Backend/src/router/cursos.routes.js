import Router from 'express-promise-router';
import {
  actualizarCurso,
  crearCurso,
  eliminarCurso,
  listarCurso,
  listarCursos
} from '../controller/cursos.controller.js';
import { isAuth } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/cursos', isAuth, listarCursos);

router.get('/cursos/:id', isAuth, listarCurso);

router.post('/cursos', isAuth, crearCurso);

router.put('/cursos/:id', isAuth, actualizarCurso);

router.delete('/cursos/:id', isAuth, eliminarCurso);

export default router;
