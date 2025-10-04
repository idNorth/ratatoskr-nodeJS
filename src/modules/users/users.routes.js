import { Router } from "express";

import { getUser, userSignIn, userSignUp } from './users.controller.js';

const routers = Router();

routers.get("/", getUser);
routers.post("/signIn", userSignIn);
routers.post("/signUp", userSignUp);

export default routers;