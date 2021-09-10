/* eslint-disable no-unused-vars */
import userRoutes from "./users.js";
import authRoutes from "./auth.js";
export default (app) => {
  app.get("/", (req, res, next) => {
    res.status(200).json({ message: "Default Index.js" });
  });
  app.use("/api/users", userRoutes);
  app.use("/api/auth", authRoutes);
};
