import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TypographyType } from "types/text";
const Text = (props: TypographyType) => {
	const { label, labelText, variant, text } = props;
	return (
		<>
			<Box
				sx={{
					width: "45%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginX: 'auto',
					marginY: '30px'
				}}
			>
				{label ? (
					<>
						<Typography variant={label}>{labelText}</Typography>
						<Typography variant={variant}>{text}</Typography>
					</>
				) : (
					<Typography variant={variant}>{text}</Typography>
				)}
			</Box>
		</>
	);
};

export default Text;
