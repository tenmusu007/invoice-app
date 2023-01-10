import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { SelectType } from "types/select";
const SelectInput = (props: SelectType) => {
	const { items, name } = props;
	const handleChange = (event: SelectChangeEvent) => {
		console.log(event.target.value);
	};
	return (
		<FormControl sx={{ m: 1, minWidth: 120 }}>
			<InputLabel id='demo-simple-select-helper-label'>{name}</InputLabel>
			<Select
				labelId='demo-simple-select-helper-label'
				id='demo-simple-select-helper'
				defaultValue={items[0]}
				label='Language'
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
