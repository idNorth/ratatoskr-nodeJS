import { Router } from "express";

import auth from "../modules/auth/auth.routes.js";
import users from "../modules/users/users.routes.js";
import category from "../modules/category/category.routes.js";

const routes = Router();

routes.use("/auth", auth);
routes.use("/users", users);
routes.use("/category", category);

export default routes;