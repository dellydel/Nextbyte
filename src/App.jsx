import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import PopupMessage from "./components/PopupMessage";
import { PopupProvider } from "./context/PopupContext";
import { AuthProvider } from "./hooks/useAuth";
import Home from "./pages/Home";
import TanstackProvider from "./providers/TanstackProvider";

const RootLayout = () => {
	return (
		<html lang="en">
			<head>
				<title>NextByte, LLC</title>
				<meta
					name="description"
					content="Next Byte LLC Training and Consulting"
				/>
			</head>
			<body>
				<TanstackProvider>
					<AuthProvider>
						<Box
							sx={{
								backgroundColor: "lightGrey",
								minHeight: "100vh",
							}}
						>
							<PopupProvider>
								<PopupMessage />
								<Routes>
									<Route path="/" element={<Home />} />
								</Routes>
							</PopupProvider>
						</Box>
					</AuthProvider>
				</TanstackProvider>
			</body>
		</html>
	);
};

export default RootLayout;
