import { Router } from "express";
const router = Router();

// Checks backend is up and running
router.get("/health", (_req, res) => res.json({ ok: true }));

export default router;
