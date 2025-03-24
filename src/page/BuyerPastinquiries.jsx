import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/material';

const inquiries = [
  {
    VehicleModel: "Civic",
     price: '₹18,50,000'
  },
  {
    VehicleModel: "i20",
    price: '₹18,50,000'
  },
  {
    VehicleModel: "Glanza",
     price: '₹18,50,000'
  },
  {
   VehicleModel: "Brezza",
    price: '₹18,50,000'
  },
  {
    VehicleModel: "Thar",
     price: '₹18,50,000'
  },
];

export default function BuyerPastInquiries() {
  return (
    <Box sx={{ p: 4, backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#0D47A1' }}>
        Past Inquiries
      </Typography>
      <Container>
        <Grid container spacing={2}   mt={3} justifyContent="center">
          {inquiries.map((inquiry, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 6, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia
                  component="img"
                  height="250" // Matches Homepage
                  image="https://source.unsplash.com/featured/?car"
                  alt={inquiry.VehicleModel}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}> {/* Matches Homepage */}
                  <Typography gutterBottom variant="h5" component="div" fontWeight="bold" color="primary"> {/* Matches Homepage */}
                    {inquiry.VehicleModel}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Price:{inquiry.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}> {/* Matches Homepage */}
                  <Button variant="contained" color="primary" sx={{ borderRadius: 3, px: 3 }}> {/* Matches Homepage */}
                    More Details
                  </Button>
                  <Button variant="outlined" color="secondary" sx={{ borderRadius: 3, px: 3 }}> {/* Matches Homepage */}
                    Inquiry
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