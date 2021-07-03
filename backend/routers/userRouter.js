import express from "express";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { generateToken, isAuth } from "../utils.js";

const userRouter = express.Router();

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const newUser = await new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    newUser
      .save()
      .then(
        res.send({
          message: "new user created",
          name: newUser.name,
          email: newUser.email,
        })
      )
      .catch((err) =>
        res.status(401).send({
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        })
      );
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return;
    }

    res.status(401).send({ message: "שגיאה" });
  })
);

userRouter.get(
  "/check",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    res.send("authorized");
  })
);

export default userRouter;
