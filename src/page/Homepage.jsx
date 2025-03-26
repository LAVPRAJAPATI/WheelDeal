// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, TextField, Container, Grid, Card, CardMedia, CardContent, CardActions, Box } from '@mui/material';

// function Homepage() {
//   const navigate = useNavigate();

//   const featuredCars = [
//     { id: 1, VehicleModel:'Camry 2021', Price:'₹18,50,000', image: 'https://via.placeholder.com/400', Brand:'Toyota', Insurance: 'Active', CarKmsRun: '25,000 km', Milage: '15 kmpl', Vehiclenumber: 'ABC123', RCBookNumber: 'XYZ789', Owners: '1', Fuel: 'Petrol', Vehicletype: 'Sedan', Transmissiontype: 'Automatic', MoreDetails: 'Well-maintained, single owner' },
//     { id: 2, VehicleModel:'Civic 2020', Price:'₹15,00,000', image: 'https://via.placeholder.com/400', Brand:'Honda', Insurance: 'Active', CarKmsRun: '35,000 km', Milage: '17 kmpl', Vehiclenumber: 'DEF456', RCBookNumber: 'PQR012', Owners: '2', Fuel: 'Petrol', Vehicletype: 'Sedan', Transmissiontype: 'Manual', MoreDetails: 'Recently serviced' },
//     { id: 3, VehicleModel:'Mustang 2019',Price:'₹25,00,000', image: 'https://via.placeholder.com/400', Brand:'Ford', Insurance: 'Active', CarKmsRun: '15,000 km', Milage: '12 kmpl', Vehiclenumber: 'GHI789', RCBookNumber: 'STU345', Owners: '1', Fuel: 'Petrol', Vehicletype: 'Coupe', Transmissiontype: 'Automatic', MoreDetails: 'Premium condition' },
//     { id: 4, VehicleModel:'Swift 2022',Price:'₹8,00,000', image: 'https://via.placeholder.com/400', Brand:'Maruti Suzuki', Insurance: 'Active', CarKmsRun: '10,000 km', Milage: '20 kmpl', Vehiclenumber: 'JKL012', RCBookNumber: 'VWX678', Owners: '1', Fuel: 'Petrol', Vehicletype: 'Hatchback', Transmissiontype: 'Manual', MoreDetails: 'Like new' },
//     { id: 5, VehicleModel:'Creta 2021', Price:'₹14,50,000', image: 'https://via.placeholder.com/400', Brand:'Hyundai', Insurance: 'Active', CarKmsRun: '20,000 km', Milage: '18 kmpl', Vehiclenumber: 'MNO345', RCBookNumber: 'YZA901', Owners: '1', Fuel: 'Diesel', Vehicletype: 'SUV', Transmissiontype: 'Automatic', MoreDetails: 'Top variant' },
//     { id: 6, VehicleModel:'Harrier 2023', Price:'₹20,00,000', image: 'https://via.placeholder.com/400', Brand:'Tata', Insurance: 'Active', CarKmsRun: '5,000 km', Milage: '16 kmpl', Vehiclenumber: 'PQR678', RCBookNumber: 'BCD234', Owners: '1', Fuel: 'Diesel', Vehicletype: 'SUV', Transmissiontype: 'Automatic', MoreDetails: 'Brand new condition' },
//   ];

//   const handleViewDetails = (car) => {
//     navigate("/CarDetails/", { state: { carData: car } });
//   };

