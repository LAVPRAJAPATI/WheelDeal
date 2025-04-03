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
import { db } from '../config/firebase'; // Import Firebase
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function BuyerPastInquiries() {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [inquiries, setInquiries] = useState([]);
  const buyerEmail = "buyer@example.com"; // Replace with logged-in buyer's email

  useEffect(() => {
    const fetchBuyerInquiries = async () => {
      try {
        const q = query(collection(db, "BuyerPastInquiries"), where("buyerEmail", "==", buyerEmail));
        const querySnapshot = await getDocs(q);
        const inquiriesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setInquiries(inquiriesData);
      } catch (error) {
        console.error("Error fetching buyer inquiries:", error);
      }
    };

    fetchBuyerInquiries();
  }, [buyerEmail]);

  const handleViewDetails = (inquiry) => {
    navigate("/CarDetails/", { state: { carData: inquiry } });
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
                  image={inquiry.image || "/images/default-car.jfif"}
                  alt={inquiry.VehicleModel}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" component="div" fontWeight="bold" color="primary">
                    {inquiry.vehicleModel}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Price: {inquiry.price}
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
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

