"use client";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Features from "../components/Features";
import MainHero from "../components/MainHero";
import OurClasses from "../components/OurClasses";
import Testimonials from "../components/Testimonials";
import WhyNextByte from "../components/WhyNextByte";

const darkBg = {
	backgroundImage:
		"radial-gradient(circle, rgba(0, 14, 29, 0.56), #000E1D), url('images/coursesBg.png')",
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	width: "100%",
};

const Home = () => {
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setHydrated(true);
	}, []);

	return (
		<Box>
			{hydrated && <MainHero />}
			<Features />
			<WhyNextByte />
			<Box sx={darkBg}>
				<OurClasses />
			</Box>
			<Testimonials />
		</Box>
	);
};

export default Home;
