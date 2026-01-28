import { Router } from "express";
import pool from "../db/pool";
const router = Router();

// Adds a new user to the database
// Default is_active and is_verified is off before verification
router.post("/user/add", (req, res) => {
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

// Removes a user from the database
router.delete("/user/delete", (req, res) => {
    return res.status(400).json({ error: "stub" });
});

// Turn on active status for user
router.put("/user/activate", (req, res) => {
    return res.status(400).json({ error: "stub" });
});

// Turn off active status for user
router.put("/user/deactivate", (req, res) => {
    return res.status(400).json({ error: "stub" });
});

// Turn on verification status
router.put("/user/verify", (req, res) => {
    return res.status(400).json({ error: "stub" });
});

// Turn off verification status
router.put("/user/refute", (req, res) => {
    return res.status(400).json({ error: "stub" });
});

export default router;