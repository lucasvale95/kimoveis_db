import { Router } from "express";
import {
  createCategoriesController,
  listCategoriesController,
  listPropertiesByCategoriesController,
} from "../controllers/categories.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  createCategoriesController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id/properties", listPropertiesByCategoriesController);

export default categoriesRoutes;
