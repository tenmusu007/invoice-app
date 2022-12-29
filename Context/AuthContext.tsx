import {
	createContext,
	useState,
	useEffect,
	useContext,
	ReactNode,
} from "react";
import Layout from "../components/Layout";
import { auth } from "../lib/firebase";
import { Auth, Children } from "../types/auth";
export const useAuthContext = createContext<Auth | null>(null);
const AuthContext = ({ children }: Children) => {
	const [currentInfo, setCurrentInfo] = useState<any>("");
	const user = auth.currentUser;
	console.log(user);

	return (
		<useAuthContext.Provider value={currentInfo}>
			<Layout>{children}</Layout>
		</useAuthContext.Provider>
	);
};

export default AuthContext;
