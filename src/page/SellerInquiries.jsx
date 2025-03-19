import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const inquiries = [
  {
    Name: "Yash",
    Mobile: "1234567890",
    email: "a@gmail.com",
    VehicleModel: "civic",
  },
  {
    Name: "krish",
    Mobile: "2134567890",
    email: "b@gmail.com",
    VehicleModel: "i20",
  },
  {
    Name: "raj",
    Mobile: "2124567890",
    email: "c@gmail.com",
    VehicleModel: "glanza",
  },
  {
    Name: "kush",
    Mobile: "2314567890",
    email: "d@gmail.com",
    VehicleModel: "brezza",
  },
  {
    Name: "jay",
    Mobile: "1334567890",
    email: "e@gmail.com",
    VehicleModel: "thar",
  },
];

export default function SellerInquiries() {
  return (
    <Grid container spacing={2}>
      {inquiries.map((inquiry, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {inquiry.VehicleModel}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <strong>BuyerName:</strong>{inquiry.Name}<br/>
                <strong>Mobile:</strong> {inquiry.Mobile}<br/>
                <strong>Email:</strong> {inquiry.email}<br/>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">more details</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

