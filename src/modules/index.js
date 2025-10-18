import { Router } from "express";

import auth from "../modules/auth/auth.routes.js";
import users from "../modules/users/users.routes.js";
import categories from "./categories/category.routes.js";
import ingredients from "./ingredients/ingredient.routes.js";

const routes = Router();

routes.use("/auth", auth);
routes.use("/users", users);
routes.use("/categories", categories);
routes.use("/ingredients", ingredients);

export default routes;