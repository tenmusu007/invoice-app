import React from "react";
import { Button as MUIButton } from "@mui/material";
import { Button as ButtonType } from "types/button";

const Button = ({ text, onClick, sx, variant, type }: ButtonType) => {
  return <MUIButton type={type} sx={sx} onClick={onClick} variant={variant}>{text}</MUIButton>;
};

export default Button;
