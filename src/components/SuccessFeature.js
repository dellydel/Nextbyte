import React from "react";
import { Grid } from "@mui/material";
import { SuccessCheckList } from "./SucceessCheckList";
import SuccessStoryFeature from "./SuccessStoryFeature";

const SuccessFeature = () => {
	return (
		<Grid container spacing={10} align="center">
			<Grid item xs={12} md={6} align="right">
				<SuccessStoryFeature />
			</Grid>
			<Grid item xs={12} md={6} align="left">
				<SuccessCheckList />
			</Grid>
		</Grid>
	);
};

export default SuccessFeature;
