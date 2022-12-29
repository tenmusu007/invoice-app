import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { getDatabase, ref } from "firebase/database";
import { GetStaticProps } from "next";
import { auth, db } from "../lib/firebase";
import { useEffect, useState } from "react";
import { collection, doc, setDoc, getDocs, query } from "firebase/firestore";
import { Container, Grid } from "@mui/material";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default function Home(props: any) {
	useEffect(() => {
		const user = auth.currentUser;
		const fetch = async () => {
			const querySnapshot = await getDocs(collection(db, "invoice"));
			querySnapshot.forEach((doc) => {
				console.log(`${doc.id} => ${doc.data()}`);
				console.log(doc.data());
			});
		};
		fetch();
auth.onAuthStateChanged(user => { 
  // Check for user status
	console.log("user",user);
	
});
	}, []);
	const [value, setValue] = useState<Dayjs | null>(
		dayjs("2014-08-18T21:11:54")
	);
	const [start, setStart] = useState<Dayjs | null>();
	const [end, setEnd] = useState<Dayjs | null>();
	const handleChange = (newValue: Dayjs | null) => {
		setValue(newValue);
	};
	return (
		<>
			{/* <Container maxWidth='md' fixed> */}
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<Stack spacing={4}>
						<Grid container>
							<Grid xs={4}>
								<MobileDatePicker
									label='Date mobile'
									inputFormat='MM/DD/YYYY'
									value={value}
									onChange={handleChange}
									renderInput={(params) => <TextField {...params} />}
								/>
							</Grid>
							<Grid xs={4}>
								<TimePicker
									label='From'
									value={start}
									onChange={handleChange}
									renderInput={(params) => <TextField {...params} />}
								/>
							</Grid>
							<Grid xs={4}>
								<TimePicker
									label='End'
									value={end}
									onChange={handleChange}
									renderInput={(params) => <TextField {...params} />}
								/>
							</Grid>
						</Grid>
					</Stack>
				</LocalizationProvider>
			{/* </Container> */}
		</>
	);
}
