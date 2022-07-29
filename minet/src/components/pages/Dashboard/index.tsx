import { Divider, Grid } from "@mui/material";
import React from "react";
import Template from "../../templates/index";
import Footer from "../../organisms/Footer/index";
import Navbar from "../../organisms/Navbar/index";
import SideBar from "../../organisms/SideBar/index";
import Typo from "./../../atoms/Typo/index";
import { KeyboardArrowRight } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import image from "../../../assets/navbar.png";
import symbol from "../../../assets/symbol.png";
import PortfolioCard from "../../organisms/Portfolio";
import InvestmentCard from "../../organisms/DiscoverCard";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { makeStyles } from "@material-ui/core";
import FunctionalGrid from "../../organisms/TransactionHistory/index";
import ButtonList from "../../molecules/ButtonList";

const customStyles = makeStyles({
  typoColor: {
    color: "blue",
  },
});

const Dashboard = () => {
  const classes = customStyles();

  return (
    <Template
      Navbar={<Navbar heading="Dashboard" />}
      Sidebar={<SideBar />}
      Content={
        <>
          <Grid role="Dashboard">
            <Grid container direction="column">
              <Grid
                sx={{
                  display: "flex",
                  position: "absolute",
                  top: "108px",
                  left: "104px",
                  alignItems: "center",
                }}
              >
                <Typo
                  text="Watchlist"
                  component="div"
                  variant="subtitle2"
                  width="120px"
                />
                <Typo
                  text="Discover access "
                  component="div"
                  variant="subtitle1"
                  width="126px"
                  className={classes.typoColor}
                />
                <KeyboardArrowRight color="primary" />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  position: "absolute",
                  top: "108px",
                  left: "850px",
                  alignItems: "center",
                }}
              >
                <Typo
                  text="Edit "
                  component="div"
                  variant="body1"
                  width="30px"
                />

                <CreateIcon sx={{ height: "15px", width: "15px" }} />
              </Grid>
              <Grid sx={{ position: "absolute", top: "100px", left: "900px" }}>
                <img src={image} alt="edit" height="30px" width="64px" />
              </Grid>
            </Grid>

            <Grid
              container
              direction="column"
              sx={{
                position: "absolute",
                top: "220px",
                left: "120px",
              }}
            >
              <InvestmentCard />
            </Grid>

            <Grid container direction="column">
              <Grid
                sx={{
                  display: "flex",
                  position: "absolute",
                  top: "550px",
                  left: "104px",
                  alignItems: "center",
                }}
              >
                <Typo
                  text="My portfolio value"
                  component="div"
                  variant="subtitle2"
                  width="180px"
                />
              </Grid>
              <Grid sx={{ position: "absolute", top: "550px", left: "900px" }}>
                <img
                  src={symbol}
                  alt="portfolio value"
                  height="30px"
                  width="64px"
                />
              </Grid>
            </Grid>

            <Grid
              sx={{
                position: "absolute",
                top: "630px",
                left: "104px",
              }}
            >
              <PortfolioCard />
            </Grid>

            <Grid container direction="column">
              <Grid
                sx={{
                  display: "flex",
                  position: "absolute",
                  top: "1200px",
                  left: "104px",
                  alignItems: "center",
                }}
              >
                <Typo
                  text="10 coins (3 active)"
                  component="div"
                  variant="subtitle1"
                  width="180px"
                />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  position: "absolute",
                  top: "1200px",
                  left: "540px",
                }}
              >
                <ErrorOutlineIcon
                  sx={{ width: "15px", height: "15px", pr: 1 }}
                />
                <Typo
                  text="Click on currency name below to display
                                 it on the graph"
                  component="div"
                  variant="body1"
                  width="380px"
                />
              </Grid>
              <Grid sx={{ position: "absolute", top: "1290px", left: "100px" }}>
                <ButtonList />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            sx={{
              height: "1350px",
              width: "1%",
              pt: 2,
              position: "absolute",
              left: "970px",
              top: "70px",
            }}
          >
            <Divider orientation="vertical" textAlign="left"></Divider>
          </Grid>
          <Grid
            sx={{
              position: "absolute",
              top: "106px",
              left: "998px",
            }}
          >
            <FunctionalGrid />
          </Grid>
        </>
      }
      Footer={<Footer />}
    />
  );
};

export default Dashboard;
