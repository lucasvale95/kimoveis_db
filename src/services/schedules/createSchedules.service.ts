import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { schedulesUsersProperties } from "../../entities/schedules.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createSchedulesService = async (
  { propertyId, date, hour }: IScheduleRequest,
  id: string
): Promise<schedulesUsersProperties> => {
  const userRepository = AppDataSource.getRepository(User);
  const schedulesRepository = AppDataSource.getRepository(
    schedulesUsersProperties
  );

  const propertyRepository = AppDataSource.getRepository(Properties);

  const filterSchedule = await schedulesRepository.findOne({
    where: {
      date: date,
      hour: hour,
    },
  });

  const property = await propertyRepository.findOneBy({
    id: propertyId,
  });

  if (!property) {
    throw new AppError("Property not exist", 404);
  }

  if (filterSchedule) {
    throw new AppError("Schedule new date", 400);
  }

  const day = new Date(date);

  const weekDay = day.getDay();

  if (weekDay === 6 || weekDay === 7) {
    throw new AppError("You cant schedule", 400);
  }

  if (hour > "18:00:00" || hour < "08:00:00") {
    throw new AppError("Hour incorrect", 400);
  }

  const user = await userRepository.findOneBy({
    id,
  });

  const schedule = schedulesRepository.create({
    property: property!,
    date,
    hour,
    user: user!,
  });

  await schedulesRepository.save(schedule);

  return schedule;
};

export default createSchedulesService;
