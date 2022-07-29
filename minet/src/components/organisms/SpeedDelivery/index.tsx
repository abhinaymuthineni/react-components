import { Grid, Button } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import delivery from "../../../assets/delivery.png";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

import { makeStyles } from "@material-ui/core";

const customStyles = makeStyles({
  hoverfun: {
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },

  paymentMethod: {
    width: "250px",
    height: "22px",
    color: "#343446",
  },

  currency: {
    width: "250px",
    height: "28px",
    color: "#343446",
  },

  totalBalance: {
    width: "251px",
    height: "28px",
    color: "#7D7D89",
  },

  speedButton: {
    width: "50px",
  },
});

const Delivery = () => {
  const classes = customStyles();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [flag, setFlag] = React.useState(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [display, setdisplay] = React.useState("none");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [speed, setSpeed] = React.useState("Instant: 2-5 minutes");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [fee, setFee] = React.useState("Transaction fees:0.001 BTC");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [flag1, setFlag1] = React.useState(0);

  const handleClick = () => {
    setFlag(!flag);
    setdisplay(flag ? "flex" : "none");
  };

  return (
    <Grid
      item
      container
      direction="row"
      sx={{
        height: "190px",
        width: "710px",
        border: "1px solid #E8E8F7",
        zIndex: "0",
      }}
      spacing={5}
      role="SpeedDelivery"
      className={classes.hoverfun}
    >
      <Grid item container sx={{ position: "relative" }}>
        <Typo
          variant="subtitle1"
          component="div"
          className={classes.paymentMethod}
          text="Select speed delivery"
          width="200px"
        />
      </Grid>

      <Grid
        item
        sx={{
          height: "90px",
          width: "95%",
          display: "flex",
          position: "relative",
        }}
      >
        <Grid
          sx={{
            height: "100%",
            width: "95%",
            display: "flex",
            border: "1px solid #E8E8F7",
            position: "absolute",
            top: 0,
            p: 3,
          }}
        >
          <Grid item sx={{ flexDirection: "flex-start" }}>
            <img src={delivery} alt="logo" width="25px" height="25px" />
          </Grid>

          <Grid item container>
            <Typo
              component="div"
              variant="subtitle1"
              className={classes.paymentMethod}
              text=""
              width="0px"
            />
          </Grid>

          <Grid item>
            <Grid item sm={1}>
              <Typo
                component="div"
                width="180px"
                text={speed}
                variant="subtitle1"
                className={classes.currency}
              />
            </Grid>

            <Grid item sm={1}>
              <Typo
                component="div"
                width="240px"
                text={fee}
                variant="subtitle1"
                className={classes.totalBalance}
              />
            </Grid>
          </Grid>

          <Grid item container>
            <Typo
              component="div"
              variant="subtitle1"
              className={classes.paymentMethod}
              text=""
              width="150px"
            />
          </Grid>

          <Grid item container>
            <Button className={classes.speedButton} onClick={handleClick}>
              {flag ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
            </Button>
          </Grid>
        </Grid>
        <span
          role="InstantButton"
          onClick={() => {
            setSpeed("Instant: 2-5 minutes");
            console.log("clicked");
            setFee("Transaction fees:0.001 BTC");
            setFlag1(0);
          }}
          style={{
            cursor: "pointer",
          }}
        >
          <Grid
            item
            sx={{
              height: "60%",
              width: "95%",
              display: { display },
              border: "1px solid #E8E8F7",
              backgroundColor: flag1 === 0 ? "ash" : "white",
              position: "absolute",
              top: "100%",
              p: 3,
            }}
            xs={12}
          >
            <Grid
              item
              xs={6}
              sx={{ display: { display }, alignItems: "center" }}
            >
              <Typo
                className={classes.currency}
                component="div"
                text="Instant: 2-5 minutes"
                variant="subtitle1"
              />
            </Grid>

            <Grid
              item
              xs={6}
              sx={{ display: { display }, alignItems: "center" }}
            >
              <Typo
                className={classes.totalBalance}
                component="div"
                text="Delivery fees : 0.001 BTC"
                variant="subtitle1"
              />
            </Grid>
          </Grid>
        </span>

        <span
          role="FasterButton"
          onClick={() => {
            setSpeed("Faster : 4 hours");
            setFee("Transaction fees:0.0001 BTC");
            setFlag1(1);
          }}
          style={{
            cursor: "pointer",
          }}
        >
          <Grid
            item
            sx={{
              height: "65%",
              width: "95%",
              display: { display },
              border: "1px solid #E8E8F7",
              position: "absolute",
              top: "160%",
              backgroundColor: flag1 === 1 ? "ash" : "white",
              p: 3,
            }}
            xs={12}
          >
            <Grid
              item
              xs={6}
              sx={{ display: { display }, alignItems: "center" }}
            >
              <Typo
                className={classes.currency}
                component="div"
                variant="subtitle1"
                text="Faster : 4 hours"
              />
            </Grid>

            <Grid
              item
              xs={6}
              sx={{ display: { display }, alignItems: "center" }}
            >
              <Typo
                className={classes.totalBalance}
                component="div"
                text="Delivery fees : 0.0001 BTC"
                variant="subtitle1"
              />
            </Grid>
          </Grid>
        </span>
        <span
          role="FastButton"
          onClick={() => {
            setSpeed("Fast : 120 hours");
            setFee("Transaction fees:0.00001 BTC");
            setFlag1(2);
          }}
          style={{
            cursor: "pointer",
          }}
        >
          <Grid
            item
            sx={{
              height: "65%",
              width: "95%",
              display: { display },
              border: "1px solid #E8E8F7",
              position: "absolute",
              backgroundColor: flag1 === 2 ? "ash" : "white",
              top: "224%",
              p: 3,
            }}
            xs={12}
          >
            <Grid
              item
              xs={6}
              sx={{ display: { display }, alignItems: "center" }}
            >
              <Typo
                className={classes.currency}
                variant="subtitle1"
                component="div"
                text="Fast : 120 hours"
              />
            </Grid>

            <Grid
              item
              xs={6}
              sx={{ display: { display }, alignItems: "center" }}
            >
              <Typo
                className={classes.totalBalance}
                component="div"
                text="Delivery fees : 0.00001 BTC"
                variant="body1"
              />
            </Grid>
          </Grid>
        </span>

        <span
          role="NoneButton"
          onClick={() => {
            setSpeed("None");
            setFee("None");
            setFlag1(3);
          }}
          style={{
            cursor: "pointer",
          }}
        >
          <Grid
            item
            sx={{
              height: "60%",
              width: "95%",
              display: { display },
              border: "1px solid #E8E8F7",
              position: "absolute",
              backgroundColor: flag1 === 3 ? "ash" : "white",
              top: "289%",
              p: 3,
            }}
            xs={12}
          >
            <Grid
              item
              xs={6}
              sx={{ display: { display }, alignItems: "center" }}
            >
              <Typo
                className={classes.currency}
                component="div"
                variant="subtitle1"
                text="None"
              />
            </Grid>
          </Grid>
        </span>
      </Grid>
    </Grid>
  );
};

export default Delivery;
