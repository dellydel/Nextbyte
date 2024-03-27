"use client";

import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { AuthProvider } from "../context/AuthContext";
import TanstackProvider from "../providers/TanstackProvider";
import theme from "../theme";

const contentStyle = {
	maxWidth: 1440,
	margin: "0 auto",
	backgroundColor: "white",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<TanstackProvider>
					<AppRouterCacheProvider>
						<AuthProvider>
							<ThemeProvider theme={theme}>
								<CssBaseline />
								<Box
									sx={{
										backgroundColor: "#f6f6f6",
										minHeight: "100vh",
									}}
								>
									<Box sx={contentStyle}>
										<NavigationBar />
										{children}
										<Footer />
									</Box>
								</Box>
							</ThemeProvider>
						</AuthProvider>
					</AppRouterCacheProvider>
				</TanstackProvider>
			</body>
		</html>
	);
};

export default RootLayout;
