import { Router } from "express";

import users from "../modules/users/users.routes.js";

const routes = Router();
routes.use("/users", users);

export default routes;