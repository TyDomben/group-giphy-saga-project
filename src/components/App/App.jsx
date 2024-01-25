import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";

function App() {
  // setup local state
  const [userInput, setUserInput] = useState("");
  // bringing our store into the app to access
  const store = useSelector((store) => store.input);
  // initializing dispatch - to communicate with store
  const dispatch = useDispatch();

  function onClick(event) {
    dispatch({ type: "SET_INPUT", payload: userInput });
  }

  return (
    <div>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          sx={{
            margin: "100px",
          }}
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
      <Stack
        sx={{
          marginLeft: "100px",
        }}
        spacing={2}
        direction="row"
      >
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
