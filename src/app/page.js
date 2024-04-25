"use client";

import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import EnrollToday from "../components/EnrollToday";
import Features from "../components/Features";
import Footer from "../components/Footer";
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

const laptopBg = {
	backgroundImage: "url('images/books_laptop.png')",
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	width: "100%",
};

const footerBg = {
	backgroundColor: "#000e1d",
	width: "100%",
};

const Home = () => {
	const testimonialsRef = useRef(null);
	const aboutRef = useRef(null);
	const coursesRef = useRef(null);
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setHydrated(true);
	}, []);

	return (
		<Box>
			{hydrated && (
				<MainHero
					testimonialsRef={testimonialsRef}
					aboutRef={aboutRef}
					coursesRef={coursesRef}
				/>
			)}
			<Features ref={aboutRef} />
			<WhyNextByte />
			<Box sx={darkBg}>
				<OurClasses ref={coursesRef} />
			</Box>
			<Testimonials ref={testimonialsRef} />
			<Box sx={laptopBg}>{hydrated && <EnrollToday />}</Box>
			<Box sx={footerBg}>
				<Footer
					coursesRef={coursesRef}
					aboutRef={aboutRef}
					testimonialsRef={testimonialsRef}
				/>
			</Box>
		</Box>
	);
};

export default Home;
