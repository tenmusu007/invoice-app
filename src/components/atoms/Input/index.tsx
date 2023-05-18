import React from 'react';

import type { Input as InputType } from 'types/input';

const Input = ({
  name,
  placeholder,
  type,
  register,
  onChange,
  id,
  disabled,
  value,
}: InputType) => (
  <input
    type={type}
    {...register(name)}
    placeholder={placeholder}
    style={{ width: '90%', borderRadius: '4px', padding: '8px 16px' }}
    onChange={onChange}
    id={id}
    disabled={disabled}
    defaultValue={value}
  />
);

export default Input;
