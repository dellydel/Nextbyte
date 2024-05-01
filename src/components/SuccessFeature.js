import React from "react";
import { Grid } from "@mui/material";
import { SuccessCheckList } from "./SucceessCheckList";
import SuccessStoryFeature from "./SuccessStoryFeature";

const SuccessFeature = () => {
	return (
		<>
			{/* <Grid container> */}
			{/* <Grid item xs={12} md={6}> */}
			<SuccessStoryFeature />
			{/* </Grid>
			<Grid item xs={12} md={6}> */}
			<SuccessCheckList />
			{/* </Grid>
		</Grid> */}
		</>
	);
};

export default SuccessFeature;
