module.exports = (req, res, next) => {
  // console.log("req user:", req.user);
  if (!req.user) return res.status(401).json("Unauthorized");
  next();
};
