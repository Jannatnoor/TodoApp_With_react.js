/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import {
  getAll,
  randomData,
  getById,
  postData,
  updateData,
  deleteData,
} from "./controller.js";

import express from "express";

const router = express.Router();

router.get("/list", getAll);
router.get("/random", randomData);
router.post("/list", postData);
router.get("/list/:id", getById);
router.put("/list/:id", updateData);
router.delete("/list/:id", deleteData);

export default router;
