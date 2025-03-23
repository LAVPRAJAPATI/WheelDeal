import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography } from "@mui/material";

function SellerLogin() {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container
      maxWidth={false}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a2b45", // Dark blue background
      }}
    >
      <form
        style={{
          width: "80%",
          maxWidth: "400px",
          padding: "20px",
          background: "#2c3e66", // Slightly lighter dark blue for form
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Darker shadow
        }}
      >
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#a3bffa", // Light blue for text contrast
            marginBottom: "20px",
          }}
        >
          Seller Login
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="Email"
              type="email"
              fullWidth
              label="Email"
              variant="outlined"
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#ffffff", // White background
                  "& fieldset": {
                    borderColor: "#ffffff", // White border
                  },
                  "&:hover fieldset": {
                    borderColor: "#e0e0e0", // Light gray on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#a3bffa", // Light blue when focused
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#000000", // Black text for contrast
                },
                "& .MuiInputLabel-root": {
                  color: "#666666", // Gray label
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#a3bffa", // Light blue when focused
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Password"
              type="password"
              fullWidth
              label="Password"
              variant="outlined"
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#ffffff",
                  "& fieldset": {
                    borderColor: "#ffffff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#e0e0e0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#a3bffa",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#000000",
                },
                "& .MuiInputLabel-root": {
                  color: "#666666",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#a3bffa",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{
                padding: "12px",
                fontSize: "16px",
                borderRadius: "5px",
                backgroundColor: "#4c68d7", // Medium blue button
                color: "#ffffff",
              }}
              onClick={() => console.log("Login Data:", formData)}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default SellerLogin;