import React, { useContext, useEffect, useState } from "react";
import { Toolbar, Box, Modal, Button, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import RouterLink from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";
import Login from "./Login";
import LogoutDialog from "./LogoutDialog";

const pages = [
	// { name: "About", link: "/courses" },
	{ name: "Courses", link: "/courses" },
	// { name: "Pricing", link: "/courses" },
	// { name: "Testimonials", link: "/courses" },
];

const StyledButton = styled(Button)(`
  text-transform: none;
`);

const navLinkStyle = {
	mx: 2,
	color: "white",
	textDecoration: "none",
	fontSize: 20,
};

const modalStyle = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
};

const NavigationBar = ({ children }) => {
	const { showLogin, setShowLogin, user } = useContext(AuthContext);
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<>
			<Modal open={showLogin} onClose={() => setShowLogin(false)}>
				<Box sx={modalStyle}>
					<Login setOpen={setShowLogin} />
				</Box>
			</Modal>
			<Box position="sticky" zIndex="1100">
				<Toolbar sx={{ width: { md: "1200px" }, mx: "auto" }}>
					<Typography sx={navLinkStyle}>NEXTBYTE</Typography>
					<Box
						sx={{
							my: 5,
							display: { xs: "none", md: "flex" },
							flexGrow: 1,
							justifyContent: "flex-end",
							alignItems: "center",
						}}
					>
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
								<Link component={RouterLink} href={"/user"} sx={navLinkStyle}>
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
					<LogoutDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
				</Toolbar>
				<Box sx={{ marginTop: "-247px" }}>{children}</Box>
			</Box>
		</>
	);
};

export default NavigationBar;
