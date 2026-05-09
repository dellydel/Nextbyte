import React from "react";
import { School } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

const close = {
	display: "flex",
	justifyContent: "flex-end",
};

const Enrollment = ({ course, setMaterialsVisible }) => {
	return (
		<Box sx={{ p: 3, mb: 2, display: "flex", alignItems: "center" }}>
			<School sx={{ fontSize: 40, color: "primary.main", flexShrink: 0, mr: 4 }} />
			<Box sx={{ flex: 1 }}>
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
			</Box>
		</Box>
	);
};

export default Enrollment;