//   return (
//     <div>
//       <Box
//         sx={{
//           backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(/background.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           color: 'white',
//           pt: 12,
//           pb: 10,
//           textAlign: 'center',
//           boxShadow: 6,
//         }}
//       >
//         <Container maxWidth="md">
//           <Typography variant="h2" gutterBottom fontWeight="bold" sx={{ textShadow: '3px 3px 6px rgba(0,0,0,0.6)' }}>
//             Welcome to WheelDeal
//           </Typography>
//           <Typography variant="h5" paragraph>
//             Your one-stop destination for buying and selling cars
//           </Typography>
//         </Container>
//       </Box>
//       {/* Featured Cars Section */}
//       <Container sx={{ py: 10 }} maxWidth="lg">
//         <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
//           Featured Cars
//         </Typography>
//         <Grid container spacing={4} justifyContent="center">
//           {featuredCars.map((car) => (
//             <Grid item key={car.id} xs={12} sm={6} md={4}>
//               <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 6, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
//                 <CardMedia component="img" image={car.image} alt={car.VehicleModel} sx={{ height: 250 }} />
//                 <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
//                   <Typography gutterBottom variant="h5" fontWeight="bold" color="primary">
//                     {car.VehicleModel}
//                   </Typography>
//                   <Typography variant="h6" color="text.secondary">
//                     Price: {car.Price}
//                   </Typography>
//                 </CardContent>
//                 <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
//                   <Button 
//                     variant="contained" 
//                     color="primary" 
//                     sx={{ borderRadius: 3, px: 3 }}
//                     onClick={() => handleViewDetails(car)}
//                   >
//                     View Details
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
//       {/* About Us Section */}
//       <Box sx={{ bgcolor: 'grey.200', py: 8, textAlign: 'center' }}>
//         <Container maxWidth="md">
//           <Typography variant="h4" align="center" gutterBottom fontWeight="bold" color="primary">
//             About Us
//           </Typography>
//           <Typography variant="body1" align="center" color="text.secondary" paragraph>
//             WheelDeal is a trusted platform dedicated to helping buyers and sellers connect seamlessly in the car marketplace. 
//             Our mission is to make car trading easy, transparent, and hassle-free.
//           </Typography>
//         </Container>
//       </Box>
//       {/* Footer */}
//       <Box sx={{ bgcolor: 'primary.dark', color: 'white', p: 6, textAlign: 'center' }} component="footer">
//         <Typography variant="h6" align="center" gutterBottom>
//           WheelDeal
//         </Typography>
//         <Typography variant="subtitle1" align="center" component="p">
//           Your trusted platform for buying and selling cars
//         </Typography>
//         <Typography variant="body2" align="center">
//           © {new Date().getFullYear()} WheelDeal. All rights reserved.
//         </Typography>
//       </Box>
//     </div>
//   );
// }
// export default Homepage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  TextField, 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar
} from '@mui/material';

