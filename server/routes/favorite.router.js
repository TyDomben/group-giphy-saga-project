const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const sqlText = `
  SELECT * FROM favorites ORDER BY "id" desc
  `;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  let newFavorite = req.body;
  const sqlText = `INSERT INTO "favorites" ( "title", "url", "category_id")
      VALUES ($1, $2, $3);`;
  const queryParams = [
    newFavorite.title,
    newFavorite.url,
    newFavorite.category_id,
  ];
  pool
    .query(sqlText, queryParams)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("ERROR in server POST route");
      console.log(error);
    });
});

// update a favorite's associated category
router.put("/:id", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete("/:id", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
