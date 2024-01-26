// nav bar on top
// catergories in the nav bar
// cards
// on the cards the gif will render
// favorite tag under that
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useState, useEffect } from "react";
function FavoriteView() {
  const [favoriteGifs, setFavoriteGifs] = useState([]);
  const fetchFavorites = () => {
    axios
      .get("/api/favorites")
      .then((response) => {
        console.log(response.data);
        setFavoriteGifs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const setCategories = (gifId, newCategoryId) => {
    axios
      .put(`/api/favorites/${gifId}`, { category_id: newCategoryId })
      .then((response) => {
        console.log(response.data);
        fetchFavorites();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {favoriteGifs.map((gif) => (
        <div key={gif.id}>
          <img src={gif.url} alt={gif.title} />
          <label htmlFor="categories">Sort to Category:</label>
          <select name="categories" id="categories" onChange={(event) => setCategories(gif.id, event.target.value)}>
            <option value="">Choose an option</option>
            <option value={1}>Wild</option>
            <option value={2}>Uproarious</option>
            <option value={3}>Poignant</option>
            <option value={4}>Felicitous</option>
            <option value={5}>Whimsical</option>
          </select>
        </div>
      ))}
    </div>
  );
}
export default FavoriteView;