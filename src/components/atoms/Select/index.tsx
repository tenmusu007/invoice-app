import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import { SelectType } from 'types/select';

const SelectInput = (props: Partial<SelectType>) => {
  const { items, name, language, template, onChange } = props;
  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <>
        <InputLabel id="demo-simple-select-helper-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          // defaultValue={language}
          value={language}
          label="Language"
          onChange={onChange}
        >
          {items &&
            items?.map((item: any) => (
                <MenuItem value={item.value} key={item.name}>
                  {item.name}
                </MenuItem>
              ))}
          {template && (
            <MenuItem value={'create'} key={'0'}>
              {'new template'}
            </MenuItem>
          )}
          {template &&
            template?.map((item: any) => (
                <MenuItem value={item} key={item._id}>
                  {item.companyName}
                  {item.name}
                  {item.bankName}
                </MenuItem>
              ))}
        </Select>
      </>
    </FormControl>
  );
};

export default SelectInput;
