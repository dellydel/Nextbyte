import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Modal } from "@mui/material";
import { welcome } from "../data/homeContent";
import { modalStyle } from "../styles/modal";
import { container, learnMore } from "../styles/text";
import ContactForm from "./ContactForm";
import CustomSubheader from "./CustomSubheader";

const Welcome = () => {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Box sx={container}>
			<CustomSubheader textArray={welcome} />
			<Box variant="div">
				<Box sx={learnMore}>
					Request more information{" "}
					<Button
						sx={{ ml: 1 }}
						variant="contained"
						size="small"
						title="contact us"
						onClick={() => setOpen(true)}
					>
						<ArrowForwardIcon />
					</Button>
					<Modal open={open} onClose={handleClose}>
						<Box sx={modalStyle}>
							<ContactForm handleClose={handleClose} />
						</Box>
					</Modal>
				</Box>
			</Box>
		</Box>
	);
};

export default Welcome;
