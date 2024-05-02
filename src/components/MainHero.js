import React from "react";
import { Box } from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import CallToAction from "./CallToAction";

const heroStyle = {
	backgroundImage:
		"linear-gradient(#000E1D, rgba(0, 14, 29, 0.69)), url('images/laptop.png')",
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	height: { xs: 500, md: 900 },
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "flex-start",
	textAlign: "center",
	pt: 5,
	px: { xs: 4, md: 0 },
};

const MainHero = ({ testimonialsRef, aboutRef, coursesRef }) => {
	return (
		<>
			<Box sx={heroStyle}>
				<NavigationBar
					testimonialsRef={testimonialsRef}
					aboutRef={aboutRef}
					coursesRef={coursesRef}
				/>
				<Box sx={{ width: { xs: 1, md: 900 }, mb: 5 }}>
					<CallToAction coursesRef={coursesRef} />
				</Box>
			</Box>
		</>
	);
};

export default MainHero;
