import{ TypographyTypeMap } from "@mui/material/Typography";
import { ReactNode } from "react";

export type TypographyType = {
	label: TypographyTypeMap["props"]["variant"];
	labelText: String;
	variant: TypographyTypeMap["props"]["variant"];
  text: String | null;
	style: any;
	children:ReactNode
};
