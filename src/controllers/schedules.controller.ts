import { Request, Response } from "express";
import { IScheduleRequest } from "../interfaces/schedules";
import createSchedulesService from "../services/schedules/createSchedules.service";
import listSchedulesService from "../services/schedules/listSchedule.service";

const createSchedulesController = async (req: Request, res: Response) => {
  const data: IScheduleRequest = req.body;
  const id = req.user.id;
  const createdSchedules = await createSchedulesService(data, id);

  return res.status(201).json({ message: createdSchedules });
};

const listSchedulesController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const listSchedules = await listSchedulesService(id);

  return res.status(200).json({ schedules: listSchedules });
};

export { createSchedulesController, listSchedulesController };
