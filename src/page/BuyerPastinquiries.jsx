// // BuyerPastInquiries.js
// import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import { Box, Container } from '@mui/material';

// const inquiries = [
//   {
//     id: 1,
//     VehicleModel: "Civic",
//     Price: '₹18,50,000',
//     Brand: "Honda",
//     Insurance: "Active",
//     CarKmsRun: "30,000 km",
//     Milage: "17 kmpl",
//     Vehiclenumber: "HND123",
//     RCBookNumber: "CIV456",
//     Owners: "1",
//     Fuel: "Petrol",
//     Vehicletype: "Sedan",
//     Transmissiontype: "Automatic",
//     MoreDetails: "Well-maintained family car",
//     image: "https://source.unsplash.com/400x300/?honda-civic"
//   },
//   {
//     id: 2,
//     VehicleModel: "i20",
//     Price: '₹18,50,000',
//     Brand: "Hyundai",
//     Insurance: "Active",
//     CarKmsRun: "25,000 km",
//     Milage: "19 kmpl",
//     Vehiclenumber: "HYN456",
//     RCBookNumber: "I20789",
//     Owners: "1",
//     Fuel: "Petrol",
//     Vehicletype: "Hatchback",
//     Transmissiontype: "Manual",
//     MoreDetails: "Sporty hatchback",
//     image: "https://source.unsplash.com/400x300/?hyundai-i20"
//   },
//   {
//     id: 3,
//     VehicleModel: "Glanza",
//     Price: '₹18,50,000',
//     Brand: "Toyota",
//     Insurance: "Active",
//     CarKmsRun: "15,000 km",
//     Milage: "20 kmpl",
//     Vehiclenumber: "TOY789",
//     RCBookNumber: "GLZ012",
//     Owners: "1",
//     Fuel: "Petrol",
//     Vehicletype: "Hatchback",
//     Transmissiontype: "Automatic",
//     MoreDetails: "Fuel-efficient compact car",
//     image: "https://source.unsplash.com/400x300/?toyota-glanza"
//   },
//   {
//     id: 4,
//     VehicleModel: "Brezza",
//     Price: '₹18,50,000',
//     Brand: "Maruti Suzuki",
//     Insurance: "Active",
//     CarKmsRun: "20,000 km",
//     Milage: "18 kmpl",
//     Vehiclenumber: "MAR012",
//     RCBookNumber: "BRZ345",
//     Owners: "1",
//     Fuel: "Petrol",
//     Vehicletype: "SUV",
//     Transmissiontype: "Manual",
//     MoreDetails: "Compact SUV with great mileage",
//     image: "https://source.unsplash.com/400x300/?maruti-brezza"
//   },
//   {
//     id: 5,
//     VehicleModel: "Thar",
//     Price: '₹18,50,000',
//     Brand: "Mahindra",
//     Insurance: "Active",
//     CarKmsRun: "10,000 km",
//     Milage: "15 kmpl",
//     Vehiclenumber: "MAH345",
//     RCBookNumber: "THR678",
//     Owners: "1",
//     Fuel: "Diesel",
//     Vehicletype: "SUV",
//     Transmissiontype: "Manual",
//     MoreDetails: "Rugged off-road vehicle",
//     image: "https://source.unsplash.com/400x300/?mahindra-thar"
//   },
// ];

// export default function BuyerPastInquiries() {
//   const navigate = useNavigate();

//   const handleViewDetails = (inquiry) => {
//     navigate("/CarDetails/", { state: { carData: inquiry } });
//   };

//   return (
//     <Box sx={{ p: 4, backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
//       <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#0D47A1' }}>
//         Past Inquiries
//       </Typography>
//       <Container>
//         <Grid container spacing={2} mt={3} justifyContent="center">
//           {inquiries.map((inquiry) => (
//             <Grid item xs={12} sm={6} md={4} key={inquiry.id}>
//               <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 6, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
//                 <CardMedia
//                   component="img"
//                   height="250"
//                   image={inquiry.image}
//                   alt={inquiry.VehicleModel}
//                 />
//                 <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
//                   <Typography gutterBottom variant="h5" component="div" fontWeight="bold" color="primary">
//                     {inquiry.VehicleModel}
//                   </Typography>
//                   <Typography variant="h6" color="text.secondary">
//                     Price: {inquiry.Price}
//                   </Typography>
//                 </CardContent>
//                 <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
//                   <Button 
//                     variant="contained" 
//                     color="primary" 
//                     sx={{ borderRadius: 3, px: 3 }}
//                     onClick={() => handleViewDetails(inquiry)}
//                   >
//                     More Details
//                   </Button>
//                   <Button variant="outlined" color="secondary" sx={{ borderRadius: 3, px: 3 }}>
//                     Inquiry
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

