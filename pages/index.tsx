import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import { ApiInstance } from "../helper/ApiInstance";

export default function Home(props: any) {
	//login user data 
	const { data: session } = useSession();

	useEffect(() => {
		const fetch = async () => {
			// this is test api
			const res = await ApiInstance({url:"/api/test",method:"get"})
			console.log("res",res);
		}
		fetch()
	},[])
	const [value, setValue] = useState<Dayjs | null>(dayjs());
	const [start, setStart] = useState<Dayjs | null>();
	const [end, setEnd] = useState<Dayjs | null>();
	const handleChange = (newValue: Dayjs | null) => {
		setValue(newValue);
	};
	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Stack spacing={4}>
					<Grid container>
						<Grid item xs={4}>
							<MobileDatePicker
								label='Date mobile'
								inputFormat='MM/DD/YYYY'
								value={value}
								onChange={handleChange}
								renderInput={(params) => <TextField {...params} />}
							/>
						</Grid>
						<Grid item xs={4}>
							<TimePicker
								label='From'
								value={start}
								onChange={handleChange}
								renderInput={(params) => <TextField {...params} />}
							/>
						</Grid>
						<Grid item xs={4}>
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
		</>
	);
}


