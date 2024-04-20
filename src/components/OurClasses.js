import React, { forwardRef, useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Box, Typography, Button } from "@mui/material";
import { ourClasses } from "../data/homeContent";
import {
	wrapper,
	instructors,
	instructorsHeader,
	instructorsBody,
	viewAll,
	viewAllText,
} from "../styles/ourClasses";
import { header, headerText, body } from "../styles/text";
import Courses from "./Courses";

const OurClasses = forwardRef((props, ref) => {
	const [coursesCount, setCoursesCount] = useState("2");
	return (
		<>
			<Box component="div" sx={wrapper}>
				<Box component={"div"} sx={{ ...header, width: 0.5 }} ref={ref}>
					<Typography variant="span" sx={{ ...headerText, color: "white" }}>
						Upcomming Classes
					</Typography>
					<Box component={"div"} sx={instructors}>
						<VerifiedIcon />
						<Box component={"div"} sx={instructorsHeader}>
							Instructors with real-world knowledge.
						</Box>
					</Box>
					<Box component={"p"} sx={instructorsBody}>
						Decades of combined experience.
					</Box>
				</Box>
				<Typography
					variant="span"
					sx={{ ...body, width: 0.5, color: "#ffffff9c", ml: "115px" }}
				>
					{ourClasses}
				</Typography>
			</Box>
			<Courses count={coursesCount} />
			<Box
				component="div"
				sx={{
					display: "flex",
					justifyContent: "center",
					pt: 2,
					pb: 10,
				}}
			>
				<Button
					sx={viewAll}
					variant="outlined"
					onClick={() => setCoursesCount("all")}
				>
					<Typography variant="span" sx={viewAllText}>
						View all upcomming classes
					</Typography>
				</Button>
			</Box>
		</>
	);
});

export default OurClasses;
