import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { signOut, useSession } from "next-auth/react";
import Text from "@components/atoms/Text";
import { title } from "process";
import LinkTag from "@components/atoms/Link";
const Header = () => {
	const authContext = useContext(useAuthContext);
	const { data: session } = useSession();

	const nextAuthLogout = () => {
		signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/login` });
	};
	return (
		<>
			<Grid container sx={{ width: "100%", marginX: "auto", marginY: 2 }}>
				<Grid container item sm={3} sx={{ justifyContent: "space-around" }}>
					<Text variant={"h5"} text={"title"} />
				</Grid>
				<Grid container item sm={5} sx={{ justifyContent: "space-around" }}>
					<Grid item sm={3} style={{ textAlign: "center" }}>
						<Button> Create</Button>
					</Grid>
					<Grid item sm={3}>
						<LinkTag path={"/mylist"}>
							<Text
								variant={"h6"}
								text={"MyList"}
								style={{ textAlign: "center" }}
							/>
						</LinkTag>
					</Grid>
					<Grid item sm={3}>
						<LinkTag path={"/setting"}>
							<Text
								variant={"h6"}
								text={"Setting"}
								style={{ textAlign: "center" }}
							/>
						</LinkTag>
					</Grid>
				</Grid>
				<Grid container item sm={4} alignItems={"center"}>
					{session?.user?.name ? (
						<>
							<Grid item sm={6}>
								<Text
									label={"body1"}
									text={session?.user?.name}
									style={{ textAlign: "center" }}
								/>
							</Grid>
							<Grid item sm={6} style={{ textAlign: "center" }}>
								<Button onClick={nextAuthLogout}>Logout</Button>
							</Grid>
						</>
					) : (
						<>
							<Grid item sm={4}>
								<Button> login</Button>
							</Grid>
							<Grid item sm={4}>
								<Button> signup</Button>
							</Grid>
						</>
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default Header;
