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

	return (
		<Box
			component={"div"}
			sx={{
				flexWrap: "wrap",
				display: "flex",
				gap: 5,
				mx: "180px",
				maxWidth: "1440px",
				justifyContent: "center",
			}}
		>
			{isPending && <span>Loading...</span>}
			{isError && <span>{error.message}</span>}
			{isSuccess && courses && (
				<>
					{courses.slice(0, count).map((course) => (
						<Box key={course.id} component={"div"} sx={{ width: 486 }}>
							<Course course={course} />
						</Box>
					))}
				</>
			)}
		</Box>
	);
};

export default Courses;
