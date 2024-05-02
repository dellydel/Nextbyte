import React from "react";
import { Box, Grid } from "@mui/material";
import Welcome from "./Welcome";

const WelcomeFeature = () => {
	return (
		<Grid container columnSpacing={10} align="center">
			<Grid item xs={12} md={6} align="right">
				<Box
					sx={{
						width: { xs: 1, md: "462px" },
						height: { xs: "350px", md: "472px" },
					}}
					component={"img"}
					src={"/images/sitting_with_laptop.png"}
					alt={"woman sitting with laptop"}
				/>
			</Grid>
			<Grid item sx={{ pt: { xs: 5, md: 0 } }} xs={12} md={6} align="left">
				<Welcome />
			</Grid>
		</Grid>
	);
};

export default WelcomeFeature;
