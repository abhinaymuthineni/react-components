import React from "react";
import Typo from "../../atoms/Typo/index";
import { Button, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Card from "../../molecules/AmountCard/ButtonCard";
import { makeStyles } from "@material-ui/core";

interface AmountProps {
  buttonval: string;
  value: string;
  price: string;
  quantity: string;
}

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

  amountDetailsPrice: {
    width: "118px",
    height: "28px",
    color: "#343446",
  },
});

const AmountComponent = ({
  buttonval,
  value,
  price,
  quantity,
}: AmountProps) => {
  function valuetext(value: number) {
    return `1BTC=$${value}`;
  }

  const marks = [
    {
      value: 50,
      label: "1BTC=3,406,069.54",
    },
  ];

  const classes = customStyles();
  return (
    <Grid
      item
      container
      sx={{
        width: "710px",
        border: "1px solid #E8E8F7",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        // &hover:"0 8px 16px 0 rgba(0,0,0,0.2)"
      }}
      spacing={5}
      className={classes.hoverfun}
      role="amountDetails"
    >
      <Grid item container sx={{ p: 1 }}>
        <Typo
          variant="subtitle1"
          component="div"
          className={classes.paymentMethod}
          text="Amount Details"
        />
      </Grid>

      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          width: "663px",
        }}
      >
        <Card
          Atom={<Button variant="outlined">{buttonval}</Button>}
          label={price}
        />
      </Grid>

      <Stack
        sx={{
          width: "300px",
          height: 80,
          display: "flex",
          alignItems: "center",
        }}
        spacing={1}
      >
        <Slider
          getAriaLabel={() => "Price"}
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={[50]}
          marks={marks}
          size="small"
          disabled
        />
      </Stack>

      <Grid
        item
        sx={{
          display: "flex",
          p: 2,
          width: "663px",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Grid
          sx={{
            position: "absolute",
            top: "0px",
            width: "90%",
            height: "80%",
          }}
        >
          <Card
            Atom={
              <Typo
                variant="subtitle1"
                component="div"
                className={classes.amountDetailsPrice}
                text={value}
                width="120px"
              />
            }
            label={quantity}
          />
        </Grid>

        <Grid item container sx={{ height: "5px" }}>
          <Typo
            variant="subtitle1"
            component="div"
            className={classes.paymentMethod}
            text=""
            width="50px"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AmountComponent;
