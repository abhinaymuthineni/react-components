import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo";
import tick from "../../../assets/transactionTick.png";
import sold from "../../../assets/sold.png";
import { makeStyles } from "@material-ui/core";

const customStyles = makeStyles({
  typoColor: {
    color: "gray",
  },
});

interface TransactionProps {
  title: string;
  image: string;
}

const TransactionCard = ({ title, image }: TransactionProps) => {
  const classes = customStyles();
  const d = new Date();
  const p = title + " " + "BTC";
  const date = d.toLocaleString("en-us", { month: "long" }) + " " + d.getDate();
  return (
    <Grid role="TransactionCard">
      <Typo component="div" text={date} variant="body2" />
      <Grid sx={{ display: "flex" }}>
        <img src={tick} height="44px" width="44px" />
        <Grid sx={{ pl: 1, pr: 10 }}>
          <Typo component="div" text={p} variant="subtitle1" />
          <img src={image} width="57px" height="15px" />
        </Grid>

        {image === sold ? (
          <Grid>
            <Typo component="div" text="-0.0234510 BTC" variant="subtitle1" />
            <Typo
              component="div"
              text="-$34,000.00"
              variant="body2"
              className={classes.typoColor}
            />
          </Grid>
        ) : (
          <Grid>
            <Typo component="div" text="+0.0234510 BTC" variant="subtitle1" />
            <Typo
              component="div"
              text="+$34,000.00"
              variant="body2"
              className={classes.typoColor}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default TransactionCard;
