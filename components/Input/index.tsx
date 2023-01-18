import React from "react";
import { Input as InputType } from "types/input";

const Input = ({ name, placeholder, type, register, onChange }: InputType) => {
  return (
    <input
      type={type}
      {...register(name)}
      placeholder={placeholder}
      style={{ width: "90%" }}
      onChange={onChange}
    />
  );
};

export default Input;
