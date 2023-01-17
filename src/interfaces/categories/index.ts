import { Properties } from "../../entities/properties.entity";

export interface ICategoryRequest {
  name: string;
}

export interface ICategoryResponse extends ICategoryRequest {
  id: string;
}

export interface ICategoryByProperties {
  id: string;
  name: string;
  properties: Properties[];
}
