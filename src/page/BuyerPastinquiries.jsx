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
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import { db } from '../config/firebase';
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from 'firebase/firestore';

export default function BuyerPastInquiries() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState([]);
  const [buyerEmail, setBuyerEmail] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const storedBuyerEmail = localStorage.getItem('userEmail');
    setBuyerEmail(storedBuyerEmail);

    if (storedBuyerEmail) {
      const fetchBuyerInquiries = async () => {
        try {
          const q = query(
            collection(db, 'buyer_pastinquiry'),
            where('buyerEmail', '==', storedBuyerEmail)
          );
          const querySnapshot = await getDocs(q);
          const rawInquiries = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          const enrichedInquiries = await Promise.all(
            rawInquiries.map(async (inquiry) => {
              let vehicleData = {};
              if (inquiry.vehicleId) {
                const vehicleRef = doc(db, 'RegisterVehicle', inquiry.vehicleId);
                const vehicleSnap = await getDoc(vehicleRef);
                if (vehicleSnap.exists()) {
                  const data = vehicleSnap.data();
                  vehicleData = {
                    image: data.Image?.[0] || null,
                    carModel: data.VehicleModel || 'N/A',
                  };
                }
              }

              return {
                ...inquiry,
                ...vehicleData,
              };
            })
          );

          setInquiries(enrichedInquiries);
        } catch (error) {
          console.error('Error fetching buyer inquiries:', error);
        }
      };

      fetchBuyerInquiries();
    }
  }, [buyerEmail]);

  const handleViewDetails = (inquiry) => {
    navigate('/CarDetails/', { state: { carData: inquiry } });
  };

  const handleOpenDialog = (inquiry) => {
    setSelectedSeller(inquiry);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedSeller(null);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#0D47A1' }}
      >
        Past Inquiries
      </Typography>
      <Container>
        <Grid container spacing={2} mt={3} justifyContent="center">
          {inquiries.map((inquiry) => (
            <Grid item xs={12} sm={6} md={4} key={inquiry.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 6,
                  borderRadius: 3,
                  transition: '0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={inquiry.image || '/images/default-car.jfif'}
                  alt={inquiry.carModel || 'Car'}
                  onError={(e) => {
                    e.target.src = '/images/default-car.jfif';
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontWeight="bold"
                    align="center"
                    color="primary"
                  >
                    {inquiry.carModel || 'Car Model N/A'}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    align="center"
                  >
                    Price: {inquiry.price || 'N/A'}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-around', pb: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: 3 }}
                    onClick={() => handleViewDetails(inquiry)}
                  >
                    More Details
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ borderRadius: 3 }}
                    onClick={() => handleOpenDialog(inquiry)}
                  >
                    View Seller Info
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Dialog Box for Seller Info */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Seller Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <strong>Name:</strong> {selectedSeller?.sellerName || 'N/A'}
            <br />
            <strong>Email:</strong> {selectedSeller?.sellerEmail || 'N/A'}
            <br />
            <strong>Phone:</strong> {selectedSeller?.sellerMobile || 'N/A'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
