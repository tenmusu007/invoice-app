import InvoiceCard from "@components/Molecules/InvoiceCard";
import { Grid } from "@mui/material";
import dummyData from "@components/Molecules/InvoiceCard/dummy.json";
const mylist = () => {
	const { list } = dummyData.data;
	return (
		<>
			<Grid container spacing={4}>
				{list.map((item: any) => {
					return (
							<Grid item xs={3} key={item.id}>
								<InvoiceCard list={item} key={item.id} />
							</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default mylist;
