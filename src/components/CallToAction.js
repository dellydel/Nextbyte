import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "next/navigation";
import { heroText, heroCallToAction } from "../data/homeContent";
import { scrollToFooter } from "../utils/uiUtils";
import TrustedAvatars from "./TrustedAvatars";

const CallToAction = () => {
	const random = Math.floor(Math.random() * heroCallToAction.length);
	const callToAction = heroCallToAction[random];

	return (
		<>
			<Typography
				variant="h1"
				color="white"
				sx={{
					display: "inline",
					fontSize: "72px",
					mr: 3,
				}}
			>
				<b>{callToAction.text[0]}</b>
			</Typography>
			<Typography
				variant="h1"
				color="secondary"
				sx={{
					display: "inline",
					fontSize: "72px",
				}}
			>
				<b>{callToAction.text[1]}</b>
			</Typography>

			<Typography
				sx={{
					fontSize: 18,
					mt: 5,
					color: "white",
					width: "100%",
				}}
			>
				{heroText}
			</Typography>
			<Box
				sx={{
					mt: 6,
					display: "flex",
					justifyContent: "center",
					px: 20,
				}}
			>
				<Button
					sx={{
						m: 1,
						mr: 1,
						p: 2,
						color: "white",
						width: "75%",
					}}
					variant="contained"
					size="medium"
					onClick={scrollToFooter}
				>
					Enroll Today!
				</Button>
				<Button
					component={Link}
					variant="outlined"
					size="medium"
					href="/courses"
					sx={{
						my: 1,
						ml: 1,
						p: 2,
						color: "white",
						width: "75%",
					}}
				>
					Browse Courses
				</Button>
			</Box>
			<TrustedAvatars />
		</>
	);
};

export default CallToAction;
