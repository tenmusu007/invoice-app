import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useRouter } from 'next/router';
import { SelectType } from 'types/select';
const SelectInput = (props: Partial<SelectType>) => {
  const { items, name, language, setLanguage } = props;
  const router = useRouter();
  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value !== 'English') {
      setLanguage?.(`jp`);
      return router.push(`/jp/account`);
    } else {
      setLanguage?.(`en`);
      return router.push(`/en/account`);
    }
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-helper-label">{name}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        defaultValue={items[0]}
        label="Language"
        onChange={handleChange}
      >
        {items?.map((item: any, index: Number) => {
          return (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
