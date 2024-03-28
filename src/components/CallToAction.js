import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "next/navigation";
import { heroText, heroCallToAction } from "../data/homeContent";
import { scrollToFooter } from "../utils/uiUtils";
import TrustedAvatars from "./TrustedAvatars";

const wrapper = {
	mb: 4,
};

const actionButton = {
	py: 2,
	px: 4,
	borderRadius: 3,
	color: "white",
};

const CallToAction = () => {
	const random = Math.floor(Math.random() * heroCallToAction.length);
	const callToAction = heroCallToAction[random];

	return (
		<Box component={"div"} sx={{ mt: 20 }}>
			<Box component={"div"} sx={wrapper}>
				<Typography
					variant="h1"
					color="white"
					sx={{
						fontSize: "65px",
						mr: 3,
					}}
				>
					<b>{callToAction.text[0]}</b>
				</Typography>
				<Typography
					variant="h1"
					color="secondary"
					sx={{
						fontSize: "70px",
					}}
				>
					<b>{callToAction.text[1]}</b>
				</Typography>
			</Box>
			<Typography
				sx={{
					fontSize: "18px",
					color: "white",
					width: "100%",
					mb: 4,
				}}
			>
				{heroText}
			</Typography>
			<Box
				component={"div"}
				sx={{
					display: "flex",
					justifyContent: "center",
					gap: 2,
					mb: 16,
				}}
			>
				<Button
					sx={actionButton}
					variant="contained"
					onClick={scrollToFooter}
					size="large"
				>
					Enroll Today!
				</Button>
				<Button
					sx={actionButton}
					component={Link}
					variant="outlined"
					href="/courses"
				>
					Browse Courses
				</Button>
			</Box>
			<TrustedAvatars />
		</Box>
	);
};

export default CallToAction;
