import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography } from "@mui/material";

function BuyerLogin() {
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
        backgroundColor: "#f4f6f9",
      }}
    >
      <form
        style={{
          width: "80%",
          maxWidth: "400px",
          padding: "20px",
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Buyer Login
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField name="Email" type="email" fullWidth label="Email" variant="outlined" onChange={handleChange} />
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
                backgroundColor: "#007bff",
                color: "white",
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

export default BuyerLogin;