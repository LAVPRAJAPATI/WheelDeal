import React, { useState } from "react";
import { Container, TextField, Select, MenuItem, FormControl, InputLabel, Button, Grid, Typography } from "@mui/material";

function SellerRegisterVehicles() {
  const [FormData, setFormData] = useState({
    Brand: "",
    VehicleModel: "",
    Insurance: "",
    CarKmsRun: "",
    Milage: "",
    Vehiclenumber: "",
    RCBookNumber: "",
    Owners: "",
    Price: "",
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
    background: "#FAFAFA", // Matches Homepage card background
    borderRadius: "15px",
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.6)",
    color: "#757575", // Matches Homepage secondary text
    border: "1px solid #E0E0E0" // Matches Homepage About Us background
  };

  const inputStyle = {
    input: { color: "#757575" }, // Matches Homepage secondary text
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#1976D2" }, // Matches Homepage primary
      "&:hover fieldset": { borderColor: "#1565C0" }, // Darker primary on hover
      "&.Mui-focused fieldset": { borderColor: "#1976D2" } // Matches Homepage primary
    },
    "& .MuiInputLabel-root": { color: "#757575" }, // Matches Homepage secondary text
    "& .MuiInputLabel-root.Mui-focused": { color: "#1976D2" } // Matches Homepage primary
  };

  const selectStyle = {
    color: "#757575", // Matches Homepage secondary text
    "& .MuiSvgIcon-root": { color: "#1976D2" }, // Matches Homepage primary
    "&:before": { borderColor: "#1976D2" }, // Matches Homepage primary
    "&:after": { borderColor: "#1976D2" }, // Matches Homepage primary
    "&:hover:not(.Mui-disabled):before": { borderColor: "#1565C0" } // Darker primary on hover
  };

  return (
    <Container sx={{ mt: 10 }}> {/* Added margin-top to create space below navbar */}
      <form style={formStyle}>
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ 
            color: "#1976D2", // Matches Homepage primary
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
              <InputLabel sx={{ color: "#757575" }}>Vehicle Type</InputLabel>
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
              <InputLabel sx={{ color: "#757575" }}>Fuel Type</InputLabel>
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
              <InputLabel sx={{ color: "#757575" }}>Transmission Type</InputLabel>
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
              name="Price" 
              fullWidth 
              label="Price" 
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
                bgcolor: "#1976D2", // Matches Homepage primary
                color: "#FFFFFF", // Matches Homepage button text
                padding: "12px",
                fontWeight: "bold",
                letterSpacing: "1px",
                '&:hover': { 
                  bgcolor: "#1565C0", // Darker primary on hover
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