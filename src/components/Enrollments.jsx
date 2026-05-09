import { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { useCoursesByIdData } from "../queries/useCoursesData";
import { useRegistrationData } from "../queries/useRegistrationData";
import CourseMaterals from "./CourseMaterials";
import Enrollment from "./Enrollment";

const Enrollments = () => {
	const [materialsVisible, setMaterialsVisible] = useState(false);
	const { user } = useAuth();

	const { data: registrations = [] } = useRegistrationData(user?.email);
	const courseIds = registrations.map((registration) => registration.course_id);
	const { data: courses = null, isLoading: isCoursesLoading } =
		useCoursesByIdData({ courseIds });

	return (
		<Box sx={{ p: 2 }}>
			{isCoursesLoading && <Box sx={{ p: 3 }}>Loading...</Box>}
			{!isCoursesLoading && courses && courses.length === 0 && (
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
				<Box sx={{ p: 3 }}>
					<Button
						onClick={() => setMaterialsVisible(false)}
						variant="contained"
						color="inherit"
						aria-label="back"
					>
						<ArrowBack />
						&nbsp; Courses
					</Button>
					<CourseMaterals setMaterialsVisible={setMaterialsVisible} />
				</Box>
			)}
		</Box>
	);
};

export default Enrollments;
