import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";
import { IPropertyRequest } from "../../interfaces/properties";
import { Addresses } from "../../entities/addresses.entity";

const createPropertyService = async ({
  value,
  size,
  address,
  categoryId,
}: IPropertyRequest): Promise<Properties> => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const categoriesRepository = AppDataSource.getRepository(Categories);
  const addressRepository = AppDataSource.getRepository(Addresses);

  const category = await categoriesRepository.findOneBy({
    id: categoryId,
  });

  if (!category) {
    throw new AppError("Category not exist", 404);
  }

  if (address.state.length > 2) {
    throw new AppError("State not exist", 400);
  }

  if (address.zipCode.length > 8) {
    throw new AppError("zipCode not exist", 400);
  }

  const findProperty = await addressRepository.findOne({
    where: {
      zipCode: address.zipCode,
    },
  });

  console.log(findProperty);

  if (findProperty) {
    throw new AppError("Property exists already", 400);
  }

  const addressSave = await addressRepository.save(address);

  const property = await propertiesRepository.save({
    value,
    size,
    address: addressSave,
    category,
  });

  return property;
};

export default createPropertyService;
