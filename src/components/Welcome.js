import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography, Button } from "@mui/material";
import { welcome } from "../data/homeContent";
import { container, learnMore } from "../styles/text";
import CustomSubheader from "./CustomSubheader";

const Welcome = () => {
	return (
		<Box sx={container}>
			<CustomSubheader textArray={welcome} />
			<Box variant="div">
				<Box sx={learnMore}>
					Request more information{" "}
					<Button sx={{ ml: 1 }} variant="contained" size="small" title="go">
						<ArrowForwardIcon />
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Welcome;
