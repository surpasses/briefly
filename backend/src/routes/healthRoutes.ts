import { Router } from "express";
import pool from '../db/pool';

const router = Router();

// Checks backend is up and running
router.get("/health/backend", (_req, res) => {
  try {
    res.status(200).json({
      status: "ok",
    });
  } catch (err) {
    res.status(503).json({
      status: "degraded",
    });
  }
});


// Checks connection to db is valid
router.get("/health/db", async (_req, res) => {
  try {
    await pool.query("SELECT 1");

    res.status(200).json({
      status: "ok",
    });
  } catch (err) {
    res.status(503).json({
      status: "degraded",
    });
  }
});

export default router;
