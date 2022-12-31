import React from "react";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { auth } from "../lib/firebase";
import { Button, Typography } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
	const router = useRouter();
	useEffect(() => {
		const user = auth.currentUser;
	}, []);
	const google = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		try {
			const provider = new GoogleAuthProvider();
			const response = await signInWithPopup(auth, provider)
				.then((result) => {
					const credential = GoogleAuthProvider.credentialFromResult(result);
					return result.user;
				})
				.catch((error) => {
					const errorCode = error.code;
					return errorCode;
				});
				router.push("/");

		} catch (err) {
			alert(err);
		}
	};
	const handleGoggle = () => {
		signIn("google", { callbackUrl: "http://localhost:3000" });
	}
	const nextAuthLogout = () => {
	signOut({ callbackUrl: "http://localhost:3000/login" });
}
	return (
		<>
			<Typography variant='h2'>Login</Typography>
			<Button onClick={google}>Google</Button>
			<Button onClick={handleGoggle}>Next Google</Button>
			<Button onClick={nextAuthLogout}> Next Google Logout</Button>
		</>
	);
};

export default Login;
