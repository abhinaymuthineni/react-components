import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import ImageWithTypo from "../../molecules/ImageWithTypo/index";
import explore from "../../../assets/explore.png";
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
const Balance = () => {
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
      role="Balance"
    >
      <Grid item container>
        <Typo
          variant="subtitle1"
          component="div"
          className={classes.paymentMethod}
          text="Total Balance"
        />
      </Grid>

      <Grid
        item
        alignItems="center"
        sx={{
          height: "80px",
          width: "95%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          left: "10px",
        }}
      >
        <ImageWithTypo
          image={explore}
          value1="Bitcoin"
          value2="0.0234510 BTC"
        />
      </Grid>
    </Grid>
  );
};

export default Balance;
