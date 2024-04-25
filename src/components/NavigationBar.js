import React, { useContext, useState } from "react";
import { Box, Modal, Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import RouterLink from "next/link";
import { AuthContext } from "../context/AuthContext";
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
	const { showLogin, setShowLogin, user } = useContext(AuthContext);
	const [showRegister, setShowRegister] = useState(false);
	const [showUser, setShowUser] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<>
			<Box component="div" sx={toolbar}>
				<Link
					component={RouterLink}
					href="/"
					style={{
						padding: "8px 0",
						color: "white",
					}}
				>
					<Box
						sx={logo}
						component={"img"}
						src={"/images/logo-white.png"}
						alt={"NextByte Logo"}
					/>
				</Link>
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
				<Modal open={showLogin} onClose={() => setShowLogin(false)}>
					<Box sx={modalStyle}>
						<Login setShowRegister={setShowRegister} />
					</Box>
				</Modal>
				<Modal open={showRegister} onClose={() => setShowRegister(false)}>
					<Box sx={modalStyle}>
						<Register setShowRegister={setShowRegister} />
					</Box>
				</Modal>
				<Modal open={showUser} onClose={() => setShowUser(false)}>
					<Box sx={modalStyle}>
						<User setShowUser={setShowUser} />
					</Box>
				</Modal>
				<LogoutDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
			</Box>
		</>
	);
};

export default NavigationBar;
