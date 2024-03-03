import React from "react";
import { Box } from "@mui/material";
import CallToAction from "./CallToAction";

const heroStyle = {
	backgroundImage: "url('images/laptop.png')",
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	height: "100vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
};

const MainHero = () => {
	return (
		<Box sx={heroStyle}>
			<Box sx={{ width: 780 }}>
				<CallToAction />
			</Box>
		</Box>
	);
};

export default MainHero;
