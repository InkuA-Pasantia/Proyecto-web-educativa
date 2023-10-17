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

router.get('/cursos', listarCursos);

router.get('/cursos/:id', isAuth, listarCurso);

router.post('/cursos', crearCurso);

router.put('/cursos/:id', actualizarCurso);

router.delete('/cursos/:id', isAuth, eliminarCurso);

export default router;
