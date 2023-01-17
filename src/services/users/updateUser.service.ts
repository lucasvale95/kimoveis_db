import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";
import { IUser } from "../../interfaces/users";

const updateUserService = async (
  name: string | undefined,
  email: string | undefined,
  password: string | undefined,
  id: string,
  loggedUser: any
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError("Invalid email or password", 404);
  }

  if (loggedUser.isAdm === false && id !== loggedUser.id) {
    throw new AppError("You have not permission", 401);
  }

  await userRepository.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
  });

  const user = await userRepository.findOneBy({
    id,
  });

  return user!;
};

export default updateUserService;
