import React from "react";
import { inputLabel as inputLabelType } from "types/inputLabel";

const InputLabel = ({ htmlFor, labelName }: inputLabelType) => {
  return <label htmlFor={htmlFor}>{labelName}</label>;
};

export default InputLabel;
