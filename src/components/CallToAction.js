import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "next/navigation";
import { heroText, heroCallToAction } from "../data/homeContent";
import { scrollToFooter } from "../utils/uiUtils";
import TrustedAvatars from "./TrustedAvatars";

const actionButton = {
	py: 2,
	px: 4,
	borderRadius: 3,
	color: "white",
	textTransform: "none",
};

const CallToAction = ({ coursesRef }) => {
	const random = Math.floor(Math.random() * heroCallToAction.length);
	const callToAction = heroCallToAction[random];

	return (
		<Box component={"div"} sx={{ mt: 20 }}>
			<Box component={"div"} sx={{ mb: 4 }}>
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
					onClick={() =>
						coursesRef.current.scrollIntoView({
							block: "center",
							behavior: "smooth",
						})
					}
					variant="outlined"
				>
					Browse Courses
				</Button>
			</Box>
			<TrustedAvatars section={"callToAction"} />
		</Box>
	);
};

export default CallToAction;
