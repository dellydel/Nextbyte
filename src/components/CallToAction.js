import React, { useState } from "react";
import { Box, Button, Typography, Modal, IconButton } from "@mui/material";
import { useMediaQuery } from "@mui/material/";
import { heroText, heroCallToAction } from "../data/homeContent";
import { modalStyle } from "../styles/modal";
import Register from "./Register";
import TrustedAvatars from "./TrustedAvatars";

const actionButton = {
	py: { xs: 1, md: 2 },
	px: { xs: 2, md: 4 },
	borderRadius: 3,
	color: "white",
	textTransform: "none",
};

const CallToAction = ({ coursesRef }) => {
	const random = Math.floor(Math.random() * heroCallToAction.length);
	const callToAction = heroCallToAction[random];
	const [showRegister, setShowRegister] = useState(false);
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

	return (
		<Box component={"div"} sx={{ mt: { xs: 8, md: 20 } }}>
			<Box component={"div"} sx={{ mb: 4 }}>
				<Typography
					variant="h1"
					color="white"
					sx={{
						fontSize: { xs: "40px", md: "70px" },
					}}
				>
					<b>{callToAction.text[0]}</b>
				</Typography>
				<Typography
					variant="h1"
					color="secondary"
					sx={{
						fontSize: { xs: "40px", md: "70px" },
					}}
				>
					<b>{callToAction.text[1]}</b>
				</Typography>
			</Box>
			<Typography
				sx={{
					fontSize: { xs: "15px", md: "18px" },
					color: "white",
					width: 1,
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
					mb: { xs: 7, md: 12 },
				}}
			>
				<Button
					sx={actionButton}
					variant="contained"
					onClick={() => setShowRegister(true)}
					size={isMobile ? "small" : "large"}
				>
					Register Today!
				</Button>
				<Button
					sx={actionButton}
					variant="outlined"
					onClick={() =>
						coursesRef.current.scrollIntoView({
							block: "center",
							behavior: "smooth",
						})
					}
					size={isMobile ? "small" : "large"}
				>
					Browse Courses
				</Button>
			</Box>
			{!isMobile && <TrustedAvatars section={"callToAction"} />}
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
