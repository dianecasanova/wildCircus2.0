const express = require("express");
const router = express.Router();
const db = require("./db");

// GET - Afficher les spectacles
router.get("/", (req, res) => {
  db.query("select * from spectacle", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

// POST - Ajouter un spectacle
router.post("/", (req, res) => {
  const { Titre, Type, Description, Image, Durée, Date, Ville } = req.body;
  db.query(
    "INSERT INTO spectacle (Titre, Type, Description, Image, Durée, Date, Ville) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [Titre, Type, Description, Image, Durée, Date, Ville],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error saving a movie");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

// DELETE - supprimer un spectacle
router.delete("/:id", (req, res) => {
  const idSpectacle = req.params.id;

  db.query(
    "DELETE FROM spectacle WHERE id = ?",
    [idSpectacle],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("😱 Error deleting an spectacle");
      } else {
        res.status(200).send("🎉 spectacle deleted!");
      }
    }
  );
});

module.exports = router;
