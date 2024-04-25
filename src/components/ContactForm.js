import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
	Button,
	TextField,
	Typography,
	Card,
	CardContent,
	IconButton,
	Box,
} from "@mui/material";
import { PopupContext } from "../context/PopupContext";

const wrapper = {
	padding: 2,
	borderRadius: 3,
	boxShadow: 3,
	height: 500,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	"& .MuiInputBase-root": {
		backgroundColor: "white",
	},
};

export const close = {
	display: "flex",
	justifyContent: "flex-end",
	alignItems: "center",
	flexDirection: "row",
};

const defaultState = {
	name: "",
	email: "",
	message: "",
};

const ContactForm = ({ handleClose }) => {
	const [formData, setFormData] = useState(defaultState);
	const { snackbarState, setSnackbarState } = useContext(PopupContext);

	const reset = () => {
		setFormData(defaultState);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/contact`, formData)
			.then((res) => {
				reset();
				setSnackbarState({
					type: "success",
					message: res.data,
					isOpen: true,
				});
			})
			.catch((err) => {
				setSnackbarState({
					type: "error",
					message: err.message,
					isOpen: true,
				});
			});
	};

	return (
		<>
			<PopupMessage
				snackbarState={snackbarState}
				setSnackbarState={setSnackbarState}
			/>
			<Card sx={wrapper}>
				<CardContent>
					<Box sx={close}>
						<IconButton
							color="inherit"
							aria-label="close"
							onClick={handleClose}
						>
							<CloseIcon />
						</IconButton>
					</Box>
					<Typography variant="h6">Request More Information</Typography>
					<form onSubmit={handleSubmit}>
						<TextField
							fullWidth
							margin="normal"
							label="Name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
						<TextField
							fullWidth
							margin="normal"
							label="Email"
							name="email"
							type="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<TextField
							fullWidth
							margin="normal"
							label="Message"
							name="message"
							multiline
							rows={4}
							value={formData.message}
							onChange={handleChange}
							required
						/>
						<Button type="submit" variant="contained" color="primary">
							Submit
						</Button>
					</form>
				</CardContent>
			</Card>
		</>
	);
};

export default ContactForm;
