import { Grid } from "@mui/material";
import React from "react";
import logo from "../../../assets/Vector.png";
import one from "../../../assets/1.png";
import two from "../../../assets/2.png";
import three from "../../../assets/3.png";
import logo1 from "../../../assets/logo1.png";
import four from "../../../assets/4.png";
import five from "../../../assets/5.png";
import { makeStyles } from "@material-ui/core";

const customStyles = makeStyles({
  verticalHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "absolute",
    width: "80px",
    height: "728px",
    left: "25px",
    top: "30px",
  },
});

const SideBar = () => {
  const classes = customStyles();

  return (
    <>
      <Grid item className={classes.verticalHeader} role="Sidebar" />

      <Grid item sx={{ position: "absolute", top: "24px" }}>
        <img src={logo1} alt="logo1" width="30px" height="30px" />
      </Grid>

      <Grid item sx={{ position: "absolute", top: "32px", left: "6px" }}>
        <img src={logo} alt="logo" width="18px" height="18px" />
      </Grid>

      <Grid item sx={{ position: "absolute", top: "107px" }}>
        <img src={one} alt="logo" width="16px" height="16px" />
      </Grid>

      <Grid item sx={{ position: "absolute", top: "193px" }}>
        <img src={two} alt="logo" width="16px" height="16px" />
      </Grid>

      <Grid item sx={{ position: "absolute", top: "259px" }}>
        <img src={three} alt="logo" width="16px" height="16px" />
      </Grid>

      <Grid item sx={{ position: "absolute", top: "335px" }}>
        <img src={four} alt="logo" width="16px" height="16px" />
      </Grid>

      <Grid item sx={{ position: "absolute", top: "441px" }}>
        <img src={five} alt="logo" width="16px" height="16px" />
      </Grid>

      <Grid />
    </>

    /*

        <Grid item container>
            <Grid item sx={{position:"absolute",left:"100px"}} >
                <Typo text="Checkout"  component="div" className={classes.checkout}/>
            </Grid>

             <Grid item sx={{position:"absolute",left:"945px"}} >
                <Buttons variant="contained" className={classes.sellButton} > SELL </Buttons>
            </Grid>

            <Grid item sx={{position:"absolute",left:"1100px"}} >
                <Buttons  variant="contained" className={classes.sellButton} > BUY </Buttons>
            </Grid>

            <Grid item sx={{position:"absolute",left:"1260px"}} >
                <Ava image={img}/>
            </Grid>

            <Grid item sx={{position:"absolute",left:"1300px"}} >
                 <Buttons   endIcon={clicked ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                        children=""/>
            </Grid>
         </Grid>

    <Grid item container >
        <Grid item container>

            <Grid item sx={{position:"absolute",left:"106px",top:"104px"}}>
                    <Typo variant="subtitle1" text="Buy Crypto"  component="div" className={classes.buyNowButton}/>
            </Grid>
            <Grid>

                <Grid item sx={{position:"absolute",left:"128px",top:"155px"}}>
                    <Typo variant="body1" text="Choose one" component="div" className={classes.choose}/>

                </Grid>

                <Grid container sx={{position:"absolute",left:"128px",top:"200px"}} >

                    <Grid item container direction="row">

                        <Grid item direction="column" className={classes.coinGrid}>
                            <Grid item >
                                    <img src={explore} alt="explore" width="56px" height="56px"/>
                            </Grid>
                            <Grid item>
                                <Typo variant="body1" text="Bitcoin" component="div" className={classes.coinName}/>
                            </Grid>
                            <Grid item >
                                <Typo variant="body1" text="$3,406,069.54" component="div" className={classes.coinName}/>

                            </Grid>

                        </Grid>


                    </Grid>



                </Grid>

                <Grid container sx={{position:"absolute",left:"128px",top:"370px"}} >

                    <Grid item ></Grid>



                </Grid>


            </Grid>
        </Grid>
    </Grid>
  </Grid>*/
  );
};

export default SideBar;
