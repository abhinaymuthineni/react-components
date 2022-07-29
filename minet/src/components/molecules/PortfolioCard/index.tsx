import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo";
import { makeStyles } from "@material-ui/core";

interface CardProps {
  image: string;
  cryptoItem: string;
  group: string;
  price: string;
  profit?: string;
}

const customStyles = makeStyles({
  typoColor: {
    color: "gray",
  },

  Green: {
    color: "green",
  },

  Red: {
    color: "red",
  },

  hoverfun: {
    "&:hover": {
      boxShadow: "10px 10px 16px 10px rgba(0,0,0,0.2)",
    },
  },
});

const PortfolioCard = ({
  image,
  cryptoItem,
  group,
  price,
  profit,
}: CardProps) => {
  const classes = customStyles();

  return (
    <Grid
      sx={{ display: "flex", justifyContent: "space-between", width: "340px" }}
      className={classes.hoverfun}
      role="PortfolioCard"
    >
      <Grid sx={{ display: "flex" }}>
        <img src={image} alt="crypto" height="42px" width="42px" />
        <Grid sx={{ pl: 1 }}>
          <Typo component="div" text={cryptoItem} variant="subtitle1" />
          <Typo
            component="div"
            text={group}
            variant="caption"
            className={classes.typoColor}
          />
        </Grid>
      </Grid>

      <Grid>
        <Typo component="div" text={price} variant="subtitle1" />
        <Grid sx={{ display: "flex" }}>
          <Typo component="div" text="" variant="caption" width="40px" />
          {profit?.charAt(0) === "-" ? (
            <Typo
              component="div"
              text={profit}
              variant="caption"
              className={classes.Red}
            />
          ) : (
            <Typo
              component="div"
              text={profit}
              variant="caption"
              className={classes.Green}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PortfolioCard;
