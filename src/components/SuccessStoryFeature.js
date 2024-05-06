import React from "react";
import { Box } from "@mui/material";
import { successStory } from "../data/homeContent";
import CustomSubheader from "./CustomSubheader";

export const container = {
	alignItems: "flex-start",
	display: "flex",
	flexDirection: "column",
	gap: 4,
	position: "relative",
	width: { xs: 1, md: 486 },
	mb: { xs: 1, md: 0 },
};

const SuccessStoryFeature = () => {
	return (
		<Box sx={container}>
			<CustomSubheader
				textArray={successStory}
				alignment={{ xs: "left", md: "right" }}
			/>
			<Box
				width={{ xs: 1, md: "462px" }}
				height={{ xs: "215px", md: "253px" }}
				component={"img"}
				src={"/images/working_on_laptop.webp"}
				alt={"working on laptop"}
				position={"relative"}
				alignSelf={"flex-end"}
			/>
		</Box>
	);
};

export default SuccessStoryFeature;
