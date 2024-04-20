import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, Typography, Box, Button, Grid, Modal } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import {
	cardStyle,
	cardImageStyle,
	wrapper,
	courseTitle,
} from "../styles/course";
import { modalStyle } from "../styles/navigationBar";
import Checkout from "./Checkout";
import CourseChips from "./CourseChips";
import CourseDetails from "./CourseDetails";

const Course = ({ course }) => {
	const [showDetails, setShowDetails] = useState(false);
	const [showCheckout, setShowCheckout] = useState(false);
	return (
		<>
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
					<Typography variant="p" sx={{ height: 80 }}>
						{course?.description}
					</Typography>
					<Divider sx={{ width: "100%" }} />
					<Box>
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
							<Button variant="contained" onClick={() => setShowDetails(true)}>
								<ArrowForwardIcon title="show details" />
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Card>
			<Modal open={showDetails} onClose={() => setShowDetails(false)}>
				<Box sx={modalStyle}>
					<CourseDetails
						courseId={course.id}
						setShowDetails={setShowDetails}
						setShowCheckout={setShowCheckout}
					/>
				</Box>
			</Modal>
			{/* <Modal open={showCheckout} onClose={() => setShowCheckout(false)}>
				<Box sx={modalStyle}>
					<Checkout course={course} />
				</Box>
			</Modal> */}
		</>
	);
};

export default Course;
