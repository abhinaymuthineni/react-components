import { Divider, Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import portfolio from "../../../assets/portfolio.png";
import ListItems from "../WalletCard/index";
import Card from "../../molecules/PortfolioCard";
import dollar from "../../../assets/rupee.png";
import { makeStyles } from "@material-ui/core";
import TransactionCard from "../../molecules/TransactionCard/index";
import soldImage from "../../../assets/sold.png";
import purchasedImage from "../../../assets/purchased.png";
import { GetPurchasedItems, GetSoldtems } from "../../../service/index";

const customStyles = makeStyles({
  typoColor: {
    color: "blue",
  },
});

interface BitcoinProps {
  id: number;
  image: string;
  title: string;
  price: string;
}

const Portfolio = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [purchased, setPurchased] = React.useState<BitcoinProps[]>([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sold, setSold] = React.useState<BitcoinProps[]>([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    GetPurchasedItems()
      .then((res) => {
        setPurchased(res.data);
      })
      .catch(() => {
        console.log("no items");
      });
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    GetSoldtems()
      .then((res) => {
        setSold(res.data);
      })
      .catch(() => {
        console.log("no items");
      });
  }, []);

  const classes = customStyles();
  return (
    <>
      <Grid sx={{ display: "flex" }} role="FunctionalGrid">
        <Typo component="div" text="My portfolio" variant="subtitle1" />
        <Typo component="div" text="" variant="subtitle2" width="200px" />

        <img src={portfolio} alt="portfolio" width="54px" height="30px" />
      </Grid>

      <Grid sx={{ position: "absolute", top: "70px", left: "0px" }}>
        <ListItems />
        <Divider textAlign="left"></Divider>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "65px",
            p: 2,
          }}
        >
          <Typo component="div" text="Total" variant="subtitle1" />
          <Typo component="div" text="$ 14,027.2" variant="subtitle1" />
        </Grid>

        <Divider textAlign="left"></Divider>

        <Grid sx={{ pt: 3, pb: 3 }}>
          <Typo component="div" text="My wallets" variant="subtitle1" />
          <Grid sx={{ pt: 2, pb: 2 }}>
            <Card
              image={dollar}
              cryptoItem="Bitcoin"
              group="BTC"
              price="$34,000.00"
            />
          </Grid>
        </Grid>

        <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typo component="div" text="Recent transaction" variant="subtitle1" />
          <Typo
            component="div"
            text="View All"
            variant="subtitle1"
            className={classes.typoColor}
          />
        </Grid>

        <Grid>
          {sold.map((value: BitcoinProps) => {
            return (
              <Grid item>
                <TransactionCard image={soldImage} title={value.title} />
              </Grid>
            );
          })}

          {purchased.map((value: BitcoinProps) => {
            return (
              <Grid item>
                <TransactionCard image={purchasedImage} title={value.title} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
