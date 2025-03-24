import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, Container, Grid, Card, CardMedia, CardContent, CardActions, Box } from '@mui/material';

function Homepage() {
  const featuredCars = [
    { id: 1, VehicleModel: 'Toyota Camry 2021', price: '₹18,50,000', image: 'https://via.placeholder.com/400' },
    { id: 2, VehicleModel: 'Honda Civic 2020', price: '₹15,00,000', image: 'https://via.placeholder.com/400' },
    { id: 3, VehicleModel: 'Ford Mustang 2019', price: '₹25,00,000', image: 'https://via.placeholder.com/400' },
    { id: 4, VehicleModel: 'Maruti Suzuki Swift 2022', price: '₹8,00,000', image: 'https://via.placeholder.com/400' },
    { id: 5, VehicleModel: 'Hyundai Creta 2021', price: '₹14,50,000', image: 'https://via.placeholder.com/400' },
    { id: 6, VehicleModel: 'Tata Harrier 2023', price: '₹20,00,000', image: 'https://via.placeholder.com/400' },
  ];

  return (
    <div>
     
      <Box
        sx={{
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          pt: 12,
          pb: 10,
          textAlign: 'center',
          boxShadow: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom fontWeight="bold" sx={{ textShadow: '3px 3px 6px rgba(0,0,0,0.6)' }}>
            Welcome to WheelDeal
          </Typography>
          <Typography variant="h5" paragraph>
            Your one-stop destination for buying and selling cars
          </Typography>
        </Container>
      </Box>

      {/* Featured Cars Section */}
      <Container sx={{ py: 10 }} maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          Featured Cars
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {featuredCars.map((car) => (
            <Grid item key={car.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 6, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia component="img" image={car.image} alt={car.name} sx={{ height: 250 }} />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" fontWeight="bold" color="primary">
                    {car.VehicleModel}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Price: {car.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button variant="contained" color="primary" sx={{ borderRadius: 3, px: 3 }}>
                    View Details
                  </Button>
                  <Button variant="outlined" color="secondary" sx={{ borderRadius: 3, px: 3 }}>
                   Inquiry
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Us Section */}
      <Box sx={{ bgcolor: 'grey.200', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom fontWeight="bold" color="primary">
            About Us
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" paragraph>
            WheelDeal is a trusted platform dedicated to helping buyers and sellers connect seamlessly in the car marketplace. 
            Our mission is to make car trading easy, transparent, and hassle-free.
          </Typography>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', p: 6, textAlign: 'center' }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          WheelDeal
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Your trusted platform for buying and selling cars
        </Typography>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} WheelDeal. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}

export default Homepage;
