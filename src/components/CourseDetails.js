import React, { useContext, useEffect } from "react";
import { useState } from "react";
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
import { useRouter } from "next/navigation";
import { getCourseRegistrationsByEmail } from "../api/registrationAPI";
import { AuthContext } from "../context/AuthContext";
import { useCourseMaterialsData } from "../hooks/useCourseMaterialsData";
import { useCourseByIdData } from "../hooks/useCoursesData";
import { headerText, header } from "../styles/text";
import { encodeEmail } from "../utils/emailUtils";
import CourseMaterials from "./CourseMaterials";

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
	const router = useRouter();
	const { user } = useContext(AuthContext);
	const [registered, setRegistered] = useState(null);

	if (!courseId || courseId === "undefined") {
		useEffect(() => {
			router.push("/error?type=not_found");
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

	const {
		data: courseMaterials,
		isPending: isCourseMaterialsPending,
		isError: isCourseMaterialsError,
		isSuccess: isCourseMaterialsSuccess,
		error: courseMaterialsError,
	} = useCourseMaterialsData();

	useEffect(() => {
		const fetchRegistrations = async () => {
			if (user === null) {
				setRegistered(false);
				return;
			}
			const registrations = await getCourseRegistrationsByEmail(
				encodeEmail(user),
			);

			if (registrations && registrations.length > 0) {
				setRegistered(registrations.includes(courseId));
			} else {
				setRegistered(false);
			}
		};
		fetchRegistrations();
	}, [user]);

	const toCheckout = () => {
		setShowCheckout(true);
	};

	return (
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
						<Box sx={close}>
							<IconButton
								color="inherit"
								aria-label="close"
								onClick={() => setShowDetails(false)}
							>
								<CloseIcon />
							</IconButton>
						</Box>
						<Box variant={"div"} sx={{ ...header, py: 2 }}>
							<Typography variant="span" sx={headerText}>
								{course.name}
							</Typography>
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
							<Grid xs={12} md={6} item>
								<span>
									<b>Technology used:</b>
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

							<Grid xs={12} md={6} item style={{ display: "flex" }}>
								<span>
									<b>Course Modules:</b>
									<ul
										style={{
											listStylePosition: "inside",
											paddingInlineStart: 0,
										}}
									>
										{course.modules?.map((outline, index) => (
											<li key={index}>{outline}</li>
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
									<Button
										style={{
											mt: "150px",
										}}
										variant="contained"
										onClick={toCheckout}
									>
										Register for course
									</Button>
								</Grid>
							)}
						</Grid>
					</>
				)}
				{isCourseMaterialsPending && <span>Loading course details...</span>}
				{isCourseMaterialsError && <span>{courseMaterialsError.message}</span>}
				{isCourseMaterialsSuccess && courseMaterials && registered && (
					<CourseMaterials data={courseMaterials} />
				)}
			</CardContent>
		</Card>
	);
};
export default CourseDetails;
