import React from "react";
import { Avatar } from "@mui/material";

interface Letter {
  image: string;
}

const Ava = ({ image }: Letter) => {
  return (
    <Avatar
      src={image}
      alt="user"
      sx={{ width: "40px", height: "40px" }}
      role="avatar"
    />
  );
};

export default Ava;
