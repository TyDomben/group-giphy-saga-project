const express = require("express");
const app = express();
const favoriteRouter = require("./routes/favorite.router");
const categoryRouter = require("./routes/category.router");
const gifRouter = require("./routes/gif.router");

const PORT = process.env.PORT || 5001;
require("dotenv").config();

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("build"));

/** ---------- EXPRESS ROUTES ---------- **/
app.use("/api/favorites", favoriteRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/gif", gifRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
