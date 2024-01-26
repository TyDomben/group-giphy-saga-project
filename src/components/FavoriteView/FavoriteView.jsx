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
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
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
// delete favororite
  function deleteFavorite(gifId) {
    axios
      .delete(`/api/favorites/${gifId}`)
      .then((response) => {
        fetchFavorites();
      })
      .catch((error) => {
        console.log("Error in delete", error);
      });
  }

  const card = (
    <React.Fragment>
      <CardContent></CardContent>
      {/* display here */}
      <CardActions></CardActions>
    </React.Fragment>
  );

  return (
    <div>
      {favoriteGifs.map((gif) => (
        <div key={gif.id}>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
              {/* {card} */}
              {/* delete */}
              <img src={gif.url} alt={gif.title} />
              <button onClick={() => deleteFavorite(gif.id)}>
                Remove Favorite
              </button>
              <Stack direction="column" spacing={10}>
                {/* <Button onChange={() => setIsFavorited(true)} variant="outlined" onClick={handlePost}>FAVORITE</Button> */}
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id={`label-${gif.id}`}>
                    Choose Category
                  </InputLabel>
                  <Select
                    autoWidth
                    label="category"
                    value={""}
                    onChange={(event) =>
                      setCategories(gif.id, event.target.value)
                    }
                  >
                    <MenuItem value={1}>wild</MenuItem>
                    <MenuItem value={2}>uproarious</MenuItem>
                    <MenuItem value={3}>poignant</MenuItem>
                    <MenuItem value={4}>felicitous</MenuItem>
                    <MenuItem value={5}>whimsical</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Card>
          </Box>
        </div>
      ))}
    </div>
  );
}
export default FavoriteView;
