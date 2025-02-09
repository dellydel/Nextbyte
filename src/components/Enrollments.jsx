import { useState, useEffect } from "react";
import { ArrowBack } from "@mui/icons-material";
import { Paper, Box, Button } from "@mui/material";
import { getCoursesByRegistrationIds } from "../api/courses";
import { getCourseRegistrationsByEmail } from "../api/registration";
import { useAuth } from "../hooks/useAuth";
import CourseMaterals from "./CourseMaterials";
import Enrollment from "./Enrollment";

const Enrollments = () => {
	const [courses, setCourses] = useState(null);
	const [materialsVisible, setMaterialsVisible] = useState(false);
	const { user } = useAuth();

	useEffect(() => {
		const getRegisteredCourses = async (email) => {
			if (email === null) return [];
			const encodedEmail = encodeURIComponent(email);
			const registrationProductIds =
				await getCourseRegistrationsByEmail(encodedEmail);
			if (registrationProductIds?.length > 0) {
				const courses = await getCoursesByRegistrationIds(
					registrationProductIds,
				);
				setCourses(courses);
			}
		};
		getRegisteredCourses(user);
	}, [user]);

	return (
		<div>
			{courses && courses.length === 0 && (
				<h3>You have not registered for any upcoming courses.</h3>
			)}
			{!materialsVisible &&
				courses &&
				courses.length !== 0 &&
				courses.map((course) => (
					<Enrollment
						setMaterialsVisible={setMaterialsVisible}
						course={course}
						key={course.id}
					/>
				))}
			{materialsVisible && (
				<Paper sx={{ p: 3, m: 3 }}>
					<Box>
						<Button
							onClick={() => setMaterialsVisible(false)}
							variant="contained"
							color="inherit"
							aria-label="back"
						>
							<ArrowBack />
							&nbsp; Courses
						</Button>
					</Box>
					<CourseMaterals setMaterialsVisible={setMaterialsVisible} />
				</Paper>
			)}
		</div>
	);
};

export default Enrollments;
