import CloseIcon from "@mui/icons-material/Close";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { close } from "../styles/modal";
import AccountNavigation from "./AccountNavigation";

export const wrapper = {
	padding: 3,
	pb: 6,
	borderRadius: 3,
	boxShadow: 3,
	height: 800,
	display: "flex",
	justifyContent: "center",
	alignItems: "start",
};

const UserInformationScreen = ({ setShowUser }) => {
	return (
		<Card sx={wrapper}>
			<CardContent
				sx={{
					width: "1000px",
				}}
			>
				<Box
					sx={{
						...close,
						justifyContent: "space-between",
						mb: 2,
					}}
				>
					<Typography variant="h5">Account Information</Typography>
					<IconButton
						color="inherit"
						aria-label="close"
						onClick={() => setShowUser(false)}
					>
						<CloseIcon />
					</IconButton>
				</Box>

				<AccountNavigation />
			</CardContent>
		</Card>
	);
};

export default UserInformationScreen;
