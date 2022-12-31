import React, { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import { auth } from "../lib/firebase";
import { Button } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AuthContext, { useAuthContext } from "../Context/AuthContext";
import { useSession, signIn, signOut } from "next-auth/react";
const SignUp = () => {
  const { data: session } = useSession();
  const authContext = useContext(useAuthContext);
	const router = useRouter();
	const google = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		try {
			const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider)
				.then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          return result.user
				})
				.catch((error) => {
					const errorCode = error.code;
					return errorCode;
				});
      console.log("response",response);
			// router.push("/");
		} catch (err) {
			alert(err);
		}
  };

	return (
		<>
			<Button onClick={google}>Google</Button>
			<Button onClick={() => signIn()}>Next Google</Button>
		</>
	);
};

export default SignUp;
