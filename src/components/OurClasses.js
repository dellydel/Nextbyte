import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Box, Typography } from "@mui/material";
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

const OurClasses = () => {
	return (
		<>
			<Box component="div" sx={wrapper}>
				<Box component={"div"} sx={{ ...header, width: 0.5 }}>
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
			<Courses count={2} />
			<Box
				component="div"
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					maxWidth: 1440,
					py: 5,
				}}
			>
				<Box component="div" sx={viewAll}>
					<Typography variant="span" sx={viewAllText}>
						View all classes
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default OurClasses;
