import { Router } from "express";

import { getUser, userCreate } from './users.controller.js';

const routers = Router();

routers.get("/", getUser);
routers.post("/create", userCreate);

export default routers;