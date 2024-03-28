"use client";

import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import { AuthProvider } from "../context/AuthContext";
import TanstackProvider from "../providers/TanstackProvider";
import theme from "../theme";

const contentStyle = {
	maxWidth: 1440,
	margin: "0 auto",
	backgroundColor: "#f8f9fa",
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
										backgroundColor: "lightGrey",
										minHeight: "100vh",
									}}
								>
									<Box sx={contentStyle}>
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
