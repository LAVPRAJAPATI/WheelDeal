import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, Container, Grid, Card, CardMedia, CardContent, CardActions, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Homepage = () => {
  const featuredCars = [
    { id: 1, name: 'Toyota Camry 2021', price: '₹18,50,000', image: 'https://via.placeholder.com/400' },
    { id: 2, name: 'Honda Civic 2020', price: '₹15,00,000', image: 'https://via.placeholder.com/400' },
    { id: 3, name: 'Ford Mustang 2019', price: '₹25,00,000', image: 'https://via.placeholder.com/400' },
    { id: 4, name: 'Maruti Suzuki Swift 2022', price: '₹8,00,000', image: 'https://via.placeholder.com/400' },
    { id: 5, name: 'Hyundai Creta 2021', price: '₹14,50,000', image: 'https://via.placeholder.com/400' },
    { id: 6, name: 'Tata Harrier 2023', price: '₹20,00,000', image: 'https://via.placeholder.com/400' },
    { id: 7, name: 'Mahindra Thar 2022', price: '₹18,00,000', image: 'https://via.placeholder.com/400' },
    { id: 8, name: 'Kia Seltos 2022', price: '₹16,00,000', image: 'https://via.placeholder.com/400' },
    { id: 9, name: 'Volkswagen Virtus 2023', price: '₹17,50,000', image: 'https://via.placeholder.com/400' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          pt: 12,
          pb: 10,
          textAlign: 'center',
          boxShadow: 4,
          backdropFilter: 'blur(6px)',
          backgroundBlendMode: 'darken',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <Container maxWidth="md">
          <Typography component="h1" variant="h2" gutterBottom fontWeight="bold" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Welcome to WheelDeal
          </Typography>
          <Typography variant="h5" paragraph>
            Your one-stop destination for buying and selling cars
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <TextField
              variant="outlined"
              placeholder="Search for cars..."
              sx={{ width: '400px', mr: 2, bgcolor: 'white', borderRadius: 3 }}
            />
            <Button variant="contained" color="secondary" startIcon={<SearchIcon />} sx={{ borderRadius: 3, px: 4, fontSize: '1rem' }}>
              Search
            </Button>
          </Box>
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
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 10, borderRadius: 4, background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}>
                <CardMedia
                  component="img"
                  image={car.image}
                  alt={car.name}
                  sx={{ height: 250, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', bgcolor: 'grey.100', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
                  <Typography gutterBottom variant="h5" fontWeight="bold">
                    {car.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {car.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button variant="contained" sx={{ borderRadius: 3, px: 3, bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}>
                    View Details
                  </Button>
                  <Button variant="outlined" color="secondary" sx={{ borderRadius: 3, px: 3 }}>
                    Contact Seller
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Us Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8, textAlign: 'center', borderRadius: 3, boxShadow: 3 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
            About Us
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" paragraph>
            WheelDeal is a trusted platform dedicated to helping buyers and sellers connect seamlessly in the car marketplace. 
            Whether you are looking to buy your dream car or sell your vehicle at the best price, we provide a smooth and secure experience.
            Our mission is to make car trading easy, transparent, and hassle-free.
          </Typography>
        </Container>
      </Box>
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', p: 6, textAlign: 'center', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} component="footer">
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
};

export default Homepage;

