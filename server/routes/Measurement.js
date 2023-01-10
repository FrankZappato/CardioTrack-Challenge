import express from "express";
import { getMeasurement, createMeasurement } from "../controllers/measurementController";

const router = express.Router();

router.get('/', getMeasurement);
router.get('/', createMeasurement);

export default router;