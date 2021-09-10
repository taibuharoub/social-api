/* eslint-disable no-unused-vars */
export default (app) => {
  app.get("/", (req, res, next) => {
    res.status(200).json({ message: "Default Index.js" });
  });
};
