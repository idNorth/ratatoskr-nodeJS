import { Router } from "express";

import { getIngredients } from './ingredient.controller/getIngredients.js';
import { addIngredient } from './ingredient.controller/addIngredient.js';
import { updateIngredient } from './ingredient.controller/updateIngredient.js';

const routers = Router();

routers.get("/", getIngredients);
routers.post("/add", addIngredient);
routers.put("/:id", updateIngredient);

export default routers;