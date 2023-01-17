import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";
import { ICategoryByProperties } from "../../interfaces/categories";

const listPropertiesByCategoriesService = async (
  id: string
): Promise<ICategoryByProperties> => {
  const categoriesRepository = AppDataSource.getRepository(Categories);
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const properties = await propertiesRepository.find({
    where: {
      categoryId: id,
    },
    relations: {
      category: true,
    },
  });

  const category = await categoriesRepository.findOneBy({
    id,
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }
  console.log(category);
  // {
  //   id: x,
  //   name: x,
  //   properties: {
  //     x
  //   }
  // }

  const { name } = category;

  return { ...category, properties };
};

export default listPropertiesByCategoriesService;
