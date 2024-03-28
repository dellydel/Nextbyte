import React, { useContext, useState } from "react";
import { Box, Modal, Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import RouterLink from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";
import Login from "./Login";
import LogoutDialog from "./LogoutDialog";

const pages = [
	{ name: "About", link: "/courses" },
	{ name: "Courses", link: "/courses" },
	{ name: "Pricing", link: "/courses" },
	{ name: "Testimonials", link: "/courses" },
];

const StyledButton = styled(Button)(`
  text-transform: none;
`);

const navLinkStyle = {
	color: "#ffffff",
	fontSize: "16px",
	fontWeight: 400,
	letterSpacing: "-0.32px",
	lineHeight: "24px",
	position: "relative",
	whiteSpace: "nowrap",
	width: "fit-content",
	textDecoration: "none",
};

const modalStyle = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
};

const toolbar = {
	mx: "auto",
	alignItems: "flex-start",
	display: "flex",
	justifyContent: "space-between",
	position: "relative",
	width: 1200,
};

const logo = {
	height: "29.76px",
	objectFit: "cover",
	position: "relative",
	width: "173px",
};

const navBar = {
	alignItems: "center",
	display: "inline-flex",
	flex: "0 0 auto",
	gap: "24px",
	justifyContent: "center",
	position: "relative",
};

const NavigationBar = ({ children }) => {
	const { showLogin, setShowLogin, user } = useContext(AuthContext);
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<>
			<Box component="div" sx={toolbar}>
				<Box
					sx={logo}
					component={"img"}
					src={"/images/logo-white.png"}
					alt={"NextByte Logo"}
				/>
				<Box sx={navBar}>
					{pages.map((page) => (
						<Link
							key={page.name}
							component={RouterLink}
							href={`${page.link}`}
							sx={navLinkStyle}
						>
							{page.name}
						</Link>
					))}
					{user !== null ? (
						<>
							<Link
								component={RouterLink}
								href={"/user"}
								sx={{ ...navLinkStyle, color: "secondary.main" }}
							>
								My Courses
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
