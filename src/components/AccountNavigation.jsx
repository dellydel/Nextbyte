import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import Enrollments from "./Enrollments";
import Payments from "./Payments";
import Personal from "./Personal";

const contentStyle = {
	backgroundColor: "#f8f9fa",
	mt: 2,
	borderRadius: 3,
	boxShadow: 3,
};

const AccountNavigation = () => {
	const [selectedTab, setSelectedTab] = useState(0);

	const renderContent = () => {
		switch (selectedTab) {
			case 1:
				return <Enrollments />;
			case 2:
				return <Payments />;
			default:
				return <Personal />;
		}
	};

	return (
		<>
			<Tabs
				value={selectedTab}
				onChange={(_, val) => setSelectedTab(val)}
				variant="scrollable"
				scrollButtons="auto"
			>
				<Tab label="Personal" />
				<Tab label="My Courses" />
				<Tab label="Payments" disabled />
			</Tabs>
			<Box sx={contentStyle}>{renderContent()}</Box>
		</>
	);
};

export default AccountNavigation;
