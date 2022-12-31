import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { useAuthContext } from "../../Context/AuthContext";


const Header = () => {
	const authContext = useContext(useAuthContext);

  const logOut = () => {
    const auth = getAuth();
		signOut(auth)
      .then(() => {
        console.log("signup");
        
			})
			.catch((error) => {
				// An error happened.
        console.log(error);
        
			});
  }
  return (
    <div>
      <Button onClick={logOut}>Google Logout</Button>
    </div>
  );
}

export default Header;