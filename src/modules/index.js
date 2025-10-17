import { Router } from "express";

import auth from "../modules/auth/auth.routes.js";
import users from "../modules/users/users.routes.js";

const routes = Router();
routes.use("/auth", auth);
routes.use("/users", users);

export default routes;