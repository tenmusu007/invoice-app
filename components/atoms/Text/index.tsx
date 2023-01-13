import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TypographyType } from "types/text";
const Text = (props: TypographyType) => {
	const { label, labelText, variant, text, style } = props;
	return (
		<>
			<Box sx={style}>
				{label ? (
					<>
						<Typography variant={label}>{labelText}</Typography>
						<Typography variant={variant}>{text}</Typography>
					</>
				) : (
					<Typography variant={variant} sx={style}>
						{text}
					</Typography>
				)}
			</Box> 
		</>
	);
};

export default Text;
