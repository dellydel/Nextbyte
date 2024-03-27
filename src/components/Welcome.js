import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography, Button } from "@mui/material";
import { welcome } from "../data/homeContent";
import { container, learnMore } from "../styles/features";
import CustomSubheader from "./CustomSubheader";

const Welcome = () => {
	return (
		<Box sx={container}>
			<CustomSubheader textArray={welcome} />
			<Box variant="div">
				<Box sx={learnMore}>
					Learn more about us{" "}
					<Button sx={{ ml: 1 }} variant="contained">
						<ArrowForwardIcon />
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Welcome;
