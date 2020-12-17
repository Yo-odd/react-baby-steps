import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Hear_joke() {
  const classes = useStyles();
  const [joke, setJoke] = useState("");

  useEffect(() => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        setJoke(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("error fetching joke: ", err));
  }, []);

  const fetchNewJoke = () => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        setJoke(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("error fetching joke: ", err));
  };

  return (
    <div className="Joke">
      <Box my={3}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              hear me out
            </Typography>
            <Typography variant="body2" component="p">
              {joke.joke}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box mt={3}>
        <Button variant="contained" color="secondary" onClick={fetchNewJoke}>
          here's another one
        </Button>
      </Box>
    </div>
  );
}

export default Hear_joke;
