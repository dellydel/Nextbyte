import React from "react";
import { CalendarMonth, Home, PermContactCalendar } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";

const row = { display: "flex", alignItems: "flex-start", mb: 3 };
const iconStyle = { mr: 4, flexShrink: 0 };

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
			<Box sx={row}>
				<PermContactCalendar color="primary" sx={iconStyle} />
				<Box>
					<div>{student.phoneNumber}</div>
					<div>{student.email}</div>
				</Box>
			</Box>
			<Box sx={row}>
				<CalendarMonth color="primary" sx={iconStyle} />
				<div>DOB: {new Date(student.dateOfBirth).toLocaleDateString("en-US")}</div>
			</Box>
			<Box sx={row}>
				<Home color="primary" sx={iconStyle} />
				<Box>
					<div>{student.street}</div>
					<div>{student.city}</div>
					<div>{student.country}</div>
					<div>{student.zip}</div>
				</Box>
			</Box>
		</Box>
	);
};

export default UserInfo;
