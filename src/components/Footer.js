"use client";

import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { instagramURL } from "../data/constants";
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
} from "../styles/footer";

const Footer = ({ coursesRef, aboutRef, testimonialsRef }) => {
	return (
		<>
			<Box component={"div"} sx={wrapper}>
				<Box component={"div"} sx={companyInfo}>
					<Link
						href="/"
						style={{
							margin: "8px 0",
							padding: "8px 0",
							color: "white",
							textDecoration: "none",
						}}
					>
						<Box
							component="img"
							src={"images/logo-white.png"}
							alt={"NextByte Logo"}
							sx={{ height: "40px", width: "auto" }}
						/>
					</Link>
					<Typography variant="p" sx={companyInfoText}>
						With expert-led instruction and hands-on learning experiences, we're
						dedicated to helping you unlock your full potential in today's
						ever-evolving technology industry.
					</Typography>
					<Grid container>
						<Grid item xs={4}>
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
					<Box component={"div"} sx={navContainer}>
						<Typography variant="div" sx={header}>
							Contact
						</Typography>
						<Box component={"div"} sx={column}>
							<Typography variant="div" sx={menuItem}>
								admin@nextbyteweb.com
							</Typography>
							<Typography variant="div" sx={menuItem}>
								(555) 555-5555
							</Typography>
						</Box>
					</Box>
					<Box component={"div"} sx={navContainer}>
						<Typography variant="div" sx={header}>
							Legal
						</Typography>
						<Box component={"div"} sx={column}>
							<Typography variant="div" sx={menuItem}>
								Terms and Conditions
							</Typography>
							<Typography variant="div" sx={menuItem}>
								Privacy Policy
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box component={"div"} sx={copyright}>
				<Typography variant="div" sx={copyrightText}>
					&copy;Copyright 2024 Nextbyte, LLC - All Rights Reserved
				</Typography>
			</Box>
		</>
	);
};

export default Footer;
