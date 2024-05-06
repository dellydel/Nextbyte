"use client";

import React, { useState, useEffect, useRef } from "react";
import { Box, Modal } from "@mui/material";
import { useSearchParams } from "next/navigation";
import EnrollToday from "../components/EnrollToday";
import Features from "../components/Features";
import Footer from "../components/Footer";
import MainHero from "../components/MainHero";
import OurClasses from "../components/OurClasses";
import PaymentSuccessful from "../components/PaymentComplete";
import Testimonials from "../components/Testimonials";
import WhyNextByte from "../components/WhyNextByte";
import { modalStyle } from "../styles/modal";

const darkBg = {
	backgroundImage:
		"radial-gradient(circle, rgba(0, 14, 29, 0.56), #000E1D), url('images/coursesBg.webp')",
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	width: 1,
};

const laptopBg = {
	backgroundImage: "url('images/books_laptop.webp')",
	backgroundPosition: "center center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	width: 1,
};

const footerBg = {
	backgroundColor: "#000e1d",
	width: 1,
};

const Home = () => {
	const testimonialsRef = useRef(null);
	const aboutRef = useRef(null);
	const coursesRef = useRef(null);
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setHydrated(true);
	}, []);

	const searchParams = useSearchParams();
	const session_id = searchParams.get("session_id");
	const hasQueryString = session_id !== null;
	const [showModal, setShowModal] = useState(hasQueryString);

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
			<Modal open={showModal} onClose={() => setShowModal(false)}>
				<Box sx={modalStyle}>
					<PaymentSuccessful sessionId={session_id} />
				</Box>
			</Modal>
		</Box>
	);
};

export default Home;
