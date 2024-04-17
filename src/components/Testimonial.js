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
	return (
		<Box sx={wrapper}>
			<FormatQuoteIcon sx={quoteIcon} color="secondary" />
			<Box sx={container}>
				<Typography sx={textWrapper}>{testimonial.header}</Typography>
				<Typography variant="p" sx={quote}>
					{testimonial.body}
				</Typography>
			</Box>
			<Box style={avatarContainer}>
				<Avatar
					sx={avatar}
					src={testimonial.avatarUrl}
					alt="testimonial avatar"
				></Avatar>
				<Typography variant="span" sx={avatarText}>
					{testimonial.firstName} {testimonial.lastName}
				</Typography>
			</Box>
		</Box>
	);
};

export default Testimonial;
