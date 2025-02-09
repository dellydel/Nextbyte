import React, { useState } from "react";
import { NavLink } from "react-router";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
	Box,
	Typography,
	Grid,
	Button,
	Modal,
	Card,
	CardContent,
	IconButton,
} from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { useMediaQuery } from "@mui/material/";
import { useTheme } from "@mui/material/styles";
import { instagramURL } from "../data/constants";
import { terms, privacy } from "../data/footerContent";
import {
	wrapper,
	companyInfo,
	companyInfoText,
	aboutUsText,
	footerNavigation,
	navContainer,
	header,
	menuItem,
	column,
	copyright,
	copyrightText,
	navLinkStyle,
	policyText,
} from "../styles/footer";
import { close } from "../styles/modal";

const modalStyle = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "100vh",
};

const modalWrapper = {
	padding: 1,
	borderRadius: 3,
	boxShadow: 3,
	height: 500,
	display: "flex",
	justifyContent: "center",
	alignItems: "flex-start",
	overflowY: "auto",
};
const Footer = ({ coursesRef, aboutRef, testimonialsRef }) => {
	const [showTerms, setShowTerms] = useState(false);
	const [showPrivacy, setShowPrivacy] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<>
			<Box component={"div"} sx={wrapper}>
				<Box component={"div"} sx={companyInfo}>
					<NavLink
						to="/"
						style={{
							margin: "8px 0",
							padding: "8px 0",
							color: "white",
							textDecoration: "none",
						}}
					>
						<Box
							component="img"
							src={"images/logo-white.webp"}
							alt={"NextByte Logo"}
							sx={{ height: 50, width: "auto" }}
						/>
					</NavLink>
					<Typography variant="p" sx={companyInfoText}>
						With expert-led instruction and hands-on learning experiences, we're
						dedicated to helping you unlock your full potential in today's
						ever-evolving technology industry.
					</Typography>
					<Box component={"div"} sx={{ mb: 4 }}>
						<Typography variant="div" sx={header}>
							Contact
						</Typography>
						<Box component={"div"} sx={column}>
							<Typography variant="div" sx={menuItem}>
								info@nextbyteweb.com
							</Typography>
							{/* <Typography variant="div" sx={menuItem}>
								(555) 555-5555
							</Typography> */}
						</Box>
					</Box>
					<Grid container>
						<Grid item xs={3} md={4}>
							<Typography variant="span" sx={aboutUsText}>
								Follow Us
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Box sx={{ color: "white" }}>
								<InstagramIcon
									sx={{ cursor: "pointer" }}
									onClick={() => {
										window.open(instagramURL);
									}}
								/>
							</Box>
						</Grid>
					</Grid>
				</Box>
				{!isMobile && (
					<Box component={"div"} sx={footerNavigation}>
						<Box component={"div"} sx={navContainer}>
							<Typography variant="div" sx={header}>
								Menu
							</Typography>
							<Box component={"div"} sx={column}>
								<Typography variant="div" sx={menuItem}>
									<MuiLink
										component={Button}
										onClick={() =>
											coursesRef.current.scrollIntoView({
												block: "center",
												behavior: "smooth",
											})
										}
										sx={navLinkStyle}
									>
										Courses
									</MuiLink>
								</Typography>
								<Typography variant="div" sx={menuItem}>
									<MuiLink
										component={Button}
										onClick={() =>
											aboutRef.current.scrollIntoView({
												block: "center",
												behavior: "smooth",
											})
										}
										sx={navLinkStyle}
									>
										About Us
									</MuiLink>
								</Typography>
								<Typography variant="div" sx={menuItem}>
									<MuiLink
										component={Button}
										onClick={() =>
											testimonialsRef.current.scrollIntoView({
												block: "start",
												behavior: "smooth",
											})
										}
										sx={navLinkStyle}
									>
										Testimonials
									</MuiLink>
								</Typography>
							</Box>
						</Box>
						{/* <Box component={"div"} sx={navContainer}>
							<Typography variant="div" sx={header}>
								Contact
							</Typography>
							<Box component={"div"} sx={column}>
								<Typography variant="div" sx={menuItem}>
									info@nextbyteweb.com
								</Typography>
								<Typography variant="div" sx={menuItem}>
									(555) 555-5555
								</Typography>
							</Box>
						</Box> */}
						<Box component={"div"} sx={navContainer}>
							<Typography variant="div" sx={header}>
								Legal
							</Typography>
							<Box component={"div"} sx={column}>
								<Typography variant="div" sx={menuItem}>
									<MuiLink
										component={Button}
										onClick={() => setShowTerms(true)}
										sx={navLinkStyle}
									>
										Terms and Conditions
									</MuiLink>
								</Typography>
								<Typography variant="div" sx={menuItem}>
									<MuiLink
										component={Button}
										onClick={() => setShowPrivacy(true)}
										sx={navLinkStyle}
									>
										Privacy Policy
									</MuiLink>
								</Typography>
							</Box>
						</Box>
					</Box>
				)}
			</Box>

			<Box component={"div"} sx={copyright}>
				<Typography variant="div" sx={copyrightText}>
					&copy; Copyright 2024 Nextbyte, LLC - All Rights Reserved
				</Typography>
			</Box>
			{!isMobile && (
				<>
					<Modal open={showTerms} onClose={() => setShowTerms(false)}>
						<Box sx={modalStyle}>
							<Card sx={modalWrapper}>
								<CardContent
									sx={{
										width: "500px",
										whiteSpace: "normal",
									}}
								>
									<Box sx={close}>
										<IconButton
											color="inherit"
											aria-label="close"
											onClick={() => setShowTerms(false)}
										>
											<CloseIcon />
										</IconButton>
									</Box>
									<Typography variant="div" sx={policyText}>
										<p>{terms}</p>
									</Typography>
								</CardContent>
							</Card>
						</Box>
					</Modal>
					<Modal open={showPrivacy} onClose={() => setShowPrivacy(false)}>
						<Box sx={modalStyle}>
							<Card sx={modalWrapper}>
								<CardContent
									sx={{
										maxWidth: "850px",
									}}
								>
									<Box sx={close}>
										<IconButton
											color="inherit"
											aria-label="close"
											onClick={() => setShowPrivacy(false)}
										>
											<CloseIcon />
										</IconButton>
									</Box>
									<Typography variant="div" sx={policyText}>
										<p>{privacy}</p>
									</Typography>
								</CardContent>
							</Card>
						</Box>
					</Modal>
				</>
			)}
		</>
	);
};

export default Footer;
