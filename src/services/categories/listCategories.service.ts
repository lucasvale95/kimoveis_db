import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";

const listCategoriesService = async (): Promise<Categories[]> => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const categories = await categoriesRepository.find();

  return categories;
};

export default listCategoriesService;
