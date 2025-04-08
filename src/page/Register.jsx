import React from "react";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center", borderRadius: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Choose Register Type
        </Typography>

        <Box mt={4} display="flex" flexDirection="column" gap={2}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/Seller/Registration")}
          >
            Seller Register
          </Button>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate("/Buyer/Registration")}
          >
            Buyer Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Register;

