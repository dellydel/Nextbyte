import React from "react";
import { Box, Chip } from "@mui/material";
import { chipsWrapper } from "../styles/course";

const CourseChips = ({ tech }) => {
	return (
		<Box component={"div"} sx={chipsWrapper}>
			{tech.slice(0, 4).map((tech) => {
				return (
					<Chip
						key={tech}
						sx={{ p: 1 }}
						label={tech}
						style={{ backgroundColor: "#2b2d423b" }}
						size="small"
					/>
				);
			})}
			{tech.length > 4 && (
				<Chip
					key={tech}
					sx={{ p: 1 }}
					label={"..."}
					style={{ backgroundColor: "#2b2d423b" }}
					size="small"
				/>
			)}
		</Box>
	);
};

export default CourseChips;
