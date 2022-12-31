import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { auth } from "../lib/firebase";
import { Auth, UserInfo } from "../types/authContext";
import { Children } from "../types/children";
import { useSession, signIn, signOut } from "next-auth/react";

export const useAuthContext = createContext<Auth | null>(null);
const AuthContext = ({ children }: Children) => {
  const { data: session } = useSession();

	const router = useRouter();
	const [currentInfo, setCurrentInfo] = useState<UserInfo>();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if(session)return router.push("/")
			if (!user) return router.push("/login");
			setCurrentInfo(user.providerData[0]);
		});
	}, []);

	return (
		<useAuthContext.Provider
			value={{ currentInfo, setCurrentInfo}}
		>
			<Layout>{children}</Layout>
		</useAuthContext.Provider>
	);
};

export default AuthContext;
