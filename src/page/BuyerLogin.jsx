import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Alert,
} from "@mui/material";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // <-- Add this line

function BuyerLogin() {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // <-- Initialize navigation hook

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.Email.trim(),
        formData.Password
      );

      console.log("Login successful:", userCredential.user);

      navigate("/Buyer/Cars");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
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
        onSubmit={handleLogin}
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
          Buyer Login
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

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
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFFFFF",
                  "& fieldset": { borderColor: "#1976D2" },
                  "&:hover fieldset": { borderColor: "#1565C0" },
                  "&.Mui-focused fieldset": { borderColor: "#1976D2" },
                },
                "& .MuiInputBase-input": { color: "#757575" },
                "& .MuiInputLabel-root": { color: "#757575" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#1976D2" },
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
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFFFFF",
                  "& fieldset": { borderColor: "#1976D2" },
                  "&:hover fieldset": { borderColor: "#1565C0" },
                  "&.Mui-focused fieldset": { borderColor: "#1976D2" },
                },
                "& .MuiInputBase-input": { color: "#757575" },
                "& .MuiInputLabel-root": { color: "#757575" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#1976D2" },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              style={{
                padding: "12px",
                fontSize: "16px",
                borderRadius: "5px",
                backgroundColor: "#1976D2",
                color: "#FFFFFF",
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default BuyerLogin;