// BuyerPastInquiries.js
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { 
  Box, 
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
    Price: '₹18,50,000',
    Brand: "Honda",
    Insurance: "Active",
    CarKmsRun: "30,000 km",
    Milage: "17 kmpl",
    Vehiclenumber: "HND123",
    RCBookNumber: "CIV456",
    Owners: "1",
    Fuel: "Petrol",
    Vehicletype: "Sedan",
    Transmissiontype: "Automatic",
    MoreDetails: "Well-maintained family car",
    image: "https://source.unsplash.com/400x300/?honda-civic",
    seller: { name: 'Ravi Sharma', email: 'ravi@example.com', phone: '+91 98765 43210', location: 'Mumbai' }
  },
  {
    id: 2,
    VehicleModel: "i20",
    Price: '₹18,50,000',
    Brand: "Hyundai",
    Insurance: "Active",
    CarKmsRun: "25,000 km",
    Milage: "19 kmpl",
    Vehiclenumber: "HYN456",
    RCBookNumber: "I20789",
    Owners: "1",
    Fuel: "Petrol",
    Vehicletype: "Hatchback",
    Transmissiontype: "Manual",
    MoreDetails: "Sporty hatchback",
    image: "https://source.unsplash.com/400x300/?hyundai-i20",
    seller: { name: 'Priya Patel', email: 'priya@example.com', phone: '+91 87654 32109', location: 'Ahmedabad' }
  },
  {
    id: 3,
    VehicleModel: "Glanza",
    Price: '₹18,50,000',
    Brand: "Toyota",
    Insurance: "Active",
    CarKmsRun: "15,000 km",
    Milage: "20 kmpl",
    Vehiclenumber: "TOY789",
    RCBookNumber: "GLZ012",
    Owners: "1",
    Fuel: "Petrol",
    Vehicletype: "Hatchback",
    Transmissiontype: "Automatic",
    MoreDetails: "Fuel-efficient compact car",
    image: "https://source.unsplash.com/400x300/?toyota-glanza",
    seller: { name: 'Amit Kumar', email: 'amit@example.com', phone: '+91 76543 21098', location: 'Delhi' }
  },
  {
    id: 4,
    VehicleModel: "Brezza",
    Price: '₹18,50,000',
    Brand: "Maruti Suzuki",
    Insurance: "Active",
    CarKmsRun: "20,000 km",
    Milage: "18 kmpl",
    Vehiclenumber: "MAR012",
    RCBookNumber: "BRZ345",
    Owners: "1",
    Fuel: "Petrol",
    Vehicletype: "SUV",
    Transmissiontype: "Manual",
    MoreDetails: "Compact SUV with great mileage",
    image: "https://source.unsplash.com/400x300/?maruti-brezza",
    seller: { name: 'Sneha Gupta', email: 'sneha@example.com', phone: '+91 65432 10987', location: 'Bangalore' }
  },
  {
    id: 5,
    VehicleModel: "Thar",
    Price: '₹18,50,000',
    Brand: "Mahindra",
    Insurance: "Active",
    CarKmsRun: "10,000 km",
    Milage: "15 kmpl",
    Vehiclenumber: "MAH345",
    RCBookNumber: "THR678",
    Owners: "1",
    Fuel: "Diesel",
    Vehicletype: "SUV",
    Transmissiontype: "Manual",
    MoreDetails: "Rugged off-road vehicle",
    image: "https://source.unsplash.com/400x300/?mahindra-thar",
    seller: { name: 'Vikram Singh', email: 'vikram@example.com', phone: '+91 54321 09876', location: 'Jaipur' }
  },
];

export default function BuyerPastInquiries() {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  const handleViewDetails = (inquiry) => {
    navigate("/CarDetails/", { state: { carData: inquiry } });
  };

  const handleInquiry = (inquiry) => {
    setSelectedInquiry(inquiry);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedInquiry(null);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#0D47A1' }}>
        Past Inquiries
      </Typography>
      <Container>
        <Grid container spacing={2} mt={3} justifyContent="center">
          {inquiries.map((inquiry) => (
            <Grid item xs={12} sm={6} md={4} key={inquiry.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 6, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={inquiry.image}
                  alt={inquiry.VehicleModel}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" component="div" fontWeight="bold" color="primary">
                    {inquiry.VehicleModel}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Price: {inquiry.Price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ borderRadius: 3, px: 3 }}
                    onClick={() => handleViewDetails(inquiry)}
                  >
                    More Details
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="secondary" 
                    sx={{ borderRadius: 3, px: 3 }}
                    onClick={() => handleInquiry(inquiry)}
                  >
                    Inquiry
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Inquiry Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: '#1976D2', color: 'white', textAlign: 'center' }}>
          Seller Profile - {selectedInquiry?.VehicleModel}
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          {selectedInquiry && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar sx={{ width: 80, height: 80, mb: 2, bgcolor: '#1976D2' }}>
                {selectedInquiry.seller.name[0]}
              </Avatar>
              <Typography variant="h6" gutterBottom>
                {selectedInquiry.seller.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Email:</strong> {selectedInquiry.seller.email}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Phone:</strong> {selectedInquiry.seller.phone}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Location:</strong> {selectedInquiry.seller.location}
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