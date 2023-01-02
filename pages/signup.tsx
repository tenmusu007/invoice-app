import React from "react";
import { Button } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
const SignUp = () => {
  const { data: session } = useSession();
	const handleGoggle = () => {
		signIn("google", { callbackUrl: process.env.NEXT_PUBLIC_BASE_URL });
	};
	return (
		<>
			<Button onClick={handleGoggle}>Next Google</Button>
		</>
	);
};

export default SignUp;
