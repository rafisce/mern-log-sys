import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "something_secret",
    {
      expiresIn: "30d",
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.body.headers.authorization;

  console.log("sssss");
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(
      token,
      process.env.JWT_SECRET || "something_secret",
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: "אסימון לא חוקי" });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  }
};
