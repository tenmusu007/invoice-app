import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { SelectType } from 'types/select';
const SelectInput = (props: Partial<SelectType>) => {
  const { items, name, language, template,handleChangeLanguage } = props;
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
          onChange={handleChangeLanguage}
        >
          {items && items?.map((item: any) => {
          return (
            <MenuItem value={item.value} key={item.name}>
              {item.name}
            </MenuItem>
          );
        })}
          {template &&
            template?.map((item: any) => {
              return (
                <MenuItem value={item._id} key={item.userId}>
                  {item.companyName}
                  {item.name}
                  {item.bankName}
                </MenuItem>
              );
            })}
        </Select>
      </>
    </FormControl>
  );
};

export default SelectInput;
