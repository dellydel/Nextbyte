import React from "react";
import { Box, Typography } from "@mui/material";
import { header, headerText, body } from "../styles/text";
import ChooseUsCards from "./ChooseUsCards";

const wrapper = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	mx: "200px",
	mt: "120px",
	mb: 5,
	maxWidth: 1440,
};

const container = {
	mt: "100px",
	mb: "200px",
};

const WhyNextByte = () => {
	return (
		<Box sx={container}>
			<Box sx={wrapper}>
				<Box variant={"div"} sx={{ ...header, width: 0.5 }}>
					<Typography variant="span" sx={headerText}>
						Why Choose Us?
					</Typography>
				</Box>
				<Typography variant="span" sx={{ ...body, width: 0.5, ml: "115px" }}>
					Discover the difference with our customized training solutions,
					dedicated support, and proven results.
				</Typography>
			</Box>
			<ChooseUsCards />
		</Box>
	);
};

export default WhyNextByte;
