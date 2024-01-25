import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function App() {
  // setup local state
  const [userInput, setUserInput] = useState("");
  // bringing our store into the app to access
  const store = useSelector((store) => store.input);
  // initializing dispatch - to communicate with store
  const dispatch = useDispatch();

  function onClick(event) {
    axios
      .get("/api/gif")
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "SET_INPUT", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    setUserInput("");
  }

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
    </div>
  );
}
export default App;
