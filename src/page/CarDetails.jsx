// CarDetails.js
import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Button, Box } from "@mui/material";

function CarDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { carData } = location.state || {};

  // Default data if no props are passed
  const defaultData = {
    Brand: "N/A",
    VehicleModel: "N/A",
    Insurance: "N/A",
    CarKmsRun: "N/A",
    Milage: "N/A",
    Vehiclenumber: "N/A",
    RCBookNumber: "N/A",
    Owners: "N/A",
    Price: "N/A",
    Fuel: "N/A",
    Vehicletype: "N/A",
    Transmissiontype: "N/A",
    MoreDetails: "No additional details provided",
    VehicleImages: [],
    image: 'https://via.placeholder.com/400' // Default image
  };

  const data = { ...defaultData, ...carData };

  const containerStyle = {
    padding: "40px",
    background: "#FAFAFA",
    borderRadius: "15px",
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.6)",
    marginTop: "40px",
    marginBottom: "40px",
    border: "1px solid #E0E0E0"
  };

  const handleClose = () => {
    navigate(-1); // Goes back to the previous page in history
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Box style={containerStyle}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            color: "#1976D2",
            fontWeight: "bold",
            letterSpacing: "1px",
            textTransform: "uppercase",
            mb: 4,
            textAlign: "center"
          }}
        >
          {data.Brand} {data.VehicleModel}
        </Typography>

        <Grid container spacing={3} direction="column">
          {/* Images Section */}
          <Grid item xs={12}>
            <Card>
              {data.image || data.VehicleImages.length > 0 ? (
                <Box>
                  <CardMedia
                    component="img"
                    height="400"
                    image={data.VehicleImages.length > 0 ? URL.createObjectURL(data.VehicleImages[0]) : data.image}
                    alt={`${data.Brand} ${data.VehicleModel}`}
                    sx={{ objectFit: "cover" }}
                  />
                  <Box sx={{ p: 2, display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
                    {data.VehicleImages.slice(1).map((image, index) => (
                      <CardMedia
                        key={index}
                        component="img"
                        height="120"
                        image={URL.createObjectURL(image)}
                        alt={`Additional view ${index + 1}`}
                        sx={{ 
                          width: "150px", 
                          objectFit: "cover",
                          borderRadius: "4px"
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              ) : (
                <CardContent>
                  <Typography textAlign="center">No images available</Typography>
                </CardContent>
              )}
            </Card>
          </Grid>

          {/* Details Section */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
                  Vehicle Details
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography><strong>Price:</strong> {data.Price}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography><strong>Fuel Type:</strong> {data.Fuel}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography><strong>Vehicle Type:</strong> {data.Vehicletype}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography><strong>Transmission:</strong> {data.Transmissiontype}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography><strong>Mileage:</strong> {data.Milage}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography><strong>KMs Run:</strong> {data.CarKmsRun}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography><strong>Owners:</strong> {data.Owners}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography><strong>Insurance:</strong> {data.Insurance}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography><strong>VIN:</strong> {data.Vehiclenumber}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography><strong>RC Book:</strong> {data.RCBookNumber}</Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Additional Details
                    </Typography>
                    <Typography color="textSecondary">
                      {data.MoreDetails}
                    </Typography>
                  </Grid>
                </Grid>
                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: "#1976D2",
                      "&:hover": { bgcolor: "#1565C0" }
                    }}
                  >
                    Inquiry
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderColor: "#1976D2",
                      color: "#1976D2",
                      "&:hover": { borderColor: "#1565C0", color: "#1565C0" }
                    }}
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default CarDetails;