import React from "react";
import { Box } from "@mui/material";
import { successStory } from "../data/homeContent";
import CustomSubheader from "./CustomSubheader";

const container = {
	alignItems: "flex-start",
	display: "flex",
	flexDirection: "column",
	position: "relative",
};

const SuccessStoryFeature = () => {
	return (
		<Box sx={container}>
			<CustomSubheader
				textArray={successStory}
				alignment={{ xs: "left", md: "right" }}
			/>
			<Box
				sx={{
					width: { xs: 1, md: "auto" },
					pl: { xs: 0, md: 2 },
					maxWidth: "100%",
					height: "auto",
					objectFit: "contain",
					display: "block",
				}}
				component={"img"}
				src={"/images/working_on_laptop.webp"}
				alt={"working on laptop"}
			/>
		</Box>
	);
};

export default SuccessStoryFeature;
