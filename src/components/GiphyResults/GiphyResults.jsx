import { useSelector } from "react-redux";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import GifCard from "../GifCard/GifCard";

const GiphyResults = () => {
  const results = useSelector((store) => store.input);

  const card = (
    <React.Fragment>
      <CardContent></CardContent>
      {/* display here */}
      <CardActions></CardActions>
    </React.Fragment>
  );

  if (results.data) {
    return (
      <>
        {/* <table>
                    <tbody>
                        {results.data.map((gif) => {
                            return <tr key={gif.id}><td>{gif.embed_url}</td></tr>
                        })}
                    </tbody>
                </table> */}

        <div>
          {results.data.map((gif) => {
            return (
            //   <>
            //     <Box sx={{ minWidth: 275 }}>
            //       <Card variant="outlined">
            //         {card}
            //         <Stack direction="row" spacing={2}>
            //           <Button variant="outlined">FAVORITE</Button>
            //         </Stack>
            //         <img
            //           key={gif.id}
            //           src={gif.images.original.webp}
            //           alt={gif.title}
            //         />
            //       </Card>
            //     </Box>
            //   </>
            <GifCard gif={gif} key={gif.id}/>
            );
          })}
        </div>
      </>
    );
  }
  return <p>Nothing to show here!</p>;
};

export default GiphyResults;

// gif on a card
// favorite underneath that
