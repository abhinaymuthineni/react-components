import React from "react";
import Typo from "../../atoms/Typo/index";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";

interface Props {
  label: string;
  Atom: React.ReactNode;
}

const customStyles = makeStyles({
  paymentMethod: {
    width: "250px",
    height: "22px",
    color: "#343446",
  },

  amountDetailsPrice: {
    width: "118px",
    height: "28px",
    color: "#343446",
  },
});

const ButtonCard = ({ label, Atom }: Props) => {
  const classes = customStyles();

  return (
    <Grid
      sx={{
        border: "1px solid #E8E8F7",
        display: "flex",
        alignItems: "center",
        width: "623px",
        p: 1,
      }}
      role="amountCard"
    >
      <Grid item container>
        <Typo
          component="div"
          variant="subtitle2"
          className={classes.amountDetailsPrice}
          text={label}
          width="300px"
        />
      </Grid>

      <Grid item container>
        <Typo
          component="div"
          variant="subtitle1"
          className={classes.paymentMethod}
          text=""
          width="180px"
        />
      </Grid>

      <Grid item container>
        {Atom}
      </Grid>
    </Grid>
  );
};

export default ButtonCard;
