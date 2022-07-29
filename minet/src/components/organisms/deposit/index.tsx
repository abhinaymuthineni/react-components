import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import rupee from "../../../assets/rupee.png";
import ImageWithTypo from "../../molecules/ImageWithTypo/index";
import { makeStyles } from "@material-ui/core";

const customStyles = makeStyles({
  paymentMethod: {
    width: "250px",
    height: "22px",
    color: "#343446",
  },

  hoverfun: {
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
});

const Deposit = () => {
  const classes = customStyles();
  return (
    <Grid
      item
      container
      direction="row"
      sx={{
        height: "190px",
        width: "710px",
        border: "1px solid #E8E8F7",
      }}
      className={classes.hoverfun}
      spacing={5}
      role="deposit"
    >
      <Grid item container>
        <Typo
          variant="subtitle1"
          component="div"
          className={classes.paymentMethod}
          text="Deposit"
        />
      </Grid>

      <Grid
        item
        sx={{
          height: "90px",
          width: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        <ImageWithTypo image={rupee} value1="USD Cash coin" value2="Default" />
      </Grid>
    </Grid>
  );
};

export default Deposit;
