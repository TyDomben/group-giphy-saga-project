import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
  return (
    <div>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          onChange={(event) => {
            console.log(event.target.value);
          }}
          fullWidth
          label="fullWidth"
          id="fullWidth"
        />
      </Box>
      <Stack spacing={2} direction="row">
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
