import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import store from ".App/src/Redux/store.js"

function App() {
  // setup local state
  const [userInput, setUserInput] = useState("");

  const input = useSelector((store) => store.input);
  // initializing dispatch - to communicate with store

  const dispatch = useDispatch();
  let newGif = "";

  function onClick(event) {
    // newGif = input[0].data[0].url;
    dispatch({ type: "FETCH_GIFS", payload: userInput });
    setUserInput("");
  }

  // console.log(input[0].data[0].url)

  return (
    <div>
      <Box
        sx={{
          maxWidth: "100%",
        }}
      >
        <TextField
          value={userInput}
          onChange={(event) => {
            console.log(event.target.value);
            // setting the local state to what the user is inputting
            setUserInput(event.target.value);
          }}
          fullWidth
          label="fullWidth"
          id="fullWidth"
        />
      </Box>
      <p>
        {/* render the value of userInput */}
        {userInput}
      </p>
      <Stack spacing={2} direction="row">
        {/* button will reset the DOM and submit data */}
        <Button
          onClick={() => {
            onClick();
          }}
          variant="contained"
        >
          submit
        </Button>
      </Stack>
      <div>
        {/* map over an array of gifs */}
        {/* state is an array - input is an array - data is an array */}
        {newGif}
      </div>
    </div>
  );
}
export default App;
