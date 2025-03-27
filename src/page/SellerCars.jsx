import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button 
} from '@mui/material';

// Sample vehicle data
const vehicles = [
  {
    id: 1,
    VehicleModel: "Civic",
    price: "28,00,000",
    image: "https://source.unsplash.com/featured/?car,civic"
  },
  {
    id: 2,
    VehicleModel: "i20",
    price: "8,00,000",
    image: "https://source.unsplash.com/featured/?car,i20"
  },
  {
    id: 3,
    VehicleModel: "Glanza",
    price: "9,00,000",
    image: "https://source.unsplash.com/featured/?car,glanza"
  },
  {
    id: 4,
    VehicleModel: "Brezza",
    price: "6,00,000",
    image: "https://source.unsplash.com/featured/?car,brezza"
  },
  {
    id: 5,
    VehicleModel: "Thar",
    price: "12,00,000",
    image: "https://source.unsplash.com/featured/?car,thar"
  },
];

function SellerCars() {
  const [carList, setCarList] = React.useState(vehicles);

  const handleRemoveCar = (id) => {
    setCarList((prevList) => prevList.filter((vehicle) => vehicle.id !== id));
  };

  return (
    <Box sx={{ p: 4, backgroundColor: 'white', minHeight: '100vh' }}>
      <Container>
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom 
          sx={{ fontWeight: 'bold', color: '#0D47A1' }}
        >
          My Vehicles
        </Typography>
        <Grid container spacing={2} mt={3} justifyContent="center">
          {carList.map((vehicle) => (
            <Grid item xs={12} sm={6} md={4} key={vehicle.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  boxShadow: 6, 
                  borderRadius: 3, 
                  transition: '0.3s', 
                  '&:hover': { transform: 'scale(1.05)' } 
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={vehicle.image}
                  alt={vehicle.VehicleModel}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" fontWeight="bold" color="primary">
                    {vehicle.VehicleModel}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color="text.secondary"
                  >
                    Price: {vehicle.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2, gap: 1 }}>
                  <Button 
                    variant="outlined" 
                    color="secondary" 
                    sx={{ borderRadius: 3, px: 3 }}
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="error" 
                    sx={{ borderRadius: 3, px: 3 }}
                    onClick={() => handleRemoveCar(vehicle.id)}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SellerCars;