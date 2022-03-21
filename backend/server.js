import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routers/userRouter.js";

const app = express();

dotenv.config();

app.use(express.json());

const db =
  "mongodb://mongo:27017/user-log-sys" ||
  process.env.mongodbURI ||
  "mongodb://127.0.0.1:27017/user-log-sys";

app.use("/api/users", userRouter);

mongoose
  .connect(db, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log("database error: " + err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("listening on " + port);
});
