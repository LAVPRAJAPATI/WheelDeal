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
    Name: "Yash",
    Mobile: "1234567890",
    email: "a@gmail.com",
    VehicleModel: "Civic",
  },
  {
    Name: "Krish",
    Mobile: "2134567890",
    email: "b@gmail.com",
    VehicleModel: "i20",
  },
  {
    Name: "Raj",
    Mobile: "2124567890",
    email: "c@gmail.com",
    VehicleModel: "Glanza",
  },
  {
    Name: "Kush",
    Mobile: "2314567890",
    email: "d@gmail.com",
    VehicleModel: "Brezza",
  },
  {
    Name: "Jay",
    Mobile: "1334567890",
    email: "e@gmail.com",
    VehicleModel: "Thar",
  },
];

export default function BuyerPastInquiries() {
  return (
    <Box sx={{ p: 4, backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#0D47A1' }}>
        Past Inquiries
      </Typography>
      <Container>
      <Grid container spacing={2} justifyContent="center">
        {inquiries.map((inquiry, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 280, borderRadius: 2, boxShadow: 4, transition: '0.3s', backgroundColor: '#FAFAFA', color: '#757575', '&:hover': { boxShadow: 8 } }}>
              <CardMedia
                component="img"
                height="120"
                image="https://source.unsplash.com/featured/?car"
                alt={inquiry.VehicleModel}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#1976D2' }}>
                  {inquiry.VehicleModel}
                </Typography>
                <Typography variant="body2" sx={{ color: '#757575' }}>
                  <strong>Seller Name:</strong> {inquiry.Name}<br/>
                  <strong>Mobile:</strong> {inquiry.Mobile}<br/>
                  <strong>Email:</strong> {inquiry.email}<br/>
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', bgcolor: '#E0E0E0' }}>
                <Button variant="contained" sx={{ bgcolor: '#1976D2', color: '#FFFFFF', '&:hover': { bgcolor: '#1565C0' } }}>More Details</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  );
}