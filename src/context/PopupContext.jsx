import React, { createContext, useState } from "react";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
	const [snackbarState, setSnackbarState] = useState({
		isOpen: false,
		message: "",
		type: "success",
	});

	return (
		<PopupContext.Provider
			value={{
				snackbarState,
				setSnackbarState,
			}}
		>
			{children}
		</PopupContext.Provider>
	);
};
