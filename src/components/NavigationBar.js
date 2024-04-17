import React, { useContext, useState, useRef } from "react";
import { Box, Modal, Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import RouterLink from "next/link";
import { AuthContext } from "../context/AuthContext";
import {
	toolbar,
	logo,
	navBar,
	navLinkStyle,
	modalStyle,
} from "../styles/navigationBar";
import Login from "./Login";
import LogoutDialog from "./LogoutDialog";

const StyledButton = styled(Button)(`
  text-transform: none;
`);

const NavigationBar = ({ testimonialsRef, aboutRef, coursesRef }) => {
	const { showLogin, setShowLogin, user } = useContext(AuthContext);
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
								component={RouterLink}
								href={"/user"}
								sx={{ ...navLinkStyle, color: "secondary.main" }}
							>
								<b>My Courses</b>
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
						<Login setOpen={setShowLogin} />
					</Box>
				</Modal>

				<LogoutDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
			</Box>
		</>
	);
};

export default NavigationBar;
