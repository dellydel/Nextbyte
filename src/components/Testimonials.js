import React, { forwardRef } from "react";
import { Grid, Box } from "@mui/material";
import { testimonialText } from "../data/homeContent";
import testimonials from "../data/testimonialsContent";
import HeaderAndText from "./HeaderAndText";
import Testimonial from "./Testimonial";

const Testimonials = forwardRef((props, ref) => {
	return (
		<>
			<HeaderAndText
				headerContent={
					<span>
						What our students <br />
						are saying.
					</span>
				}
				bodyContent={testimonialText}
			/>
			<Box sx={{ mx: { xs: 4, md: 25 }, mb: { xs: 8, md: 15 } }}>
				<Grid container spacing={{ xs: 4, md: 2 }} justifyContent="center">
					{testimonials.map((testimonial) => {
						return (
							<Testimonial testimonial={testimonial} key={testimonial.id} />
						);
					})}
				</Grid>
			</Box>
		</>
	);
});
export default Testimonials;
