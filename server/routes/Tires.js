import express from "express";
import { getTires, createTire } from "../controllers/tiresController.js";

const router = express.Router();

router.get('/', getTires);
router.get('/', createTire);

export default router;