import React from "react";
import { Input as InputType } from "types/input";

const Input = ({name, placeholder ,type ,register}: InputType) => {
  return (
    <input type={type} {...register(name)} placeholder={placeholder} />
  );
};

export default Input;
