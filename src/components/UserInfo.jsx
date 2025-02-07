import React from "react";
import { Box, Link, Typography } from "@mui/material";

const UserInfo = ({ student, setEditMode }) => {
	return (
		<Box sx={{ p: 3 }}>
			<Typography variant="h5">
				{student.firstName} {student.lastName}
			</Typography>
			<Box sx={{ mb: 3 }}>
				<Link component={"button"} onClick={() => setEditMode(true)}>
					edit
				</Link>
			</Box>
			<div>{student.phoneNumber}</div>
			<div>{student.email}</div>
			<div>
				DOB: {new Date(student.dateOfBirth).toLocaleDateString("en-US")}
			</div>
			<br />
			<div>{student.street}</div>
			<div>{student.city}</div>
			<div>{student.country}</div>
			<div>{student.zip}</div>
		</Box>
	);
};

export default UserInfo;
