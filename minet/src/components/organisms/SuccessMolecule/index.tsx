import React from "react";
import { Grid, Typography } from "@mui/material";
import tick from "../../../assets/tick.png";
import ellipse from "../../../assets/ellipse.png";
import Buttons from "../../atoms/Buttons/Buttons";

interface Props {
  text: string;
  button1: string;
  button2: string;
}

const SuccessComponent = ({ text, button1, button2 }: Props) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
      role="Success"
    >
      <Grid
        item
        sx={{
          background: `url(${ellipse})`,
          backgroundSize: "64px 64px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src={tick} alt="logo" width="21px" height="15px" />
      </Grid>

      <Grid item sx={{ width: "288px", height: "54px" }}>
        <Typography
          variant="h4"
          sx={{
            color: "#343446",
            fontWeight: 500,
            fontSize: "40px",
          }}
        >
          0.0234510 BTC
        </Typography>
      </Grid>

      <Grid item sx={{ width: "280px", height: "44px" }}>
        <Typography
          variant="body2"
          sx={{
            color: "#343446",
            fontWeight: 400,
            fontSize: "16px",
          }}
        >
          {text}
        </Typography>
      </Grid>

      <Grid>
        <Typography sx={{ height: "60px" }}></Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <Buttons
              variant="outlined"
              sx={{ width: "150px", height: "45px" }}
              children={button1}
            />
          </Grid>
          <Grid item>
            <Buttons
              variant="contained"
              sx={{ width: "180px", height: "45px" }}
              children={button2}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SuccessComponent;
