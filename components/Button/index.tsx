import React from "react";
import { Button as MUIButton } from "@mui/material";
import { Button as ButtonType } from "types/button";

const Button = ({ text, onClick, sx, variant, type, icon }: ButtonType) => {
  return <MUIButton type={type} onClick={onClick} startIcon = {icon}>{text}</MUIButton>;
};

export default Button;
