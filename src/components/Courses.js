import React from "react";
import { Box } from "@mui/material";
import { useCoursesData } from "../hooks/useCoursesData";
import Course from "./Course";

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
		<Box
			component={"div"}
			sx={{
				flexWrap: "wrap",
				display: "flex",
				width: "1015px",
				justifyContent: "flex-start",
				alignItems: "center",
				mx: "auto",
				mt: 0,
				mb: 0,
			}}
		>
			{isPending && <span>Loading...</span>}
			{isError && <span>{error.message}</span>}
			{isSuccess && courses && (
				<>
					{courses.slice(0, coursesCount).map((course) => (
						<Box
							key={course.id}
							component={"div"}
							sx={{ width: 486, margin: "10px" }}
						>
							<Course course={course} />
						</Box>
					))}
				</>
			)}
		</Box>
	);
};

export default Courses;
