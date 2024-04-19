import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import { enrollToday } from "../data/homeContent";
import {
	subHeader,
	subHeaderText,
	wrapper,
	header,
	headerText,
	headerTextAltColor,
} from "../styles/enrollToday";
import { modalStyle } from "../styles/navigationBar";
import Register from "./Register";
import TrustedAvatars from "./TrustedAvatars";

const actionButton = {
	mt: 1,
	py: 2,
	px: 4,
	borderRadius: 3,
	color: "white",
	textTransform: "none",
};

const EnrollToday = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showRegister, setShowRegister] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === enrollToday.length - 1 ? 0 : prevIndex + 1,
			);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Box sx={wrapper}>
			<Box sx={subHeader}>
				<Typography variant="p" sx={subHeaderText}>
					LAUNCH YOUR CAREER IN TECH
				</Typography>
			</Box>
			<Box component={"p"} sx={header}>
				<Typography variant="span" sx={headerText}>
					Enroll today for expert{" "}
				</Typography>
				<Typography variant="span" sx={headerTextAltColor}>
					{enrollToday[currentIndex].text}
				</Typography>
				<Typography variant="span" sx={headerText}>
					{" "}
					training
				</Typography>
			</Box>
			<TrustedAvatars section={"enroll"} />
			<Button
				sx={actionButton}
				variant="contained"
				size="large"
				onClick={() => setShowRegister(true)}
			>
				Get Started
			</Button>
			<Modal open={showRegister} onClose={() => setShowRegister(false)}>
				<Box sx={modalStyle}>
					<Register setShowRegister={setShowRegister} />
				</Box>
			</Modal>
		</Box>
	);
};

export default EnrollToday;
