import { Button } from "@mui/material";
import { useContext } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { signOut } from "next-auth/react";

const Header = () => {
	const authContext = useContext(useAuthContext);
	const nextAuthLogout = () => {
		signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/login` });
	};
	return (
		<div>
			<Button onClick={nextAuthLogout}> Logout</Button>
		</div>
	);
};

export default Header;
