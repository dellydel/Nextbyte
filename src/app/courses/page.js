import { Box } from "@mui/material";
import CoursesComponent from "../../components/Courses";

const pageLayout = {
	backgroundImage: "url('images/coursesBg.png')",
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	width: "100%",
	pt: 35,
	pb: 20,
};

const Courses = async () => {
	return (
		<Box sx={pageLayout}>
			<CoursesComponent count={3} />
		</Box>
	);
};

export default Courses;
