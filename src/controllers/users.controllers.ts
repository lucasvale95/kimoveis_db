import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/users/createUser.service";
import listUsersService from "../services/users/listUser.service";
import updateUserService from "../services/users/updateUser.service";
import { instanceToPlain } from "class-transformer";
import deleteUserService from "../services/users/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const user: IUserRequest = req.body;
  const createdUser = await createUserService(user);
  return res.status(201).json(instanceToPlain(createdUser));
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.json(instanceToPlain(users));
};

const updateUserController = async (req: Request, res: Response) => {
  const { name, email, password }: IUserUpdate = req.body;
  const id: string = req.params.id;
  const loggedUser = req.user;
  const updatedUser = await updateUserService(
    name,
    email,
    password,
    id,
    loggedUser
  );

  return res.status(200).json(instanceToPlain(updatedUser));
};

const deleteUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const loggedUser = req.user;
  await deleteUserService(id, loggedUser);
  return res.status(204).send({ message: "Deleted with sucess" });
};

export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
};
