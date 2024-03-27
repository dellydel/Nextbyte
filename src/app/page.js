"use client";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Courses from "../components/Courses";
import Features from "../components/Features";
import MainHero from "../components/MainHero";
import SectionDivider from "../components/SectionDivider";

//import Testimonials from "../components/Testimonials";

const Home = () => {
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setHydrated(true);
	}, []);

	return (
		<Box>
			{hydrated && <MainHero />}
			<Features />
			<br />
			{/* <SectionDivider SectionTitle="Testimonials" />
				<Testimonials /> */}
		</Box>
	);
};

export default Home;
