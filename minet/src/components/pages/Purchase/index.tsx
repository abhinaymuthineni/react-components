import React from "react";
import Template from "../../templates/index";
import Navbar from "../../organisms/Navbar/index";
import Sidebar from "../../organisms/SideBar/index";
import { Grid, Typography } from "@mui/material";
import Footer from "../../organisms/Footer/index";
import CryptoGrid from "../../organisms/CryptoGrid/index";
import ViewTransaction from "../../organisms/ViewTransaction/index";
import PaymentMethod from "../../organisms/Payment Method/index";
import AmountDetails from "../../organisms/AmountDetails/index";
import SpeedDelivery from "../../organisms/SpeedDelivery/index";

const index = () => {
  return (
    <Template
      Navbar={<Navbar heading="Checkout" />}
      Sidebar={<Sidebar />}
      Content={
        <>
          <Grid
            sx={{ position: "absolute", left: "96px", top: "106px" }}
            role="Purchase"
          >
            <Grid>
              <Typography variant="subtitle1" component="div">
                Buy Crypto
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
              <PaymentMethod />
            </Grid>

            <Grid sx={{ position: "absolute", left: "55px", top: "660px" }}>
              <AmountDetails
                buttonval="Buy max"
                value="BTC"
                quantity="0.0234510 "
                price="$34,000.00"
              />
            </Grid>

            <Grid sx={{ position: "absolute", left: "55px", top: "980px" }}>
              <SpeedDelivery />
            </Grid>
          </Grid>

          <Grid
            sx={{
              position: "absolute",
              left: "830px",
              top: "103px",
            }}
          >
            <ViewTransaction
              transaction="You are buying"
              label11="Payment method"
              label12="Visa credit ...8845"
              label21="Delivery fees"
              label22="0.001BTC"
              label31="Deposit to"
              label32="Bitcoin wallet"
              button="BUY NOW"
            />
          </Grid>
        </>
      }
      Footer={<Footer />}
    />
  );
};

export default index;
