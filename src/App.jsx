import { Box, Button, CircularProgress, Container } from "@mui/material";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { auth } from "./fireBaseAuth/fireBaseConfig";
import FinalScreen from "./pages/FinalScreen";
import Question from "./pages/Questions";
import Settings from "./pages/Settings";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "./components/LoginPage";
import { getAuth, signOut } from "firebase/auth";

function App() {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <Box mt={50} textAlign="center">
        <CircularProgress />
      </Box>
    );
  }
  if (!user) {
    return <LoginPage />;
  }

  return (
    <BrowserRouter>
      <Container maxWidth="sm">
        <Box textAlign="end">
          <Button variant="contained" onClick={handleSignOut}>
            sign Out
          </Button>
        </Box>
        <Box textAlign="center"  sx={{backgroundColor:"#f8f0e5"}}   mt={5}>
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
