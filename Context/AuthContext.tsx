import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Auth } from "types/authContext";
import { Children } from "types/children";
import { useSession } from "next-auth/react";

export const useAuthContext = createContext<Auth | null>(null);
const AuthContext = ({ children }: Children) => {
	const { data: session } = useSession();

	const router = useRouter();
	useEffect(() => {
	}, []);

	return (
		<useAuthContext.Provider value={{}}>
			<Layout>{children}</Layout>
		</useAuthContext.Provider>
	);
};

export default AuthContext;
