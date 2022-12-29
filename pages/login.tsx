import React, { use } from "react";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import type { NextPage } from "next";
import { Firebase, auth } from "../lib/firebase";
import { Button } from "@mui/material";
const Login = () => {
	const router = useRouter();
	const user = auth.currentUser;
  console.log(user);
	useEffect(() => {
		const user = auth.currentUser;
		console.log(user);
	}, []);
	const google = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		try {
			const provider = new Firebase.auth.GoogleAuthProvider();
			const result = await auth.signInWithPopup(provider).catch(alert);
			console.log(result);
			const user = auth.currentUser;
			console.log("user", user);
			// router.push("/");
		} catch (err) {
			alert(err);
		}
	};
	return (
		<>
			<Button onClick={google}>Google</Button>
		</>
	);
};

export default Login;
