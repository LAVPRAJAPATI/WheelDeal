// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import { Box, AppBar, Toolbar, Container } from '@mui/material';

// const inquiries = [
//   {
//     VehicleModel: "Civic",
//     price: "28,00,000"
//   },
//   {
//     VehicleModel: "i20",
//     price: "8,00,000"
//   },
//   {
//     VehicleModel: "Glanza",
//     price: "9,00,000"
//   },
//   {
//     VehicleModel: "Brezza",
//     price: "6,00,000"
//   },
//   {
//     VehicleModel: "Thar",
//     price: "12,00,000"
//   },
// ];

// export default function SellerInquiries() {
//   return (
//     <Box sx={{ p: 4, backgroundColor: 'white', minHeight: '100vh' }}>
//       <Container  >
//         <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#0D47A1' }}>
//           Seller Inquiries
//         </Typography>
//         <Grid container  spacing={2}  mt={3} justifyContent="center">
//           {inquiries.map((inquiry, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}> {/* Changed to xs={4} for 3 cards per row */}
//               <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 6, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
//                 <CardMedia
//                   component="img"
//                   height="250"
//                   image="https://source.unsplash.com/featured/?car"
//                   alt={inquiry.VehicleModel}
//                 />
//                 <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
//                   <Typography gutterBottom variant="h5"  fontWeight="bold" color="primary">
//                     {inquiry.VehicleModel}
//                   </Typography>
//                   <Typography 
//                     variant="h6" 
//                     color="text.secondary" // Matches Homepage #757575
//                   >
//                     Price: {inquiry.price}
//                   </Typography>
//                 </CardContent>
//                 <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
//                   <Button variant="outlined" color="secondary" sx={{ borderRadius: 3, px: 3 }}>
//                     Contact Buyer
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// SellerInquiries.js
import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { 
  Box, 
  AppBar, 
  Toolbar, 
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar
} from '@mui/material';

const inquiries = [
  {
    id: 1,
    VehicleModel: "Civic",
    price: "28,00,000",
    buyer: { name: 'Amit Sharma', email: 'amit@example.com', phone: '+91 98765 43210', location: 'Mumbai' }
  },
  {
    id: 2,
    VehicleModel: "i20",
    price: "8,00,000",
    buyer: { name: 'Priya Patel', email: 'priya@example.com', phone: '+91 87654 32109', location: 'Ahmedabad' }
  },
  {
    id: 3,
    VehicleModel: "Glanza",
    price: "9,00,000",
    buyer: { name: 'Rahul Kumar', email: 'rahul@example.com', phone: '+91 76543 21098', location: 'Delhi' }
  },
  {
    id: 4,
    VehicleModel: "Brezza",
    price: "6,00,000",
    buyer: { name: 'Sneha Gupta', email: 'sneha@example.com', phone: '+91 65432 10987', location: 'Bangalore' }
  },
  {
    id: 5,
    VehicleModel: "Thar",
    price: "12,00,000",
    buyer: { name: 'Vikram Singh', email: 'vikram@example.com', phone: '+91 54321 09876', location: 'Jaipur' }
  },
];

export default function SellerInquiries() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  const handleContactBuyer = (inquiry) => {
    setSelectedInquiry(inquiry);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedInquiry(null);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: 'white', minHeight: '100vh' }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#0D47A1' }}>
          Seller Inquiries
        </Typography>
        <Grid container spacing={2} mt={3} justifyContent="center">
          {inquiries.map((inquiry) => (
            <Grid item xs={12} sm={6} md={4} key={inquiry.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 6, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://source.unsplash.com/featured/?car"
                  alt={inquiry.VehicleModel}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" fontWeight="bold" color="primary">
                    {inquiry.VehicleModel}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color="text.secondary"
                  >
                    Price: {inquiry.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button 
                    variant="outlined" 
                    color="secondary" 
                    sx={{ borderRadius: 3, px: 3 }}
                    onClick={() => handleContactBuyer(inquiry)}
                  >
                    Contact Buyer
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Buyer Profile Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: '#1976D2', color: 'white', textAlign: 'center' }}>
          Buyer Profile - {selectedInquiry?.VehicleModel}
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          {selectedInquiry && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar sx={{ width: 80, height: 80, mb: 2, bgcolor: '#1976D2' }}>
                {selectedInquiry.buyer.name[0]}
              </Avatar>
              <Typography variant="h6" gutterBottom>
                {selectedInquiry.buyer.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Email:</strong> {selectedInquiry.buyer.email}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Phone:</strong> {selectedInquiry.buyer.phone}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Location:</strong> {selectedInquiry.buyer.location}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button 
            onClick={handleCloseDialog} 
            variant="contained" 
            color="primary" 
            sx={{ borderRadius: 3, px: 3 }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}