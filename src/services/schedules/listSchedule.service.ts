import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { schedulesUsersProperties } from "../../entities/schedules.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const listSchedulesService = async (
  id: string
): Promise<schedulesUsersProperties[]> => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const schedulesRepository = AppDataSource.getRepository(
    schedulesUsersProperties
  );
  const userRepository = AppDataSource.getRepository(User);

  const property = await propertiesRepository.findOneBy({
    id,
  });

  if (!property) {
    throw new AppError("Property not exist", 404);
  }

  const schedulesPropety = await schedulesRepository.find({
    where: {
      property: {
        id: id,
      },
    },
    relations: {
      property: true,
      user: true,
    },
  });

  return schedulesPropety;
};

export default listSchedulesService;
