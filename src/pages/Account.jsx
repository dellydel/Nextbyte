import { Box } from "@mui/material";
import AccountNavigation from "../components/AccountNavigation";
import NavigationBar from "../components/NavigationBar";

const Account = () => {
	return (
		<>
			<Box sx={{ backgroundColor: "#000E1D", pt: 5, pb: 2 }}>
				<NavigationBar />
			</Box>
			<Box sx={{ p: 2 }}>
				<AccountNavigation />
			</Box>
		</>
	);
};

export default Account;
