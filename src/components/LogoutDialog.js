import React, { useContext } from "react";
import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogContentText,
	DialogActions,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const LogoutDialog = ({ dialogOpen, setDialogOpen }) => {
	const { logout } = useContext(AuthContext);
	const router = useRouter();

	const handleLogout = () => {
		logout();
		setDialogOpen(false);
		router.push("/");
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
