import React from "react";
import { Box, Grid } from "@mui/material";
import { useCoursesData } from "../hooks/useCoursesData";
import Course from "./Course";

const gridContainer = {
	px: { xs: 0, md: 25 },
	width: { xs: 1, md: 1440 },
};
const Courses = ({ count }) => {
	const {
		data: courses,
		isPending,
		isError,
		isSuccess,
		error,
	} = useCoursesData();

	const coursesCount = count === "all" ? courses.length : count;
	return (
		<Grid container sx={gridContainer}>
			{isPending && <span>Loading...</span>}
			{isError && <span>{error.message}</span>}
			{isSuccess && courses && (
				<>
					{courses.slice(0, coursesCount).map((course) => (
						<Grid item xs={12} md={6} key={course.id}>
							<Box component={"div"}>
								<Course course={course} />
							</Box>
						</Grid>
					))}
				</>
			)}
		</Grid>
	);
};

export default Courses;
