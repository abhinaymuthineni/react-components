import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo";
import { makeStyles } from "@material-ui/core";
import blueImage from "../../../assets/blueImage.png";
import orangeImage from "../../../assets/orangeImage.png";

const array = ["1H", "24H", "1W", "1M", "1Y", "ALL"];

const customStyles = makeStyles({
  month: {
    color: "#0052FF",
  },

  bitcoin: {
    fontWeight: 400,
    fontSize: "12px",
    color: "#000000",
  },
});

const TimeComponent = () => {
  let i = 1;
  const classes = customStyles();
  return (
    <Grid container direction="row" justifyContent="end" role="TimePeriod">
      <Grid
        sx={{
          border: "1px solid #E8E8F7",
          width: "304px",
          height: "52px",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {array.map((value: string) => {
          return (
            <Grid
              item
              sx={{ p: 0.5, width: "32px", color: "#7D7D89" }}
              key={i++}
            >
              {value === "1M" ? (
                <>
                  <Typo
                    component="div"
                    text={value}
                    width="32px"
                    className={classes.month}
                  />
                  <hr color="#0052FF" />
                </>
              ) : (
                <Typo component="div" text={value} width="32px" />
              )}
            </Grid>
          );
        })}
      </Grid>

      <Grid container direction="row" justifyContent="end" sx={{ p: 2 }}>
        <Grid item sx={{ display: "flex", alignItems: "center", p: 1 }}>
          <img src={orangeImage} width="8px" height="8px" />
          <Typo component="div" text="Bitcoin" className={classes.bitcoin} />
        </Grid>

        <Grid item sx={{ display: "flex", alignItems: "center", p: 1 }}>
          <img src={blueImage} width="8px" height="8px" />
          <Typo
            component="div"
            text="Total Investment"
            className={classes.bitcoin}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TimeComponent;
