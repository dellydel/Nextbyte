import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { TextField, InputAdornment, Avatar, Tooltip } from "@mui/material";

const FormTextField = ({ label, name, type = "text", register, error }) => {
	return (
		<>
			<TextField
				type={type}
				label={label}
				placeholder={`Enter ${label}`}
				variant="outlined"
				fullWidth
				{...register(name)}
				InputLabelProps={
					name === "dateOfBirth"
						? {
								shrink: true,
						  }
						: undefined
				}
				InputProps={
					name === "password"
						? {
								endAdornment: (
									<InputAdornment position="end">
										<Tooltip
											title="Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
											placement="right"
											arrow
										>
											<HelpOutlineIcon />
										</Tooltip>
									</InputAdornment>
								),
						  }
						: undefined
				}
			/>
			{error && <span style={{ color: "red" }}>{error.message}</span>}
		</>
	);
};

export default FormTextField;
