import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  // setup local state
  const [userInput, setUserInput] = useState("");

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
            alert("clicked");
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
