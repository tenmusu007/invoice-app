import { Container } from "@mui/material";
import { Children } from "../../types/children";
import Header from "../Header";
const Layout = ({ children }: Children) => {
	return (
		<>
			<Header />
			<Container component='main' fixed>
				{" "}
				{children}
			</Container>
		</>
	);
};

export default Layout;
