import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PopupMessage from "./components/PopupMessage";
import { PopupProvider } from "./context/PopupContext";
import { AuthProvider } from "./hooks/useAuth";
import Home from "./pages/Home";
import TanstackProvider from "./providers/TanstackProvider";
import theme from "./theme";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
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
		</ThemeProvider>
	);
};

export default App;
