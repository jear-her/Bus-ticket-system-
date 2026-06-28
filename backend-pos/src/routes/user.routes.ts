import { Router } from "express";
import { getUser } from "../controller/user.controller";


export const UserRouter = Router();


UserRouter.get("/", getUser);