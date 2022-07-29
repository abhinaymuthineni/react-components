import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo";
import image from "../../../assets/24h.png";

interface AssetProps {
  cryptoImage: string;
  cryptoItem: string;
  price: string;
  graph: string;
}

const Assets = ({ cryptoImage, cryptoItem, price, graph }: AssetProps) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        p: 2,
        width: "fit-content",
        "&:hover": {
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          border: "2px solid #E8E8F7",
        },
      }}
      spacing={3}
      role="assetCard"
    >
      <Grid item>
        <img src={cryptoImage} alt="explore" width="42px" height="42px" />
      </Grid>
      <Grid item>
        <Grid item>
          <Typo component="div" text={cryptoItem} width="55px" />
        </Grid>
        <Grid item>
          <Typo component="div" text={price} width="106px" />
        </Grid>
        <Grid item>
          <img src="" height="20px" />
        </Grid>
        <Grid item>
          <img src={image} alt="time" width="41px" height="18px" />
        </Grid>
      </Grid>
      <Grid item>
        <img src={graph} alt="graph" width="190px" height="82px" />
      </Grid>
    </Grid>
  );
};

export default Assets;
