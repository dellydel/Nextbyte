import { useEffect, useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {
	Typography,
	Grid,
	Button,
	Card,
	CardContent,
	Box,
	IconButton,
} from "@mui/material";
import { api } from "../api/configs";
import { PopupContext } from "../context/PopupContext";
import { useAuth } from "../hooks/useAuth";
import { useCourseByIdData } from "../queries/useCoursesData";
import { useCoursesByIdData } from "../queries/useCoursesData";
import { useRegistrationData } from "../queries/useRegistrationData";
import { headerText, header } from "../styles/text";
import CourseMaterials from "./CourseMaterials";
import PopupMessage from "./PopupMessage";

const wrapper = {
	padding: 3,
	pt: 0,
	borderRadius: 3,
	boxShadow: 3,
	height: 800,
	display: "flex",
	justifyContent: "center",
	alignItems: "start",
	overflowY: "auto",
};

const close = {
	display: "flex",
	justifyContent: "flex-end",
	alignItems: "center",
	flexDirection: "row",
};

const CourseDetails = ({ courseId, setShowDetails, setShowCheckout }) => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const [registered, setRegistered] = useState(false);
	const { snackbarState, setSnackbarState } = useContext(PopupContext);

	if (!courseId || courseId === "undefined") {
		useEffect(() => {
			navigate("/error?type=not_found");
		}, []);
		return null;
	}

	const {
		data: course,
		isPending: isCoursePending,
		isError: isCourseError,
		isSuccess: isCourseSuccess,
		error: courseError,
	} = useCourseByIdData(courseId);

	const { data: registrations = [] } = useRegistrationData(user?.email);
	const { data: registeredCourses = [] } = useCoursesByIdData({
		courseIds: registrations.map((registration) => registration.course_id),
	});

	useEffect(() => {
		if (registeredCourses.some((c) => c.id === courseId)) {
			setRegistered(true);
		}
	}, [registeredCourses, courseId]);

	const toCheckout = () => {
		setShowCheckout(true);
	};

	const completeRegistration = () => {
		api
			.post("/registration", {
				email: user.email,
				course_name: course.name,
				course_id: course.id,
				price: course.price,
			})
			.then((res) => {
				setSnackbarState({
					type: "success",
					message: res.data,
					isOpen: true,
				});
				setShowDetails(false);
			})
			.catch((err) => {
				setSnackbarState({
					type: "error",
					message: err.response?.data || err.message || "An error occurred",
					isOpen: true,
				});
			});
	};

	return (
		<>
			<PopupMessage
				snackbarState={snackbarState}
				setSnackbarState={setSnackbarState}
			/>
			<Card sx={wrapper}>
				<CardContent
					sx={{
						width: "850px",
					}}
				>
					{isCoursePending && <span>Loading...</span>}
					{isCourseError && <span>{courseError.message}</span>}
					{isCourseSuccess && course && (
						<>
							<Box
								sx={{
									backgroundImage: course?.imageFileName
										? `linear-gradient(rgba(255, 255, 255, .3), rgba(255, 255, 255, 1)), url(images/courses/${course.imageFileName})`
										: "none",
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
									mx: -5,
									mt: -2,
									px: 3,
									pt: 0,
									pb: 2,
								}}
							>
								<Box sx={close}>
									<IconButton
										color="inherit"
										aria-label="close"
										onClick={() => setShowDetails(false)}
									>
										<CloseIcon />
									</IconButton>
								</Box>
								<Box variant={"div"} sx={{ ...header, py: 2, height: 150 }}>
									<Typography variant="span" sx={headerText}>
										{course.name}
									</Typography>
								</Box>
							</Box>
							<Grid
								container
								spacing={2}
								sx={{
									textAlign: "left",
									color: "grey",
								}}
							>
								<Grid xs={12} item>
									<span>
										<b>Duration:</b> {course.duration}
									</span>
								</Grid>
								<Grid xs={12} item sx={{ mb: 5 }}>
									<span>
										<b>Description:</b>
										<br />
										{course.description}
									</span>
								</Grid>
								<Grid xs={12} item>
									<span>
										<b>Technologies used:</b>
										<ul
											style={{
												listStylePosition: "inside",
												paddingInlineStart: 0,
											}}
										>
											{course.technologies?.map((technology, index) => (
												<li key={index}>{technology}</li>
											))}
										</ul>
									</span>
								</Grid>
								{!registered && (
									<Grid xs={12} item style={{ display: "flex" }}>
										<span>
											<b>Price: {course.price}</b>
										</span>
									</Grid>
								)}
								{!registered && (
									<Grid xs={12} item sx={{ mt: "10px" }}>
										{course.registrationOpen && (
											<Button
												style={{
													mt: "150px",
												}}
												variant="contained"
												onClick={
													course.price === "0"
														? completeRegistration
														: toCheckout
												}
											>
												Register for Course
											</Button>
										)}
										{!course.registrationOpen && (
											<Button
												style={{
													mt: "150px",
												}}
												variant="contained"
												disabled
											>
												Registration Closed
											</Button>
										)}
									</Grid>
								)}
							</Grid>
						</>
					)}
					{registered && <CourseMaterials />}
				</CardContent>
			</Card>
		</>
	);
};
export default CourseDetails;
