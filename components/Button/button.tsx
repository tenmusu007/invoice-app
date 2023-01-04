import React from "react"
import { Button as MUIButton } from "@mui/material";
import { Button as ButtonType } from "types/button";

const Button = ({text, onClick, sx, variant}:ButtonType) => {
  return (
    <MUIButton>Button</MUIButton>
  )
}

export default Button