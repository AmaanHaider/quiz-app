import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../fireBaseAuth/fireBaseConfig";


const LoginPage = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Container maxWidth="sm">
      <Box mt={40} textAlign="center">
        <Button  onClick={() => signInWithGoogle("", { prompt: "select_account" })}  variant="contained">Login with Google</Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
