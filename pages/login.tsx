import React from "react";
import { Button, Typography } from "@mui/material";
import { signIn} from "next-auth/react";

const Login = () => {
	const handleGoggle = () => {
		signIn("google", { callbackUrl: process.env.NEXT_PUBLIC_BASE_URL });
	}
	return (
		<>
			<Typography variant='h2'>Login</Typography>
			<Button onClick={handleGoggle}>Next Google</Button>

		</>
	);
};

export default Login;
