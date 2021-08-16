import express from "express";
import logger from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Router/userRouter";

dotenv.config();
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(logger("dev"));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to Mongo"))
  .catch((e) => console.log(e));

app.use("/api/user", userRouter); // 인증 관련

app.listen(PORT, () => console.log(`Server is runnging on ${PORT} port`));
