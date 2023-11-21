import Router from "express-promise-router";
import {
  signin,
  signup,
  signout,
  profile,
  guardar_datos,
} from "../controller/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/signin", signin);

router.post("/signup", signup);

router.post("/signout", signout);

router.get("/profile", isAuth, profile);

router.post("/guardar-datos", guardar_datos);

export default router;
