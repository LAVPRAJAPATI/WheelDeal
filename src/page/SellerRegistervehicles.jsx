import React, { useState } from "react";
import { Container, TextField, Select, MenuItem, FormControl, InputLabel, Button, Grid, Typography } from "@mui/material";

function SellerRegisterVehicles() {
  const [FormData, setFormData] = useState({
    Brand: "",
    Model: "",
    Insurance: "",
    CarKmsRun: "",
    Milage: "",
    Vehiclenumber: "",
    RCBookNumber: "",
    Owners: "",
    QuotedPrice: "",
    Fuel: "",
    Vehicletype: "",
    Transmissiontype: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };

  const formStyle = {
    width: "100%",
    padding: "40px",
    background: "linear-gradient(135deg, #003366 0%, #004080 100%)",
    borderRadius: "15px",
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.6)",
    color: "#FFFFFF",
    border: "1px solid rgba(0, 191, 255, 0.2)"
  };

  const inputStyle = {
    input: { color: "#FFFFFF" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "rgba(0, 191, 255, 0.5)" },
      "&:hover fieldset": { borderColor: "#00BFFF" },
      "&.Mui-focused fieldset": { borderColor: "#00BFFF" }
    },
    "& .MuiInputLabel-root": { color: "rgba(255, 255, 255, 0.7)" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#00BFFF" }
  };

  const selectStyle = {
    color: "#FFFFFF",
    "& .MuiSvgIcon-root": { color: "#00BFFF" },
    "&:before": { borderColor: "rgba(0, 191, 255, 0.5)" },
    "&:after": { borderColor: "#00BFFF" },
    "&:hover:not(.Mui-disabled):before": { borderColor: "#00BFFF" }
  };

  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        background: "linear-gradient(to bottom, #001F3F, #003366)",
        padding: "20px"
      }}
    >
      <form style={formStyle}>
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ 
            color: "#00BFFF", 
            marginBottom: "30px",
            fontWeight: "bold",
            letterSpacing: "1px",
            textTransform: "uppercase"
          }}
        >
          Register Your Vehicle
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField 
              name="Brand" 
              fullWidth 
              label="Brand" 
              variant="outlined" 
              onChange={handleChange} 
              sx={inputStyle}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              name="Model" 
              fullWidth 
              label="Model" 
              variant="outlined" 
              onChange={handleChange} 
              sx={inputStyle}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              name="Insurance" 
              fullWidth 
              label="Insurance Status (Active/Expired)" 
              variant="outlined" 
              onChange={handleChange} 
              sx={inputStyle}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "#00BFFF" }}>Vehicle Type</InputLabel>
              <Select 
                name="Vehicletype" 
                label="Vehicle Type" 
                onChange={handleChange} 
                sx={{ ...inputStyle, ...selectStyle }}
              >
                <MenuItem value="SUV">SUV</MenuItem>
                <MenuItem value="Sedan">Sedan</MenuItem>
                <MenuItem value="Convertible">Convertible</MenuItem>
                <MenuItem value="Hatchback">Hatchback</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              name="CarKmsRun" 
              fullWidth 
              label="Car Kms Run" 
              variant="outlined" 
              onChange={handleChange} 
              sx={inputStyle}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              name="Milage" 
              fullWidth 
              label="Mileage" 
              variant="outlined" 
              onChange={handleChange} 
              sx={inputStyle}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              name="Vehiclenumber" 
              fullWidth 
              label="Vehicle Identification Number" 
              variant="outlined" 
              onChange={handleChange} 
              sx={inputStyle}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              name="RCBookNumber" 
              fullWidth 
              label="RC Book Number" 
              variant="outlined" 
              onChange={handleChange} 
              sx={inputStyle}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "#00BFFF" }}>Fuel Type</InputLabel>
              <Select 
                name="Fuel" 
                label="Fuel Type" 
                onChange={handleChange} 
                sx={{ ...inputStyle, ...selectStyle }}
              >
                <MenuItem value="Petrol">Petrol</MenuItem>
                <MenuItem value="Diesel">Diesel</MenuItem>
                <MenuItem value="Electric">Electric</MenuItem>
                <MenuItem value="Gas">Gas</MenuItem>
                <MenuItem value="Hybrid">Hybrid</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "#00BFFF" }}>Transmission Type</InputLabel>
              <Select 
                name="Transmissiontype" 
                label="Transmission Type" 
                onChange={handleChange} 
                sx={{ ...inputStyle, ...selectStyle }}
              >
                <MenuItem value="Manual">Manual</MenuItem>
                <MenuItem value="Automatic">Automatic</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              name="Owners" 
              fullWidth 
              label="Number of Owners" 
              variant="outlined" 
              onChange={handleChange} 
              sx={inputStyle}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              name="QuotedPrice" 
              fullWidth 
              label="Quoted Price" 
              variant="outlined" 
              onChange={handleChange} 
              sx={inputStyle}
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              fullWidth 
              variant="contained" 
              sx={{ 
                bgcolor: "#00BFFF",
                color: "#FFFFFF",
                padding: "12px",
                fontWeight: "bold",
                letterSpacing: "1px",
                '&:hover': { 
                  bgcolor: "#009ACD",
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease"
                }
              }} 
              onClick={() => { console.log(FormData) }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default SellerRegisterVehicles;