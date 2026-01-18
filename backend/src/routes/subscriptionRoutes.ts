import { Router } from "express";
const router = Router();

// Subscribes a new user to the database
// Default is_active and is_verified is off before verification

router.post("/subscriptions/add", (req, res) => {
    return res.status(400).json({ error: "stub" });
});

router.delete("/subscriptions/delete", (req, res) => {
    return res.status(400).json({ error: "stub" });
});

export default router;
