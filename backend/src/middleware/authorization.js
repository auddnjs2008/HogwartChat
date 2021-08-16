import jwt from "jsonwebtoken";
const MY_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  try {
    const clientToken = req.cookies.user;
    const decoded = jwt.verify(clientToken, MY_KEY);

    if (decoded) {
      res.locals.userId = decoded.id;
      next();
    } else {
      res.status(401).josn({ error: "unauthorized" });
    }
  } catch (e) {
    res.status(401).json({ error: "token expired" });
  }
};

export default verifyToken;
