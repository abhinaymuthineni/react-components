import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo";
import investment from "../../../assets/investment.png";
import { makeStyles } from "@material-ui/core";

interface InvestmentProps {
  title: string;
  image: string;
  price: string;
}

const customStyles = makeStyles({
  investment: {
    fontWeight: 500,
    fontSize: "10px",
    lineHeight: "16px",
    color: "#7D7D89",
  },

  price: {
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "34px",
    color: "#343446",
  },
});

const InvestmentCard = ({ title, image, price }: InvestmentProps) => {
  const classes = customStyles();
  return (
    <Grid sx={{ p: 2 }} role="InvestmentCard">
      <Grid item sx={{ display: "flex" }}>
        <Typo
          component="div"
          text={title}
          width="122px"
          className={classes.investment}
        />
        <img src={image} alt="investment" width="58px" height="24px" />
      </Grid>
      <Grid>
        <Typo
          component="div"
          text={price}
          width="122px"
          className={classes.price}
        />
      </Grid>
    </Grid>
  );
};

export default InvestmentCard;
