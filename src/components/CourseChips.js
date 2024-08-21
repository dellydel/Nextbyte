import React from "react";
import { Box, Chip } from "@mui/material";
import { chipsWrapper, chipStyle } from "../styles/course";

const CourseChips = ({ tech }) => {
	return (
		<Box component={"div"} sx={chipsWrapper}>
			{tech.slice(0, 4).map((tech) => {
				return <Chip key={tech} sx={chipStyle} label={tech} size="small" />;
			})}
			{tech.length > 4 && (
				<Chip key={tech} sx={chipStyle} label={"..."} size="small" />
			)}
		</Box>
	);
};

export default CourseChips;
