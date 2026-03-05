import { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import { Paper, Box, Button } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { useCoursesByIdData } from "../queries/useCoursesData";
import { useRegistrationData } from "../queries/useRegistrationData";
import CourseMaterals from "./CourseMaterials";
import Enrollment from "./Enrollment";

const Enrollments = () => {
	const [materialsVisible, setMaterialsVisible] = useState(false);
	const { user } = useAuth();

	const { data: registrations = [] } = useRegistrationData(user?.email);
	const { data: courses = [] } = useCoursesByIdData(
		registrations.map((registration) => registration.course_id),
	);

	return (
		<Box sx={{ p: 3 }}>
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
		</Box>
	);
};

export default Enrollments;
