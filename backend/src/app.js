/* eslint-disable linebreak-style */
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import Todo from "./Database/model.js";
import notFound from "./middlewares/notfound.js";
import errorHandler from "./middlewares/errorHandler.js";
import api from "./api/route.js";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.get("/api/v1", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

app.get("/api", async (req, res) => {
  try {
    let todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error(error);
  }
});

const url =
  "mongodb+srv://todoApp:todo1234@cluster0.qbgko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url).then(() => {
  console.log("Database Connected");
});

app.use("/api/v1/task", api);

app.use(notFound);
app.use(errorHandler);

export default app;
