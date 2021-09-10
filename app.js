import path from "path";
import express from "express";
import compression from "compression";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import configRoutes from "./routes/index.js";

const server = express();
const __dirname = path.resolve();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, "public")));
server.use(cors());
server.use(compression());
server.use(morgan("dev"));

configRoutes(server);

// eslint-disable-next-line no-unused-vars
server.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

export default server;
