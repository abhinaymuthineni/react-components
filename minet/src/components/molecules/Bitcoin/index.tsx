import React from "react";
import { Button, Grid } from "@mui/material";
import Typo from "../../atoms/Typo/index";
import tick from "../../../assets/tick.png";
import { makeStyles } from "@material-ui/core";
import axios from "axios";

interface CoinProps {
  id: number;
  image: string;
  title: string;
  price: string;
}

const customStyles = makeStyles({
  coinName: {
    width: "55px",
    height: "22px",
    lineHeight: "22px",
    color: "#4B4B60",
  },
});

const Bitcoin = ({ image, title, price, id }: CoinProps) => {
  const classes = customStyles();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [flag, setFlag] = React.useState(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [border, setBorder] = React.useState("2px solid #FFFFF");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tickval, setTickval] = React.useState("");

  const handleClick = () => {
    setFlag(!flag);
    setBorder(flag ? "2px solid #0052FF" : "2px solid #FFFFF");
    setTickval(flag ? tick : "");

    {
      flag
        ? axios
            .post("http://localhost:3000/selectedItems", {
              id: id,
              image: image,
              title: title,
              price: price,
            })
            .then((resp) => {
              console.log(resp.data);
            })
        : axios
            .delete(`http://localhost:3000/selectedItems/` + id)
            .then((resp) => {
              console.log(resp.data);
            });
    }
  };
  return (
    <Button
      onClick={handleClick}
      sx={{ textTransform: "none", border: { border } }}
      role="cryptoCard"
    >
      <Grid
        container
        alignItems="center"
        direction="column"
        sx={{ position: "relative" }}
      >
        <Grid sx={{ position: "absolute", right: "1%", top: "1%" }}>
          <img src={tickval} alt="" />
        </Grid>

        <Grid item>
          <img src={image} alt="explore" width="56px" height="56px" />
        </Grid>
        <Grid item>
          <Typo
            variant="body1"
            text={title}
            component="div"
            className={classes.coinName}
          />
        </Grid>
        <Grid item>
          <Typo
            variant="body1"
            text={price}
            component="div"
            className={classes.coinName}
            width="120px"
          />
        </Grid>
      </Grid>
    </Button>
  );
};

export default Bitcoin;
