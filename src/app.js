import cors from "cors";
import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import routes from "./modules/index.js";

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

app.use("/api", routes);   
app.use(errorMiddleware);  

export default app;
