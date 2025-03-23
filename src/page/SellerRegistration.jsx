import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography } from "@mui/material";

function SellerRegistration() {
  const [formData, setFormData] = useState({
    Name: "",
    Address: "",
    City: "",
    Email: "",
    Mobile: "",
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
          maxWidth: "500px",
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
          Seller Registration
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField name="Name" fullWidth label="Full Name" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="Address" fullWidth label="Address" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="City" fullWidth label="City" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="Email" type="email" fullWidth label="Email" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="Mobile" type="tel" fullWidth label="Mobile Number" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="Password" type="password" fullWidth label="Password" variant="outlined" onChange={handleChange} />
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
              onClick={() => console.log("Form Data:", formData)}
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