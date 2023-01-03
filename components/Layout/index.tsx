import { Container } from "@mui/material";
import { Children } from "../../types/children";
import Header from "../Header";
const Layout = ({ children }: Children) => {
	return (
		<Container component='main' fixed>
			{" "}
			<Header/>
			{children}
		</Container>
	);
};

export default Layout;
