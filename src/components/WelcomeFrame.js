import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography, Button } from "@mui/material";

const frame = {
	alignItems: "flex-start",
	display: "flex",
	flexDirection: "column",
	gap: "32px",
	position: "relative",
	width: "462px",
};

const welcome = {
	alignSelf: "stretch",
	color: "transparent",
	fontSize: "48px",
	fontWeight: "600",
	letterSpacing: "-1.92px",
	lineHeight: "normal",
	mt: "-1px",
	position: "relative",
};

const base = {
	color: "#2b2d42",
	letterSpacing: "-0.92px",
};

const highlight = {
	color: "#58bec6",
	letterSpacing: "-0.92px",
};

const body = {
	color: "#2b2d429c",
	fontSize: "16px",
	fontWeight: 400,
	letterSpacing: "-0.32px",
	lineHeight: "22.4px",
	position: "relative",
	width: "344px",
};

const learnMore = {
	color: "#2b2d42",
	fontSize: "18px",
	fontWeight: 500,
	letterSpacing: 0,
	lineHeight: "normal",
	position: "relative",
	whiteSpace: "nowrap",
	width: "fit-content",
};

export const WelcomeFrame = () => {
	return (
		<Box sx={frame}>
			<Typography variant="p" sx={welcome}>
				<Typography variant="span" sx={base}>
					Welcome to the beginning of your{" "}
				</Typography>
				<Typography variant="span" sx={highlight}>
					web development
				</Typography>
				<Typography variant="span" sx={base}>
					{" "}
					journey!
				</Typography>
			</Typography>
			<Typography variant="p" sx={body}>
				Whether you're a complete novice or have some experience, our courses
				are fully designed to empower beginners like you. We would love to see
				you in one of our upcomming courses!
			</Typography>
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
