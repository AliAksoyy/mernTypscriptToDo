import * as NotesController from "../controllers/notes";
import express from "express";

const router = express.Router();

router
  .route("/")
  .get(NotesController.getNotes)
  .post(NotesController.createNode);

router
  .route("/:noteId")
  .get(NotesController.getNote)
  .patch(NotesController.updateNote)
  .delete(NotesController.deleteNote);
export default router;
