import { Router } from "express";
import pool from "../db/pool";
import { getNewsId } from "../db/newsSources";

const router = Router();

// Adds a new user to the database
// Default is_active and is_verified is off before verification
router.post("/user/add", async (req, res) => {
  try {
    const { deliveryMethod, destination, selectedSource } = req.body

    // simple validation
    if (!deliveryMethod || !destination || !selectedSource) {
        return res.status(400).json({ status: "Missing required fields" })
    }

    // checks if user is already in the database
    const exists = await pool.query(
    `SELECT 1 FROM users WHERE destination = $1 LIMIT 1`,
    [destination]
    );

    if (exists.rowCount! > 0) {
        return res.status(409).json({ status: "User already subscribed"})
    }

    const sourceId = getNewsId(selectedSource);
    console.log(sourceId)

    await pool.query(
      `
      INSERT INTO users (
        channel,
        destination,
        is_active,
        is_verified,
        news_source_id
      )
      VALUES ($1, $2, true, false, $3)
      `,
      [deliveryMethod, destination, sourceId]
    )

    res.status(201).json({ status: "User created!" })
  } catch (err) {
    console.error(err)
    res.status(503).json({ status: "User unable to be created!" })
  }
})


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