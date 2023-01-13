import { Button } from "@mui/material";
import { useContext } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { signOut, useSession } from "next-auth/react";
import Text from "@components/atoms/Text";
const Header = () => {
	const authContext = useContext(useAuthContext);
	const { data: session } = useSession();

	const nextAuthLogout = () => {
		signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/login` });
	};
	return (
		<>
			<Button onClick={nextAuthLogout}> Logout</Button>
			<Text label={"h3"} labelText={"user"} />
			<Text variant={"h4"} text={session?.user?.name} />
		</>
	);
};

export default Header;
