import React, { useState } from "react";
import { Box, Button, Typography, Modal, IconButton } from "@mui/material";
import { heroText, heroCallToAction } from "../data/homeContent";
import { modalStyle } from "../styles/navigationBar";
import Register from "./Register";
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
	const [showRegister, setShowRegister] = useState(false);

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
					onClick={() => setShowRegister(true)}
					size="large"
				>
					Register Today!
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
			<Modal
				open={showRegister}
				closeAfterTransition
				onClose={() => setShowRegister(false)}
			>
				<Box sx={modalStyle}>
					<Register setShowRegister={setShowRegister} />
				</Box>
			</Modal>
		</Box>
	);
};

export default CallToAction;
