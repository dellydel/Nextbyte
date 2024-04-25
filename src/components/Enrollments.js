import { useState, useEffect } from "react";
import { Paper, Box, Button } from "@mui/material";
import axios from "axios";
import { getCourseRegistrationsByEmail } from "../api/registrationAPI";

const close = {
	display: "flex",
	justifyContent: "flex-end",
};

const Enrollments = ({ user }) => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		const getRegisteredCourses = async (email) => {
			if (email === null) return [];
			const encodedEmail = encodeURIComponent(email);
			const registrationProductIds =
				await getCourseRegistrationsByEmail(encodedEmail);
			if (registrationProductIds?.length > 0) {
				const courses = await axios.post(
					`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/courses`,
					{
						courseIds: registrationProductIds,
					},
				);
				setCourses(courses.data);
			}
		};
		getRegisteredCourses(user);
	}, [user]);
	return (
		<div>
			{courses && courses.length === 0 && (
				<h3>You have not registered for any upcoming courses.</h3>
			)}
			{courses &&
				courses.length !== 0 &&
				courses.map((course) => (
					<Paper sx={{ p: 3, m: 3 }}>
						<div key={course.id}>
							<h3>{course.name}</h3>
							<p>{course.description}</p>
						</div>
						<Box sx={close}>
							<Button variant="contained" aria-label="course materials">
								Course Materials
							</Button>
						</Box>
					</Paper>
				))}
		</div>
	);
};

export default Enrollments;
