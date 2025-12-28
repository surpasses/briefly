import { Router } from "express";
const router = Router();

// Subscribes a new user to the database
router.post("/subscriptions/add", (req, res) => {
    return res.status(400).json({ error: "stub" });
});


export default router;
