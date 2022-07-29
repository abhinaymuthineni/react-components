import React from "react";
import Template from "../../templates/index";
import Navbar from "../../organisms/Navbar/index";
import SideBar from "../../organisms/SideBar/index";
import { Grid, Typography } from "@mui/material";
import Footer from "../../organisms/Footer/index";
import CryptoGrid from "../../organisms/CryptoGrid/index";
import ViewTransaction from "../../organisms/ViewTransaction/index";
import TotalBalance from "../../organisms/totalBalance/index";
import AmountDetails from "../../organisms/AmountDetails/index";
import Deposit from "../../organisms/deposit/index";

const Payment = () => {
  return (
    <Template
      Navbar={<Navbar heading="Checkout" />}
      Sidebar={<SideBar />}
      Content={
        <>
          <Grid
            sx={{
              position: "absolute",
              left: "96px",
              top: "106px",
            }}
            role="PaymentPage"
          >
            <Grid>
              <Typography variant="subtitle1" component="div">
                Sell Crypto
              </Typography>
            </Grid>

            <Grid
              sx={{
                position: "absolute",
                left: "17px",
                top: "50px",
                border: "1px solid #E8E8F7",
                width: "705px",
                height: "350px",
                p: 3,
              }}
            >
              <Typography
                variant="body1"
                component="div"
                width="114px"
                sx={{ fontSize: "16px" }}
              >
                Choose crypto
              </Typography>
            </Grid>

            <Grid sx={{ position: "absolute", left: "20px", top: "120px" }}>
              <CryptoGrid />
            </Grid>

            <Grid sx={{ position: "absolute", left: "55px", top: "450px" }}>
              <TotalBalance />
            </Grid>

            <Grid sx={{ position: "absolute", left: "55px", top: "660px" }}>
              <AmountDetails
                buttonval="Sell max"
                value="USD coin(cash)"
                price="0.0234510 "
                quantity="$34,000.00"
              />
            </Grid>

            <Grid sx={{ position: "absolute", left: "60px", top: "990px" }}>
              <Deposit />
            </Grid>
          </Grid>

          <Grid
            sx={{
              position: "absolute",
              left: "840px",
              top: "103px",
            }}
          >
            <ViewTransaction
              transaction="You are selling"
              label11="Paying through"
              label12="Bitcoin Wallet"
              label21="Delivery fees"
              label22="0.001BTC"
              label31="Deposit to"
              label32="Rupee coin"
              button="SELL NOW"
            />
          </Grid>
        </>
      }
      Footer={<Footer />}
    />
  );
};

export default Payment;
