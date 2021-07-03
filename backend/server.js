import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { mongodbURI } from "../config/keys.js";
import userRouter from "./routers/userRouter.js";

const app = express();

dotenv.config();

app.use(express.json());

const db = mongodbURI;

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
