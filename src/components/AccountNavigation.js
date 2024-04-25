import React, { useState } from "react";
import { Grid, Link } from "@mui/material";
import Enrollments from "./Enrollments";
import Payments from "./Payments";
import Personal from "./Personal";

const linkStyle = {
	textDecoration: "none",
	fontSize: "1.2rem",
	fontWeight: "bold",
	marginBottom: "1rem",
};

const listStyle = {
	listStyleType: "none",
	padding: 0,
	pt: 20,
	height: 625,
};

const contentStyle = {
	backgroundColor: "#f8f9fa",
	mt: 3,
	borderRadius: 3,
	boxShadow: 3,
};

const AccountNavigation = ({ user }) => {
	const [selectedLink, setSelectedLink] = useState("personal");

	const renderContent = () => {
		switch (selectedLink) {
			case "courses":
				return <Enrollments user={user} />;
			case "payments":
				return <Payments />;
			default:
				return <Personal user={user} />;
		}
	};

	return (
		<>
			<Grid container>
				<Grid item xs={3}>
					<ul style={listStyle}>
						<li>
							<Link
								sx={{
									...linkStyle,
									color:
										selectedLink === "personal" ? "secondary.main" : "black",
								}}
								component={"button"}
								onClick={() => setSelectedLink("personal")}
							>
								Personal
							</Link>
						</li>
						<li>
							<Link
								sx={{
									...linkStyle,
									color:
										selectedLink === "courses" ? "secondary.main" : "black",
								}}
								component={"button"}
								onClick={() => setSelectedLink("courses")}
							>
								Courses
							</Link>
						</li>
						<li>
							<Link
								sx={{
									...linkStyle,
									color:
										selectedLink === "payments" ? "secondary.main" : "black",
								}}
								component={"button"}
								onClick={() => setSelectedLink("payments")}
							>
								Payments
							</Link>
						</li>
					</ul>
				</Grid>
				<Grid item xs={9} sx={contentStyle}>
					{renderContent()}
				</Grid>
			</Grid>
		</>
	);
};

export default AccountNavigation;
