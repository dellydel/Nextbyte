import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
	Box,
	Modal,
	Button,
	Link,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import { styled, useMediaQuery } from "@mui/material/";
import { modalStyle } from "../styles/modal";
import { toolbar, logo, navBar, navLinkStyle } from "../styles/navigationBar";
import Login from "./Login";
import LogoutDialog from "./LogoutDialog";
import Register from "./Register";
import User from "./User";

const StyledButton = styled(Button)(`
  text-transform: none;
`);

const NavigationBar = ({ testimonialsRef, aboutRef, coursesRef }) => {
	const [showRegister, setShowRegister] = useState(false);
	const [showUser, setShowUser] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	//TODO: implement Auth
	const user = "Not Implemented";
	const showLogin = false;
	return (
		<>
			<Box component="div" sx={toolbar}>
				<Link
					component={NavLink}
					href="/"
					style={{
						padding: "8px 0",
						color: "white",
					}}
				>
					<Box
						sx={logo}
						component={"img"}
						src={"/images/logo-white.webp"}
						alt={"NextByte Logo"}
					/>
				</Link>
				{isMobile ? (
					<IconButton
						color="inherit"
						aria-label="menu"
						edge="end"
						onClick={toggleMenu}
					>
						<MenuIcon sx={{ color: "white" }} />
					</IconButton>
				) : (
					<Box sx={navBar}>
						<Link
							component={Button}
							onClick={() =>
								aboutRef.current.scrollIntoView({
									block: "end",
									behavior: "smooth",
								})
							}
							sx={navLinkStyle}
						>
							About Us
						</Link>
						<Link
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
						</Link>
						<Link
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
						</Link>

						{user !== null ? (
							<>
								<Link
									component={Button}
									onClick={() => setShowUser(true)}
									sx={{
										...navLinkStyle,
										color: "secondary.main",
										display: "flex",
										alignItems: "center",
									}}
								>
									<b>My Account ({user})</b>
								</Link>

								<StyledButton
									sx={navLinkStyle}
									variant="contained"
									onClick={() => setDialogOpen(true)}
								>
									Logout
								</StyledButton>
							</>
						) : (
							<StyledButton
								sx={navLinkStyle}
								variant="contained"
								onClick={() => setShowLogin(true)}
							>
								Login or Register
							</StyledButton>
						)}
					</Box>
				)}
			</Box>
			{isMobile && (
				<Drawer
					anchor="right"
					open={isMenuOpen}
					onClose={toggleMenu}
					sx={{ backgroundColor: "#f8f9fa" }}
				>
					<Box
						sx={{
							width: 250,
						}}
						role="presentation"
						onClick={toggleMenu}
						onKeyDown={toggleMenu}
					>
						<List>
							{user !== null ? (
								<>
									<ListItem onClick={() => setShowUser(true)}>
										<ListItemText
											sx={{ color: "secondary.main" }}
											primary={`My Account (${user})`}
										/>
									</ListItem>
									<ListItem onClick={() => setDialogOpen(true)}>
										<ListItemText primary="Logout" />
									</ListItem>
								</>
							) : (
								<>
									<ListItem onClick={() => setShowLogin(true)}>
										<ListItemText primary="Login" />
									</ListItem>
									<ListItem onClick={() => setShowLogin(true)}>
										<ListItemText primary="Register" />
									</ListItem>
								</>
							)}
						</List>
					</Box>
				</Drawer>
			)}
			<Modal open={showLogin} onClose={() => setShowLogin(false)}>
				<Box sx={modalStyle}>
					<Login setShowRegister={setShowRegister} />
				</Box>
			</Modal>
			<Modal open={showRegister} onClose={() => setShowRegister(false)}>
				<Box sx={{ ...modalStyle, height: 1200 }}>
					<Register setShowRegister={setShowRegister} />
				</Box>
			</Modal>
			<Modal open={showUser} onClose={() => setShowUser(false)}>
				<Box sx={modalStyle}>
					<User setShowUser={setShowUser} />
				</Box>
			</Modal>
			<LogoutDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
		</>
	);
};

export default NavigationBar;
