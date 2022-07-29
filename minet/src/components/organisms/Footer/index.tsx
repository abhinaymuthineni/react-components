import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import Buttons from "../../atoms/Buttons/Buttons";
import { KeyboardArrowDown } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";

const customStyles = makeStyles({
  footerElement: {
    width: "83px",
    height: "22px",
    color: "blue",
  },

  footerElement2: {
    width: "83px",
    height: "22px",
    color: "black",
  },

  footer: {
    position: "absolute",
    top: "1450px",
    left: "80px",
  },
});
const Footer = () => {
  const classes = customStyles();
  return (
    <Grid
      container
      direction="row"
      spacing={5}
      className={classes.footer}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
      role="Footer"
    >
      <Grid item>
        <Typo
          variant="heading3"
          className={classes.footerElement}
          component="div"
          text="DashBoard"
        />
      </Grid>

      <Grid item>
        <Typo
          variant="heading3"
          className={classes.footerElement}
          component="div"
          text="Careers"
        />
      </Grid>

      <Grid item>
        <Typo
          variant="heading3"
          className={classes.footerElement}
          width="150px"
          component="div"
          text="Legacy and Privacy"
        />
      </Grid>

      <Grid item>
        <Typo
          variant="heading3"
          width="120px"
          className={classes.footerElement2}
          component="div"
          text="© 2021 Minet"
        />
      </Grid>

      <Grid item>
        <Buttons
          variant="outlined"
          endIcon={<KeyboardArrowDown />}
          sx={{
            position: "absolute",
            left: "75%",
            borderColor: "#E8E8F7",
            color: "black",
          }}
          children="English"
        />
      </Grid>

      <Grid item>
        <Buttons
          variant="outlined"
          sx={{
            position: "absolute",
            left: "85%",
          }}
          children="Need Help"
        />
      </Grid>
    </Grid>
  );
};

export default Footer;
