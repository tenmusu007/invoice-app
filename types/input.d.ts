import { FieldValues, UseFormRegister } from "react-hook-form";

export type Input = {
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
};
