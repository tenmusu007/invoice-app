import React from 'react';
import { Input as InputType } from 'types/input';

const Input = ({
  name,
  placeholder,
  type,
  register,
  onChange,
  id,
  value,
}: InputType | any) => {
  console.log(value);
  return (
    <input
      type={type}
      {...register(name)}
      placeholder={placeholder}
      style={{ width: '90%', borderRadius: '4px', padding: '8px 16px' }}
      onChange={onChange}
      id={id}
      defaultValue={value}
    />
  );
};

export default Input;
