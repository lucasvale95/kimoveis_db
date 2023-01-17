import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async (
  id: string,
  loggedUser: any
): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  if (loggedUser.isAdm === false && id !== loggedUser.id) {
    throw new AppError("You have not permission", 400);
  }

  if (loggedUser.isActive === false || findUser.isActive === false) {
    throw new AppError("You are not active", 400);
  }

  await userRepository.update(id, {
    isActive: false,
  });

  const user = await userRepository.findOneBy({
    id,
  });
};

export default deleteUserService;
