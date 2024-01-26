// Favorite View
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

  const setCategories = () => {
    axios
      .put("/api/favorites/:id")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {favoriteGifs.map((gif) => {
        return (
          <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                UPDATE
              </InputLabel>
              <Select
                autoWidth
                label="category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem onChange={setCategories}>wild</MenuItem>
                <MenuItem onChange={setCategories}>uproarious</MenuItem>
                <MenuItem onChange={setCategories}>poignant</MenuItem>
                <MenuItem onChange={setCategories}>felicitous</MenuItem>
                <MenuItem onChange={setCategories}>whimsical</MenuItem>
              </Select>
            </FormControl>
            <img key={gif.id} src={gif.url} alt={gif.title} />
          </div>
        );
      })}
    </div>
  );
}

export default FavoriteView;
