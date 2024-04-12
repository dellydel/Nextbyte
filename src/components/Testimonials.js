import React from "react";
import { Typography, Box } from "@mui/material";
import { testimonialText } from "../data/homeContent";
import testimonials from "../data/testimonialsContent";
import { wrapper, testimonialsContainer } from "../styles/testimonials";
import { header, headerText, body } from "../styles/text";
import Testimonial from "./Testimonial";

const Testimonials = () => {
	return (
		<>
			<Box component="div" sx={wrapper}>
				<Box component={"div"} sx={{ ...header, width: 0.5 }}>
					<Typography variant="span" sx={{ ...headerText }}>
						What our students are saying.
					</Typography>
				</Box>
				<Typography variant="span" sx={{ ...body, width: 0.5, ml: "115px" }}>
					{testimonialText}
				</Typography>
			</Box>
			<Box sx={testimonialsContainer}>
				{testimonials.map((testimonial) => {
					return <Testimonial testimonial={testimonial} key={testimonial.id} />;
				})}
			</Box>
		</>
	);
};
export default Testimonials;
