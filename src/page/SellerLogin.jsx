import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SellerLogin() {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const { Email, Password } = formData;

    if (!Email || !Password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, Email.trim(), Password.trim());
      alert("Login successful!");
      navigate("/Seller/Profile"); // Or wherever you want to send sellers after login
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <Container
      maxWidth={false}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <form
        style={{
          width: "80%",
          maxWidth: "400px",
          padding: "20px",
          background: "#FAFAFA",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#1976D2",
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
              value={formData.Email}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFFFFF",
                  "& fieldset": {
                    borderColor: "#1976D2",
                  },
                  "&:hover fieldset": {
                    borderColor: "#1565C0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976D2",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#757575",
                },
                "& .MuiInputLabel-root": {
                  color: "#757575",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1976D2",
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
              value={formData.Password}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFFFFF",
                  "& fieldset": {
                    borderColor: "#1976D2",
                  },
                  "&:hover fieldset": {
                    borderColor: "#1565C0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976D2",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#757575",
                },
                "& .MuiInputLabel-root": {
                  color: "#757575",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1976D2",
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
                backgroundColor: "#1976D2",
                color: "#FFFFFF",
              }}
              onClick={handleLogin}
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
