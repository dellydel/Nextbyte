import React from "react";
import { Box } from "@mui/material";
import { successStory } from "../data/homeContent";
import { container } from "../styles/text";
import CustomSubheader from "./CustomSubheader";

const SuccessStoryFeature = () => {
	return (
		<Box sx={container}>
			<CustomSubheader textArray={successStory} />
			<Box
				width={1}
				height={"253px"}
				component={"img"}
				src={"/images/working_on_laptop.png"}
				alt={"working on laptop"}
				position={"relative"}
			/>
		</Box>
	);
};

export default SuccessStoryFeature;
