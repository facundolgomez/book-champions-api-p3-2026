import { Router } from "express";
import {
  createBook,
  updateBook,
  deleteBook,
  findBook,
  findBooks,
} from "../services/book.services.js";

const router = Router();

router.get("/books", findBooks);
router.get("/books/:id", findBook);
router.post("/books", createBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

export default router;
