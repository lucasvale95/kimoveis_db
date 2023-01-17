import { Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories";
import createCategoriesService from "../services/categories/createCategories.service";
import listCategoriesService from "../services/categories/listCategories.service";
import listPropertiesByCategoriesService from "../services/categories/listPropertiesByCategories.service";

const createCategoriesController = async (req: Request, res: Response) => {
  const data: ICategoryRequest = req.body;
  const createCategory = await createCategoriesService(data);
  return res.status(201).json(createCategory);
};

const listCategoriesController = async (req: Request, res: Response) => {
  const listCategory = await listCategoriesService();
  return res.status(200).json(listCategory);
};

const listPropertiesByCategoriesController = async (
  req: Request,
  res: Response
) => {
  const id: string = req.params.id;
  const listCategory = await listPropertiesByCategoriesService(id);
  return res.status(200).json(listCategory);
};

export {
  createCategoriesController,
  listCategoriesController,
  listPropertiesByCategoriesController,
};
