import BoxLayout from "@components/atoms/Box";
import { Container } from "@mui/material";
import { Children } from "../../types/children";
import Header from "../Header";
const Layout = ({ children }: Children) => {
	return (
		<>
			<Container component='main' fixed>
				<Header />
				{/* <BoxLayout> */}
					{children}
				{/* </BoxLayout> */}
			</Container>
		</>
	);
};

export default Layout;
