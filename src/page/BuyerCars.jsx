import React, { useState } from "react";
import { TextField, Card, CardContent, Typography, Container, Grid, CardMedia, Box, Button, CardActions } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const cars = [
  { id: 1, VehicleModel: "Tesla Model S", image: "https://source.unsplash.com/400x300/?tesla", price: "80,000" },
  { id: 2, VehicleModel: "Ford Mustang", image: "https://source.unsplash.com/400x300/?mustang", price: "55,000" },
  { id: 3, VehicleModel: "Chevrolet Camaro", image: "https://source.unsplash.com/400x300/?camaro", price: "50,000"},
  { id: 4, VehicleModel: "BMW M3", image: "https://source.unsplash.com/400x300/?bmw", price: "75,000"},
  { id: 5, VehicleModel: "Audi R8", image: "https://source.unsplash.com/400x300/?audi", price: "150,000"},
  { id: 6, VehicleModel: "Mercedes-Benz C-Class", image: "https://source.unsplash.com/400x300/?mercedes", price: "60,000"}
];

function BuyerCars() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div sx={{ bgcolor: 'white', color: 'white', minHeight: '100vh', py: 4 }}>
      <Typography 
        variant="h3" 
        align="center" 
        sx={{ mt: 2, mb: 3, fontWeight: 'bold', color: '#0D47A1' }}
      >
        Discover Your Perfect Ride
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search for cars..."
          sx={{ 
            width: '400px', 
            mr: 2, 
            bgcolor: '#FFFFFF',
            borderRadius: 3,
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#1976D2' },
              '&:hover fieldset': { borderColor: '#1565C0' },
              '&.Mui-focused fieldset': { borderColor: '#1976D2' },
            },
            '& .MuiInputBase-input': { color: '#757575' },
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<SearchIcon />} 
          sx={{ borderRadius: 3, px: 4, fontSize: '1rem' }}
        >
          Search
        </Button>
      </Box>
      <Container  maxWidth="lg">
        <Grid container spacing={3} mt={3}>
          {filteredCars.map(car => (
            <Grid item xs={12} sm={6} md={4} key={car.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 6, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia
                  component="img"
                  height="250" // Matches Homepage
                  image={car.image}
                  alt={car.VehicleModel}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}> {/* Matches Homepage */}
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    fontWeight="bold" 
                    color="primary" // Matches Homepage #1976D2
                  >
                    {car.name}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color="text.secondary" // Matches Homepage #757575
                  >
                    Price: {car.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}> {/* Matches Homepage */}
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ borderRadius: 3, px: 3 }} // Matches Homepage
                  >
                    More Details
                  </Button>
                  <Button 
                    variant="outlined" // Changed from contained to match Homepage
                    color="secondary" 
                    sx={{ borderRadius: 3, px: 3 }} // Matches Homepage
                  >
                    Inquiry
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default BuyerCars;
