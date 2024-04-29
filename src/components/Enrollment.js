import React from "react";
import { Paper, Box, Button } from "@mui/material";

const close = {
	display: "flex",
	justifyContent: "flex-end",
};

const Enrollment = ({ course, setMaterialsVisible }) => {
	return (
		<Paper sx={{ p: 3, m: 3 }}>
			<div key={course.id}>
				<h3>{course.name}</h3>
				<p>{course.description}</p>
			</div>
			<Box sx={close}>
				<Button
					variant="contained"
					aria-label="course materials"
					onClick={() => setMaterialsVisible(true)}
				>
					Course Materials
				</Button>
			</Box>
		</Paper>
	);
};

export default Enrollment;
