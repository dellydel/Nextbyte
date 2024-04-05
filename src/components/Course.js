import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, Typography, Box, Button, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/navigation";
import {
	cardStyle,
	cardImageStyle,
	wrapper,
	courseTitle,
} from "../styles/course";
import CourseChips from "./CourseChips";

const Course = ({ course }) => {
	const router = useRouter();

	const toCourseDetails = () => {
		router.push(`/course-details?id=${course.id}`);
	};

	return (
		<Card sx={cardStyle}>
			<CardMedia
				sx={cardImageStyle}
				image={`images/courses/${course?.imageFileName}`}
				title="student"
			/>

			<Box component={"div"} sx={wrapper}>
				<CourseChips tech={course?.technologies} />
				<Typography variant="div" sx={courseTitle}>
					<b>{course?.name}</b>
				</Typography>
				<Typography variant="p">{course?.description}</Typography>
				<Divider sx={{ width: "100%" }} />
				<Box sx={{}}>
					<Typography component={"div"}>
						<b>Pricing</b>
					</Typography>
					<Typography variant="h5">
						<b>{course?.price}</b>
					</Typography>
				</Box>
				<Divider sx={{ width: "100%" }} />
				<Grid
					container
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Grid item xs={6}>
						<Typography>
							<b>{"Duration:  "}</b>
							{course?.duration}
						</Typography>
					</Grid>
					<Grid item xs={6} style={{ textAlign: "right" }}>
						<Button variant="contained" onClick={toCourseDetails}>
							<ArrowForwardIcon />
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Card>
	);
};

export default Course;
