import { Router } from "express";
const router = Router();


// adds as a specific news subscription to a user
router.post("/subscriptions/add", (req, res) => {
    return res.status(400).json({ error: "stub" });
});

// adds as a specific news subscription to a user
router.delete("/subscriptions/delete", (req, res) => {
    return res.status(400).json({ error: "stub" });
});

export default router;
