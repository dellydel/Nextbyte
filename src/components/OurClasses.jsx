import { forwardRef, useState } from "react";
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
				<Box
					component={"div"}
					sx={{
						...header,
						width: { xs: 1, lg: 0.5 },
						textAlign: { xs: "center", lg: "left" },
						mr: { xs: 0, lg: 5 },
					}}
					ref={ref}
				>
					<Typography variant="span" sx={{ ...headerText, color: "white" }}>
						Upcoming Classes
					</Typography>

					<>
						<Box component={"div"} sx={instructors}>
							<Box component={"div"} sx={instructorsHeader}>
								<VerifiedIcon />
								Instructors with real-world knowledge.
							</Box>
						</Box>
						<Box component={"p"} sx={instructorsBody}>
							Decades of combined experience.
						</Box>
					</>
				</Box>
				<Typography
					variant="span"
					sx={{
						...body,
						width: { xs: 1, lg: 0.5 },
						color: "#ffffff9c",
						textAlign: { xs: "center", lg: "left" },
						mt: { xs: 2, lg: 0 },
					}}
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
					px: { xs: 4, lg: 0 },
				}}
			>
				<Button
					sx={viewAll}
					variant="outlined"
					onClick={() => setCoursesCount("all")}
				>
					<Typography variant="span" sx={viewAllText}>
						View all upcoming classes
					</Typography>
				</Button>
			</Box>
		</>
	);
});

export default OurClasses;
