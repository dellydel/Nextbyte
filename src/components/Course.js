import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, Typography, Box, Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { useRouter } from "next/navigation";
import CourseChips from "./CourseChips";

const cardStyle = {
	backgroundColor: "#f5f5f5",
	borderRadius: "15px",
};
const Course = ({ course }) => {
	const router = useRouter();

	const toCourseDetails = () => {
		router.push(`/course-details?id=${course.id}`);
	};

	return (
		<Card sx={cardStyle}>
			<CardMedia
				sx={{ height: 250 }}
				image={`images/courses/${course?.imageFileName}`}
				title="student"
			/>
			<CourseChips tech={course?.technologies} />
			<Typography variant="h6" sx={{ mx: 3, mb: 1 }}>
				<b>{course?.name}</b>
			</Typography>
			<Typography variant="body2" sx={{ mx: 3, mb: 2, height: 100 }}>
				{course?.description}
			</Typography>
			<Box component={"hr"} sx={{ mx: 3, mb: 3 }} />
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					mx: 3,
					mb: 3,
				}}
			>
				<Typography>
					<b>Pricing</b>
				</Typography>
				<Typography variant="h5">
					<b>{course?.price}</b>
				</Typography>
			</Box>
			<Box component={"hr"} sx={{ mx: 3, mb: 4 }} />

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					mx: 3,
					mb: 3,
				}}
			>
				<Box>
					<Typography>
						<b>{"Duration:  "}</b>
						{course?.duration}
					</Typography>
					<Typography>
						<b>{"Start Date: "}</b>1/1/1111
					</Typography>
				</Box>

				<Button variant="contained" onClick={toCourseDetails}>
					<ArrowForwardIcon />
				</Button>
			</Box>
		</Card>
	);
};
export default Course;
