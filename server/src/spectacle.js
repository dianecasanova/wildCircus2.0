const express = require("express");
const router = express.Router();
const db = require("./db");

// Afficher les spectacles
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("select * from spectacle");
    res.status(200).json([]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

module.exports = router;
