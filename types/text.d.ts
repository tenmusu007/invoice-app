import{ TypographyTypeMap } from "@mui/material/Typography";

export type TypographyType = {
	label?: TypographyTypeMap["props"]["variant"];
	labelText?: String;
	variant?: TypographyTypeMap["props"]["variant"];
  text?: String;
  style?: any;
};
