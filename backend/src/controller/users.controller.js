import User from "../model/User";
import jwt from "jsonwebtoken";

const MY_SECRET_KEY = process.env.SECRET_KEY;

export const createToken = async (req, res, next) => {
  try {
    const user = await User.find(req.body);
    if (user.length) {
      const token = jwt.sign(
        {
          id: user[0].id,
        },
        MY_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      res.status(201).json({ result: "ok", token });
    } else {
      res.status(400).json({ error: "invalid user" });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const user = await new User(req.body).save();

    res.status(201).json({ result: "ok", user: user });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

console.log("");
