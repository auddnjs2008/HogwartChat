import express from "express";
import logger from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Router/userRouter";
import socket from "socket.io";
import http from "http";
import cors from "cors";

dotenv.config();
const PORT = 4000;
const app = express();
const Http = http.createServer(app);
const io = socket(Http, { cors: { origin: "*" } });

app.use(cors());
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

Http.listen(PORT, () => console.log(`Server is runnging on ${PORT} port`));

///////////////////////////////

io.on("connection", (socket) => {
  socket.on("hello", (data) => console.log(data));
});