function Homepage() {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const featuredCars = [
    { id: 1, VehicleModel:'Camry 2021', Price:'₹18,50,000', image: 'https://via.placeholder.com/400', Brand:'Toyota', Insurance: 'Active', CarKmsRun: '25,000 km', Milage: '15 kmpl', Vehiclenumber: 'ABC123', RCBookNumber: 'XYZ789', Owners: '1', Fuel: 'Petrol', Vehicletype: 'Sedan', Transmissiontype: 'Automatic', MoreDetails: 'Well-maintained, single owner', seller: { name: 'John Doe', email: 'john@example.com', phone: '+91 98765 43210', location: 'Mumbai' } },
    { id: 2, VehicleModel:'Civic 2020', Price:'₹15,00,000', image: 'https://via.placeholder.com/400', Brand:'Honda', Insurance: 'Active', CarKmsRun: '35,000 km', Milage: '17 kmpl', Vehiclenumber: 'DEF456', RCBookNumber: 'PQR012', Owners: '2', Fuel: 'Petrol', Vehicletype: 'Sedan', Transmissiontype: 'Manual', MoreDetails: 'Recently serviced', seller: { name: 'Jane Smith', email: 'jane@example.com', phone: '+91 87654 32109', location: 'Delhi' } },
    { id: 3, VehicleModel:'Mustang 2019',Price:'₹25,00,000', image: 'https://via.placeholder.com/400', Brand:'Ford', Insurance: 'Active', CarKmsRun: '15,000 km', Milage: '12 kmpl', Vehiclenumber: 'GHI789', RCBookNumber: 'STU345', Owners: '1', Fuel: 'Petrol', Vehicletype: 'Coupe', Transmissiontype: 'Automatic', MoreDetails: 'Premium condition', seller: { name: 'Mike Johnson', email: 'mike@example.com', phone: '+91 76543 21098', location: 'Bangalore' } },
    { id: 4, VehicleModel:'Swift 2022',Price:'₹8,00,000', image: 'https://via.placeholder.com/400', Brand:'Maruti Suzuki', Insurance: 'Active', CarKmsRun: '10,000 km', Milage: '20 kmpl', Vehiclenumber: 'JKL012', RCBookNumber: 'VWX678', Owners: '1', Fuel: 'Petrol', Vehicletype: 'Hatchback', Transmissiontype: 'Manual', MoreDetails: 'Like new', seller: { name: 'Priya Sharma', email: 'priya@example.com', phone: '+91 65432 10987', location: 'Chennai' } },
    { id: 5, VehicleModel:'Creta 2021', Price:'₹14,50,000', image: 'https://via.placeholder.com/400', Brand:'Hyundai', Insurance: 'Active', CarKmsRun: '20,000 km', Milage: '18 kmpl', Vehiclenumber: 'MNO345', RCBookNumber: 'YZA901', Owners: '1', Fuel: 'Diesel', Vehicletype: 'SUV', Transmissiontype: 'Automatic', MoreDetails: 'Top variant', seller: { name: 'Rahul Kumar', email: 'rahul@example.com', phone: '+91 54321 09876', location: 'Hyderabad' } },
    { id: 6, VehicleModel:'Harrier 2023', Price:'₹20,00,000', image: 'https://via.placeholder.com/400', Brand:'Tata', Insurance: 'Active', CarKmsRun: '5,000 km', Milage: '16 kmpl', Vehiclenumber: 'PQR678', RCBookNumber: 'BCD234', Owners: '1', Fuel: 'Diesel', Vehicletype: 'SUV', Transmissiontype: 'Automatic', MoreDetails: 'Brand new condition', seller: { name: 'Anita Patel', email: 'anita@example.com', phone: '+91 43210 98765', location: 'Pune' } },
  ];

  const handleViewDetails = (car) => {
    navigate("/CarDetails/", { state: { carData: car } });
  };

  const handleInquiry = (car) => {
    setSelectedCar(car);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCar(null);
  };

  return (
    <div>
      <Box
        sx={{
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          pt: 12,
          pb: 10,
          textAlign: 'center',
          boxShadow: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom fontWeight="bold" sx={{ textShadow: '3px 3px 6px rgba(0,0,0,0.6)' }}>
            Welcome to WheelDeal
          </Typography>
          <Typography variant="h5" paragraph>
            Your one-stop destination for buying and selling cars
          </Typography>
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
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 6, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia component="img" image={car.image} alt={car.VehicleModel} sx={{ height: 250 }} />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" fontWeight="bold" color="primary">
                    {car.VehicleModel}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Price: {car.Price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ borderRadius: 3, px: 3 }}
                    onClick={() => handleViewDetails(car)}
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="secondary" 
                    sx={{ borderRadius: 3, px: 3 }}
                    onClick={() => handleInquiry(car)}
                  >
                    Inquiry
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Us Section */}
      <Box sx={{ bgcolor: 'grey.200', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom fontWeight="bold" color="primary">
            About Us
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" paragraph>
            WheelDeal is a trusted platform dedicated to helping buyers and sellers connect seamlessly in the car marketplace. 
            Our mission is to make car trading easy, transparent, and hassle-free.
          </Typography>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', p: 6, textAlign: 'center' }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          WheelDeal
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Your trusted platform for buying and selling cars
        </Typography>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} WheelDeal. All rights reserved.
        </Typography>
      </Box>

      {/* Inquiry Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: '#1976D2', color: 'white', textAlign: 'center' }}>
          Seller Profile - {selectedCar?.VehicleModel}
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          {selectedCar && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar sx={{ width: 80, height: 80, mb: 2, bgcolor: '#1976D2' }}>
                {selectedCar.seller.name[0]}
              </Avatar>
              <Typography variant="h6" gutterBottom>
                {selectedCar.seller.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Email:</strong> {selectedCar.seller.email}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Phone:</strong> {selectedCar.seller.phone}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Location:</strong> {selectedCar.seller.location}
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
    </div>
  );
}

export default Homepage;