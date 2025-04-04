import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

function SellerRegistration() {
  const [formData, setFormData] = useState({
    Name: "",
    Address: "",
    Email: "",
    Mobile: "",
    Password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    const { Name, Address, Email, Mobile, Password } = formData;

    if (!Name || !Address || !Email || !Mobile || !Password) {
      alert("Please fill in all the fields before registering.");
      return;
    }

    try {
      // Step 1: Create seller in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        Email.trim(),
        Password.trim()
      );
      const sellerId = userCredential.user.uid;

      // Step 2: Save seller profile in Firestore
      const sellerRef = doc(db, "seller_registration", sellerId);
      await setDoc(sellerRef, {
        sellerId,
        Name,
        Address,
        Email,
        Mobile,
      });

      // Step 3: Sign out the user after registration
      await signOut(auth);

      alert("Registration successful! Please login.");
      navigate("/Seller/Login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed: " + error.message);
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
          maxWidth: "500px",
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
          Seller Registration
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="Name"
              fullWidth
              label="Full Name"
              variant="outlined"
              value={formData.Name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Address"
              fullWidth
              label="Address"
              variant="outlined"
              value={formData.Address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Email"
              type="email"
              fullWidth
              label="Email"
              variant="outlined"
              value={formData.Email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Mobile"
              type="tel"
              fullWidth
              label="Mobile Number"
              variant="outlined"
              value={formData.Mobile}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Password"
              type="password"
              fullWidth
              label="Password"
              variant="outlined"
              value={formData.Password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{ padding: "12px", fontSize: "16px", borderRadius: "5px" }}
              onClick={handleRegister}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default SellerRegistration;
