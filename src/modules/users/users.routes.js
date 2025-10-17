import { Router } from "express";

import { getUser } from './users.controller/getUsers.js';

const routers = Router();

routers.get("/", getUser);

export default routers;