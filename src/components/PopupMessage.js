import React, { useContext } from "react";
import { Snackbar, Alert } from "@mui/material";
import { PopupContext } from "../context/PopupContext";

const PopupMessage = () => {
	const { snackbarState, setSnackbarState } = useContext(PopupContext);

	return (
		<Snackbar
			open={snackbarState.isOpen}
			autoHideDuration={6000}
			onClose={() => setSnackbarState({ ...snackbarState, isOpen: false })}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
		>
			<Alert
				onClose={() => setSnackbarState({ ...snackbarState, isOpen: false })}
				severity={snackbarState.type}
				sx={{ width: "100%" }}
			>
				<>{snackbarState.message}</>
			</Alert>
		</Snackbar>
	);
};

export default PopupMessage;
