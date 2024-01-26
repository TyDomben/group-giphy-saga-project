import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GiphyResults from "../GiphyResults/GiphyResults";

function App() {
  // setup local state
  const [userInput, setUserInput] = useState("");

  // input is a misnomer, actually the results from the GET to Giphy
  const input = useSelector((store) => store.input);

  // initializing dispatch - to communicate with store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_GIFS", payload: 'Welcome' })
  }, [])

  function onClick(event) {
    dispatch({ type: "FETCH_GIFS", payload: userInput });
    setUserInput("");
  }

  console.log(input.data)

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
        {/* {input.data.map((obj) => {
          return (
            <>
              <p>{obj.id}</p>
              <img src={`${obj.image.url}`}/>
            </>)
        })} */}
        <GiphyResults />
      </div>
    </div>
  );
}
export default App;
