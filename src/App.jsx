import { Box, Container } from "@mui/material";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import FinalScreen from "./pages/FinalScreen";
import Question from "./pages/Questions";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth='sm'>
        <Box textAlign='center' mt={5} >
          <Routes>
            <Route path="/" element={<Settings />} />
            <Route path="/questions" element={<Question />} />
            <Route path="/score" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
