import { Router } from "express";
import {
  createPropertyController,
  listPropertyController,
} from "../controllers/properties.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const propertiesRoutes = Router();

propertiesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  createPropertyController
);
propertiesRoutes.get("", listPropertyController);

export default propertiesRoutes;
