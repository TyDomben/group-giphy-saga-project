// Favorite View
// nav bar on top
// catergories in the nav bar
// cards
// on the cards the gif will render
// favorite tag under that

import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
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

  return (
    <div>
        {favoriteGifs.map((gif) => {
            return <img key={gif.id} src={gif.url} alt={gif.title} />
        })}
    </div>
  )
}

export default FavoriteView;
