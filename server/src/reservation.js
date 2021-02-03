const express = require("express");
const router = express.Router();
const db = require("./db");

// Réserver un spectacle
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("select * from reservation");
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

module.exports = router;
