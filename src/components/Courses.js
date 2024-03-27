import React from "react";
import { Box } from "@mui/material";
import Course from "./Course";

const getCourses = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/courses`,
	);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

const Courses = async () => {
	const data = await getCourses();
	return (
		<Box
			component={"div"}
			sx={{
				display: "flex",
				flexWrap: "wrap",
				columnGap: 3,
				rowGap: 3,
				width: 996,
				mx: "auto",
				//justifyContent: "center",
			}}
		>
			{data.map((course) => (
				<Box key={course.id} component={"div"} sx={{ width: 486 }}>
					<Course course={course} />
				</Box>
			))}
		</Box>
	);
};

export default Courses;
