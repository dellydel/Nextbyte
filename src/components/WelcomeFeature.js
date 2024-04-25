import React from "react";
import { Box } from "@mui/material";
import Welcome from "./Welcome";

const WelcomeFeature = () => {
	return (
		<>
			<Box
				width={"462px"}
				height={"472px"}
				component={"img"}
				src={"/images/sitting_with_laptop.png"}
				alt={"woman sitting with laptop"}
			/>
			<Welcome />
		</>
	);
};

export default WelcomeFeature;
