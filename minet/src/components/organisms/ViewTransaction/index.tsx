import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import payment from "../../../assets/payment.png";
import delivery from "../../../assets/delivery.png";
import deposit from "../../../assets/deposit.png";
import rupee from "../../../assets/rupee.png";
import payingThough from "../../../assets/payingThrough.png";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import {
  GetSelectedItems,
  PostPurchasedItems,
  PostSoldItems,
  DeleteSelectedItems,
} from "../../../service/index";

const customStyles = makeStyles({
  transaction: {
    width: "101px",
    height: "16px",
    color: "#7D7D89",
  },

  hoverfun: {
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },

  price: {
    width: "171px",
    height: "34px",
    color: "#343446",
  },

  paymentMethoddiv: {
    color: "#7D7D89",
  },

  visaCredit: {
    color: "#343446",
  },
});

interface GridProps {
  transaction: string;
  label11: string;
  label12: string;
  label21: string;
  label22: string;
  label31: string;
  label32: string;
  button: string;
}

const Transaction = ({
  transaction,
  label11,
  label12,
  label21,
  label22,
  label31,
  label32,
  button,
}: GridProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const classes = customStyles();

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      border="1px solid #E8E8F7"
      className={classes.hoverfun}
      sx={{ width: "527px", height: "646px" }}
      role="Transaction"
    >
      <Grid item sx={{ pt: 2 }}>
        <Typo
          variant="body1"
          component="div"
          text={transaction}
          className={classes.transaction}
          width="125px"
        />
      </Grid>
      <Grid item>
        <Typo
          variant="heading"
          component="div"
          text="0.0234510 BTC"
          className={classes.price}
        />
      </Grid>
      <Grid item>
        <Typo
          variant="body1"
          component="div"
          text="1BTC = $3,406,069.54"
          className={classes.transaction}
          width="150px"
        />
      </Grid>
      <Grid
        sx={{
          width: "523px",
          pt: 2,
          position: "absolute",
          left: "0%",
          top: "12%",
        }}
      >
        <Divider textAlign="left"></Divider>
      </Grid>

      <Grid item container direction="column">
        <Grid item alignItems="center">
          <Grid alignItems="center" sx={{ display: "flex" }}>
            <Grid item sx={{ p: 4 }}>
              {transaction === "You are buying" ? (
                <img src={payment} alt="payment" />
              ) : (
                <img src={payingThough} alt="paying  through" />
              )}
            </Grid>
            <Grid>
              <Grid>
                <Typo
                  variant="caption"
                  component="div"
                  text={label11}
                  width="114px"
                  className={classes.paymentMethoddiv}
                />
              </Grid>
              <Grid>
                <Typo
                  variant="subtitle5"
                  component="div"
                  text={label12}
                  width="164px"
                  className={classes.visaCredit}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            alignItems="center"
            sx={{
              border: "1px dashed #B4B4CF",
              position: "absolute",
              left: "8%",
              width: "0px",
              height: "54px",
              top: "22%",
            }}
          ></Grid>
          <Grid alignItems="center" sx={{ display: "flex" }}>
            <Grid item sx={{ p: 4 }}>
              <img src={delivery} alt="delivery" />
            </Grid>
            <Grid>
              <Grid>
                <Typo
                  variant="caption"
                  component="div"
                  text={label21}
                  width="114px"
                  className={classes.paymentMethoddiv}
                />
              </Grid>
              <Grid>
                <Typo
                  variant="subtitle5"
                  component="div"
                  text={label22}
                  width="164px"
                  className={classes.visaCredit}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            alignItems="center"
            sx={{
              border: "1px dashed #B4B4CF",
              position: "absolute",
              left: "8%",
              width: "0px",
              height: "58px",
              top: "35%",
            }}
          >
            <Typo text="" component="div" width="10px" />
          </Grid>
          <Grid alignItems="center" sx={{ display: "flex" }}>
            <Grid item sx={{ p: 4 }}>
              {transaction === "You are buying" ? (
                <img src={deposit} alt="deposit" />
              ) : (
                <img src={rupee} alt="rupee" />
              )}
            </Grid>
            <Grid>
              <Grid>
                <Typo
                  variant="caption"
                  component="div"
                  text={label31}
                  width="114px"
                  className={classes.paymentMethoddiv}
                />
              </Grid>
              <Grid>
                <Typo
                  variant="subtitle5"
                  component="div"
                  text={label32}
                  width="164px"
                  className={classes.visaCredit}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        sx={{
          width: "523px",
          pt: 2,
          position: "absolute",
          left: "0%",
          top: "48%",
        }}
      >
        <Divider textAlign="left"></Divider>
      </Grid>

      <Grid sx={{ width: "480px", height: "250px" }}>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={3}>
            <Typography component="div" width="100px" variant="overline">
              0.0234510 BTC
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Divider textAlign="left"></Divider>
          </Grid>
          <Grid item xs={3} alignItems="center">
            <Typography component="div" width="100px" variant="overline">
              0.0234510 BTC
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={3}>
            <Typography component="div" width="150px" variant="overline">
              transaction fee
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Divider textAlign="left"></Divider>
          </Grid>
          <Grid item xs={3} alignItems="center">
            <Typography component="div" width="100px" variant="overline">
              $1,000.00
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={1}>
            <Typography component="div" width="100px" variant="body1">
              Total
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Divider textAlign="left"></Divider>
          </Grid>
          <Grid item xs={3} alignItems="center">
            <Typography component="div" width="100px" variant="body1">
              $35,000.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {button === "SELL NOW" ? (
        <Button
          variant="contained"
          sx={{
            width: "449px",
            height: "40px",
            position: "absolute",
            top: "75%",
            left: "5%",
            backgroundColor: "orange",
          }}
          role="sellButton"
          onClick={() => {
            GetSelectedItems().then((res) => {
              const length = res.data.length;
              console.log(length);
              {
                length > 0
                  ? PostSoldItems(res.data[length - 1])
                      .then((resp) => {
                        console.log(resp.data);
                        navigate("/paymentSuccessful");
                      })
                      .catch(() => {
                        alert("already sold");
                      })
                  : alert("no items are selected");
              }
              DeleteSelectedItems(res.data[0].id);
            });
          }}
        >
          {button}
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{
            width: "449px",
            height: "40px",
            position: "absolute",
            top: "75%",
            left: "5%",
            backgroundColor: "#0052FF",
          }}
          role="buyButton"
          onClick={() => {
            GetSelectedItems().then((res) => {
              const length = res.data.length;
              console.log(length);
              {
                length > 0
                  ? PostPurchasedItems(res.data[length - 1])
                      .then((resp) => {
                        console.log(resp.data);
                        navigate("/purchaseSuccessful");
                      })
                      .catch(() => {
                        alert("already purchased");
                      })
                  : alert("no items are selected");
              }

              DeleteSelectedItems(res.data[0].id);
            });
          }}
        >
          {button}
        </Button>
      )}
    </Grid>
  );
};

export default Transaction;
