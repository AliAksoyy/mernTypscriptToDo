import * as NotesController from "../controllers/notes";
import express from "express";

const router = express.Router();

router
  .route("/")
  .get(NotesController.getNotes)
  .post(NotesController.createNode);

export default router;
