import dotenv from "dotenv";
dotenv.config()
import app from "./app.js";
import { connectDB } from "./db.js";

const PORT = 3001;

const main = async () => {
  await connectDB();
  app.listen(process.env.PORT || PORT, () => {
    console.log(`http://localhost:${process.env.PORT || PORT}`);
  });
}

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
