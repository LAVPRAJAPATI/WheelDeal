import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

function SellerLogin() {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const { Email, Password } = formData;
    setError("");
    setLoading(true);

    if (!Email || !Password) {
      setError("Please enter both email and password.");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        Email.trim(),
        Password.trim()
      );
      const user = userCredential.user;

      // 🔍 Check if user exists in seller_registration
      const sellerQuery = query(
        collection(db, "seller_registration"),
        where("Email", "==", user.email)
      );
      const sellerSnapshot = await getDocs(sellerQuery);

      if (sellerSnapshot.empty) {
        // Not found in seller_registration – check if user is a buyer
        const buyerQuery = query(
          collection(db, "buyer_registration"),
          where("Email", "==", user.email)
        );
        const buyerSnapshot = await getDocs(buyerQuery);

        if (!buyerSnapshot.empty) {
          alert("This email is registered as a buyer. Please login as a buyer.");
          navigate("/Buyer/Login");
        } else {
          alert("Seller not found in registration. Redirecting to registration...");
          navigate("/Seller/Registration");
        }

        return;
      }

      // ✅ Store info in localStorage
      localStorage.setItem("userId", user.uid);
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("userRole", "seller");

      console.log("Seller login successful:", user);
      navigate("/Seller/Profile");
    } catch (err) {
      console.error("Login error:", err);
      if (err.code === "auth/user-not-found") {
        alert("Authentication failed. Redirecting to registration...");
        navigate("/Seller/Registration");
      } else {
        setError(err.message);
      }
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
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
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

export default SellerLogin;

