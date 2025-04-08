import React from "react";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center", borderRadius: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Choose Login Type
        </Typography>

        <Box mt={4} display="flex" flexDirection="column" gap={2}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/Seller/Login")}
          >
            Seller Login
          </Button>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate("/Buyer/Login")}
          >
            Buyer Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
