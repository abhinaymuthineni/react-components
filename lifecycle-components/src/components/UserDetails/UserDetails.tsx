import React, { useEffect, useState } from 'react'
import '../../App.css';
import {Typography } from '@mui/material';
import maleOne from '../../../src/assets/Male/Male1.png'
import maleTwo from '../../../src/assets/Male/Male2.png'
import maleThree from '../../../src/assets/Male/Male3.png'
import femaleOne from '../../../src/assets/Female/Female1.png'
import femaleTwo from '../../../src/assets/Female/Female2.png'
import femaleThree from '../../../src/assets/Female/Female3.png'


export const UserForm = () => {

  const boxStyles = {

    marginTop: 100,
    height: 188,
    width: 500,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',


  }
  const typographyStyles = {
    padding: 20,
    fontFamily: "Arial",
    fontSize: 40,
  }

  const [userName, setUserName] = useState<String>();
  const [age, setAge] = useState<Number>(0);
  const [gender, setGender] = useState<String>("");
  const [userImage, setUserImage] = useState<string>();
  const handleChangeGender = ((e: any) => {
    setGender(e.target.value);
  });

  const handleChangeName = ((e: any) => {
    setUserName(e.target.value);
  });

  const handleChangeAge = ((e: any) => {
    setAge(Number(e.target.value));
  });


 useEffect(()=> {
  if(gender === "Male") {
    console.log(userImage);
    if(0<=age && age<25)   setUserImage(maleOne);
    else if(25<=age && age<50)   setUserImage(maleTwo);
    else   setUserImage(maleThree);
  }
  
  if(gender === "Female") {
    console.log(userImage);
    if(0<=age && age<25) setUserImage(femaleOne);
    else if(25<=age && age<50) setUserImage(femaleTwo);
    else setUserImage(femaleThree);
  }
 }, [gender, age, userImage]);

  return (
    <div style={boxStyles}>
      <Typography style={typographyStyles}>
        Enter User Details
      </Typography>
      <form>
        <label style={{ display: "block", padding: "20px" }}>Enter your Name:
          <input onChange={handleChangeName} type="text" style={{ padding: "5px" }} />
        </label>
        {userName &&
          <>
            <label style={{ display: "block", padding: "20px" }}>Enter your Age:
              <input onChange={handleChangeAge} type="number" style={{ padding: "5px" }} />
            </label>
            <label style={{ display: "block", padding: "20px" }}> Gender :
              <select
                style={{ display: "block", margin: "5px", padding : "5px"}}
                onChange={handleChangeGender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
          </>
        }
      </form>
      <div>
          {
            userImage &&
            <>
              <img src={userImage} alt="Hello" />
            </>
          }
      </div>
    </div>
  )
}