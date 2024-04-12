import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Box, Typography, Avatar } from "@mui/material";
import {
	wrapper,
	container,
	textWrapper,
	quote,
	quoteIcon,
	avatar,
	avatarText,
	avatarContainer,
} from "../styles/testimonial";

const Testimonial = ({ testimonial }) => {
	const testimonialData = testimonial.testimonial.split(".");
	return (
		<Box sx={wrapper}>
			<FormatQuoteIcon sx={quoteIcon} color="secondary" />
			<Box sx={container}>
				<Typography sx={textWrapper}>{testimonialData[0]}.</Typography>
				<Typography variant="p" sx={quote}>
					{testimonialData[1]}
				</Typography>
			</Box>
			<Box style={avatarContainer}>
				<Avatar
					sx={avatar}
					src={testimonial.avatarUrl}
					alt="testimonial avatar"
				></Avatar>
				<Typography variant="span" sx={avatarText}>
					{testimonial.FirstName} {testimonial.LastInitial}.
				</Typography>
			</Box>
		</Box>
	);
};

export default Testimonial;
