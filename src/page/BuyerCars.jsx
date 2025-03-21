import React, { useState } from "react";
import { TextField, Card, CardContent, Typography, Container, Grid, CardMedia, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const cars = [
  { id: 1, name: "Tesla Model S", image: "https://source.unsplash.com/400x300/?tesla", price: "80,000" },
  { id: 2, name: "Ford Mustang", image: "https://source.unsplash.com/400x300/?mustang", price: "55,000" },
  { id: 3, name: "Chevrolet Camaro", image: "https://source.unsplash.com/400x300/?camaro", price: "50,000"},
  { id: 4, name: "BMW M3", image: "https://source.unsplash.com/400x300/?bmw", price: "75,000"},
  { id: 5, name: "Audi R8", image: "https://source.unsplash.com/400x300/?audi", price: "150,000"},
  { id: 6, name: "Mercedes-Benz C-Class", image: "https://source.unsplash.com/400x300/?mercedes", price: "60,000"}
];

const CarSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ bgcolor: '#0d1b2a', color: 'white', minHeight: '100vh', py: 4 }}>
      <Typography variant="h3" align="center" sx={{ mt: 2, mb: 3, fontWeight: 'bold',}}>
        Discover Your Perfect Ride
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search for cars..."
          sx={{ width: '400px', mr: 2, bgcolor: 'white', borderRadius: 3 }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" color="primary" startIcon={<SearchIcon />} sx={{ borderRadius: 3, px: 4, fontSize: '1rem' }}>
          Search
        </Button>
      </Box>
      <Grid container spacing={3} mt={3}>
        {filteredCars.map(car => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <Card sx={{ bgcolor: '#1b263b', color: 'white', borderRadius: 2, boxShadow: 5 }}>
              <CardMedia
                component="img"
                height="200"
                image={car.image}
                alt={car.name}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{car.name}</Typography>
                <Typography variant="body1">Price: {car.price}</Typography>
                <Button variant="contained" sx={{ mt: 1, mr: 1, bgcolor: '#003366', color: 'white', '&:hover': { bgcolor: '#002855' } }}>
                  More Details
                </Button>
                <Button variant="contained" sx={{ mt: 1, bgcolor: '#003366', color: 'white', '&:hover': { bgcolor: '#002855' } }}>
                  Contact
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CarSearchPage;


