

const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios")
const router = express.Router();


router.get("/", (req, res) => {
  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${store.input}`
    )
    .then((response) => {
     
      res.send(response.data)
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  // res.send('Hello World'); // Replace this})
});
module.exports = router;
