import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export type Input = {
  name: string;
  type:
    | 'text'
    | 'number'
    | 'checkbox'
    | 'password'
    | 'email'
    | 'date'
    | 'file'
    | 'image'
    | 'tel';
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  id?: string;
  value:string
};
