import * as NotesController from "../controllers/notes";
import express from "express";

const router = express.Router();

router.route("/").get(NotesController.getNotes);

export default router;
