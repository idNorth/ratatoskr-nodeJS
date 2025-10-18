import { Router } from "express";

import { getCategories } from './category.controller/getCategories.js';
import { addCategories } from './category.controller/addCategories.js';
import { updateCategories } from './category.controller/updateCategories.js';

const routers = Router();

routers.get("/", getCategories);
routers.post("/add", addCategories);
routers.put("/:id", updateCategories);

export default routers;