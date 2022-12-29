import { Container } from "@mui/material";
import { Children } from "../../types/children";
const Layout = ({ children }: Children) => {
	return (
		<Container component='main' fixed>
			{" "}
			{children}
		</Container>
	);
};

export default Layout;
