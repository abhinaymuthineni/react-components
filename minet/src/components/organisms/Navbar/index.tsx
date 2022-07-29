import { Grid } from "@mui/material";
import React from "react";
import Buttons from "../../atoms/Buttons/Buttons";
import Ava from "../../atoms/Avatar/Ava";
import Typo from "../../atoms/Typo/index";
import { KeyboardArrowDown } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";

import img from "../../../assets/avatar.png";

const customStyles = makeStyles({
  checkout: {
    width: "109px",
    height: "34px",
    color: "#343446",
  },

  sellButton: {
    width: "120px",
    height: "42px",
    // background: "#FFA74F",
    borderRadius: "4px",
    alignItems: "center",
  },
});

interface Props {
  heading: string;
}
const Navbar = ({ heading }: Props) => {
  const classes = customStyles();

  return (
    <Grid item container sx={{}} role="Navbar">
      <Grid item sx={{ position: "absolute", left: "100px", top: "10px" }}>
        <Typo
          text={heading}
          variant="heading"
          component="div"
          className={classes.checkout}
        />
      </Grid>

      <Grid item sx={{ position: "absolute", left: "945px" }}>
        <Buttons
          variant="contained"
          className={classes.sellButton}
          color="secondary"
        >
          {" "}
          SELL{" "}
        </Buttons>
      </Grid>

      <Grid item sx={{ position: "absolute", left: "1100px" }}>
        <Buttons
          variant="contained"
          className={classes.sellButton}
          sx={{ backgroundColor: "primary" }}
        >
          {" "}
          BUY{" "}
        </Buttons>
      </Grid>

      <Grid item sx={{ position: "absolute", left: "1260px" }}>
        <Ava image={img} />
      </Grid>

      <Grid item sx={{ position: "absolute", left: "1300px" }}>
        <Buttons endIcon={<KeyboardArrowDown />} children="" />
      </Grid>

      <hr></hr>
    </Grid>
  );
};

export default Navbar;
