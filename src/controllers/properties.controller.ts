import { Request, Response } from "express";
import { IPropertyRequest } from "../interfaces/properties";
import createPropertyService from "../services/properties/createProperty.service";
import listPropertyService from "../services/properties/listProperty.service";

const createPropertyController = async (req: Request, res: Response) => {
  const data: IPropertyRequest = req.body;
  const createdProperty = await createPropertyService(data);

  return res.status(201).json(createdProperty);
};

const listPropertyController = async (req: Request, res: Response) => {
  const listProperty = await listPropertyService();

  return res.status(200).json(listProperty);
};

export { createPropertyController, listPropertyController };
