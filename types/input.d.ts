import type { FieldValues, UseFormRegister } from 'react-hook-form';

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
    | 'image';
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  id?: string;
  disabled?: boolean;
  value?: string | number;
};
