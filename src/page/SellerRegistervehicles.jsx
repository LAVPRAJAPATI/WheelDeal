import React, { useState } from "react";
import { Container, TextField, Select, MenuItem, FormControl, InputLabel, Button, Grid, Typography, IconButton, Box } from "@mui/material";
import { Delete } from "@mui/icons-material";

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
    Transmissiontype: "",
    MoreDetails: "",
    VehicleImages: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "VehicleImages" && files) {
      const newImages = Array.from(files);
      setFormData({
        ...FormData,
        VehicleImages: [...FormData.VehicleImages, ...newImages]
      });
    } else {
      setFormData({
        ...FormData,
        [name]: value
      });
    }
  };

  const removeImage = (indexToRemove) => {
    setFormData({
      ...FormData,
      VehicleImages: FormData.VehicleImages.filter((_, index) => index !== indexToRemove)
    });
  };

  const formStyle = {
    width: "100%",
    padding: "40px",
    background: "#FAFAFA",
    borderRadius: "15px",
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.6)",
    color: "#757575",
    border: "1px solid #E0E0E0"
  };

  const inputStyle = {
    input: { color: "#757575" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#1976D2" },
      "&:hover fieldset": { borderColor: "#1565C0" },
      "&.Mui-focused fieldset": { borderColor: "#1976D2" }
    },
    "& .MuiInputLabel-root": { color: "#757575" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#1976D2" }
  };

  const selectStyle = {
    color: "#757575",
    "& .MuiSvgIcon-root": { color: "#1976D2" },
    "&:before": { borderColor: "#1976D2" },
    "&:after": { borderColor: "#1976D2" },
    "&:hover:not(.Mui-disabled):before": { borderColor: "#1565C0" }
  };

  return (
    <Container sx={{ mt: 10 }}>
      <form style={formStyle}>
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ 
            color: "#1976D2",
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
              name="VehicleModel" 
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
            <TextField 
              name="MoreDetails" 
              fullWidth 
              label="More Details" 
              variant="outlined" 
              multiline 
              rows={3}
              onChange={handleChange} 
              sx={inputStyle}
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ mb: 2 }}>
              <Button
                variant="outlined"
                component="label"
                sx={{
                  borderColor: "#1976D2",
                  color: "#1976D2",
                  "&:hover": { borderColor: "#1565C0", color: "#1565C0" }
                }}
              >
                Upload Vehicle Images
                <input
                  type="file"
                  hidden
                  name="VehicleImages"
                  multiple
                  accept="image/*"
                  onChange={handleChange}
                />
              </Button>
              <Typography variant="caption" sx={{ ml: 2, color: "#757575" }}>
                {FormData.VehicleImages.length} image(s) selected
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {FormData.VehicleImages.map((image, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <div style={{ position: "relative" }}>
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Vehicle Preview ${index + 1}`}
                      style={{ 
                        width: "100%", 
                        height: "150px", 
                        objectFit: "cover",
                        borderRadius: "4px"
                      }}
                    />
                    <IconButton
                      onClick={() => removeImage(index)}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 5,
                        right: 5,
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" }
                      }}
                    >
                      <Delete color="error" />
                    </IconButton>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button 
              fullWidth 
              variant="contained" 
              sx={{ 
                bgcolor: "#1976D2",
                color: "#FFFFFF",
                padding: "12px",
                fontWeight: "bold",
                letterSpacing: "1px",
                '&:hover': { 
                  bgcolor: "#1565C0",
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