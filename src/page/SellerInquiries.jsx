import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, AppBar, Toolbar, Container } from '@mui/material';

const inquiries = [
  {
    VehicleModel: "Civic",
    price: "28,00,000"
  },
  {
    VehicleModel: "i20",
    price: "8,00,000"
  },
  {
    VehicleModel: "Glanza",
    price: "9,00,000"
  },
  {
    VehicleModel: "Brezza",
    price: "6,00,000"
  },
  {
    VehicleModel: "Thar",
    price: "12,00,000"
  },
];

export default function SellerInquiries() {
  return (
    <Box sx={{ p: 4, backgroundColor: 'white', minHeight: '100vh' }}>
      <Container  >
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#0D47A1' }}>
          Seller Inquiries
        </Typography>
        <Grid container  spacing={2}  mt={3} justifyContent="center">
          {inquiries.map((inquiry, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}> {/* Changed to xs={4} for 3 cards per row */}
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 6, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://source.unsplash.com/featured/?car"
                  alt={inquiry.VehicleModel}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5"  fontWeight="bold" color="primary">
                    {inquiry.VehicleModel}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color="text.secondary" // Matches Homepage #757575
                  >
                    Price: {inquiry.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button variant="contained" color="primary" sx={{ borderRadius: 3, px: 3 }}>
                    More Details
                  </Button>
                  <Button variant="outlined" color="secondary" sx={{ borderRadius: 3, px: 3 }}>
                    Contact Buyer
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