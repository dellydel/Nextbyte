import React from "react";
import { useNavigate } from "react-router";
import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogContentText,
	DialogActions,
} from "@mui/material";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const LogoutDialog = ({ dialogOpen, setDialogOpen }) => {
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		setDialogOpen(false);
		navigate("/");
	};

	return (
		<Dialog
			open={dialogOpen}
			TransitionComponent={Transition}
			onClose={() => setDialogOpen(false)}
		>
			<DialogTitle>{"Logout"}</DialogTitle>
			<DialogContent>
				<DialogContentText>Would you like to log out?</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setDialogOpen(false)}>Cancel</Button>
				<Button onClick={handleLogout}>Logout</Button>
			</DialogActions>
		</Dialog>
	);
};

export default LogoutDialog;
