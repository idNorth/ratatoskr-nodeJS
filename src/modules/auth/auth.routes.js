import { Router } from "express";

import { userSignIn } from '../users/users.controller/signIn.js';
import { userSignUp } from '../users/users.controller/signUp.js';

const routers = Router();

routers.post("/signIn", userSignIn);
routers.post("/signUp", userSignUp);

export default routers;