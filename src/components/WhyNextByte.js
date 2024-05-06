import React from "react";
import { Box } from "@mui/material";
import { headerText, bodyText } from "../data/why";
import ChooseUsCards from "./ChooseUsCards";
import HeaderAndText from "./HeaderAndText";

const WhyNextByte = () => {
	return (
		<>
			<HeaderAndText headerContent={headerText} bodyContent={bodyText} />
			<Box sx={{ mx: { xs: 4, md: 25 }, mb: { xs: 5, md: 15 } }}>
				<ChooseUsCards />
			</Box>
		</>
	);
};

export default WhyNextByte;
