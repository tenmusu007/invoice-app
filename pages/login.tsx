import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import Text from "@components/atoms/Text";
import Image from "next/image";
import Illustrationtop from "public/Illustrationtop.jpg";
import GoogleButton from "react-google-button";
const Login = () => {
	const handleGoggle = () => {
		signIn("google", { callbackUrl: process.env.NEXT_PUBLIC_BASE_URL });
	};
	return (
		<>
			<Grid container>
				<Grid container item lg={6} alignItems='center' display='flex'>
					<Grid item md={12}>
						<Text text={"Welcom to Invoicer"} variant={"h3"} />
					</Grid>
					<Grid item md={12}>
						<Text
							text={"Your free invoice generator is around the corner!!"}
							variant={"h5"}
						/>
					</Grid>
					<Grid item md={12}>
						<Image src={Illustrationtop} alt={"image"} width={300} />
					</Grid>
				</Grid>
				<Grid container item lg={6} alignItems='center' display='flex'>
					<Grid item md={12}>
						<Text
							text={"Please Sign-in with your Google here."}
							variant={"h5"}
							style={{ textAlign: "center" }}
						/>
					</Grid>
					<Grid item md={12} sx={{ textAlign: "center" }}>
						<GoogleButton onClick={handleGoggle} />
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Login;
