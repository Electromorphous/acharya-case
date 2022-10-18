import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Box } from "@mui/material";
import ThemeContextProvider from "./contexts/ThemeContextProvider";
import AlertContextProvider from "./contexts/AlertContextProvider";
import Header from "./components/Header";
import Index from "./containers/Index";
import Form from "./containers/Form";

function App() {
  return (
    <ThemeContextProvider>
      <AlertContextProvider>
        <Router>
          <Header />
          <Box mt={7.5}>
            <Routes>
              <Route exact path="/" element={<Navigate to="/index" />} />
              <Route exact path="/Index" element={<Index />} />
              <Route exact path="/CaseForm/New" element={<Form />} />
              <Route exact path="/CaseForm/Update/:id" element={<Form />} />
              <Route exact path="/Stage" element={<></>} />
              <Route exact path="/Report" element={<></>} />
            </Routes>
          </Box>
        </Router>
      </AlertContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
