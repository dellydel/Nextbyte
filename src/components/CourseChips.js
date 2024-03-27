import React from "react";
import { Box, Chip } from "@mui/material";

const CourseChips = ({ tech }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "start",
				flexWrap: "wrap",
				listStyle: "none",
				columnGap: 1,
				rowGap: 1,
				my: 2,
				mx: 2,
			}}
		>
			{tech.slice(0, 4).map((tech) => {
				return (
					<Chip
						key={tech}
						sx={{ p: 1 }}
						label={tech}
						style={{ backgroundColor: "light-grey" }}
						size="small"
					/>
				);
			})}
			{tech.length > 4 && (
				<Chip
					key={tech}
					sx={{ p: 1 }}
					label={"..."}
					style={{ backgroundColor: "light-grey" }}
					size="small"
				/>
			)}
		</Box>
	);
};

export default CourseChips;
