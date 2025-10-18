import { Router } from "express";

import { getCategories } from './category.controller/getCategories.js';
import { addCategory } from './category.controller/addCategory.js';
import { updateCategory } from './category.controller/updateCategory.js';

const routers = Router();

routers.get("/", getCategories);
routers.post("/add", addCategory);
routers.put("/:id", updateCategory);

export default routers;