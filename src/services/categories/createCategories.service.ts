import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/appError";
import {
  ICategoryRequest,
  ICategoryResponse,
} from "../../interfaces/categories";

const createCategoriesService = async ({
  name,
}: ICategoryRequest): Promise<ICategoryResponse> => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const findCategory = await categoriesRepository.findOneBy({ name });

  if (findCategory) {
    throw new AppError("Category exists already", 400);
  }

  const category = categoriesRepository.create({
    name,
  });

  await categoriesRepository.save(category);

  return category;
};

export default createCategoriesService;
