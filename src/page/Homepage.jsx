// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Container,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Box,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Avatar
// } from '@mui/material';
// import { db } from "../config/firebase"; // Import Firestore
// import { collection, getDocs, limit } from "firebase/firestore";

// function Homepage() {
//   const navigate = useNavigate();
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [featuredCars, setFeaturedCars] = useState([]);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "RegisterVehicle"));
//         const carsData = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setFeaturedCars(carsData.slice(0, 6)); // Limit to 6 cars
//       } catch (error) {
//         console.error("Error fetching cars:", error);
//       }
//     };

//     fetchCars();
//   }, []);

//   const handleViewDetails = (car) => {
//     navigate("/CarDetails/", { state: { carData: car } });
//   };

//   const handleInquiry = (car) => {
//     setSelectedCar(car);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setSelectedCar(null);
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
//           {featuredCars.length > 0 ? (
//             featuredCars.map((car) => (
//               <Grid item key={car.id} xs={12} sm={6} md={4}>
//                 <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 6, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
//                   <CardMedia component="img" image={car.image || "/images/default-car.jpg"} alt={car.VehicleModel} sx={{ height: 250 }} />
//                   <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
//                     <Typography gutterBottom variant="h5" fontWeight="bold" color="primary">
//                       {car.VehicleModel}
//                     </Typography>
//                     <Typography variant="h6" color="text.secondary">
//                       Price: {car.Price}
//                     </Typography>
//                   </CardContent>
//                   <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       sx={{ borderRadius: 3, px: 3 }}
//                       onClick={() => handleViewDetails(car)}
//                     >
//                       View Details
//                     </Button>
//                     <Button
//                       variant="outlined"
//                       color="secondary"
//                       sx={{ borderRadius: 3, px: 3 }}
//                       onClick={() => handleInquiry(car)}
//                     >
//                       Inquiry
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))
//           ) : (
//             <Typography variant="h6" align="center" sx={{ mt: 4 }}>
//               No featured cars available.
//             </Typography>
//           )}
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

//       {/* Inquiry Dialog */}
//       <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
//         <DialogTitle sx={{ bgcolor: '#1976D2', color: 'white', textAlign: 'center' }}>
//           Seller Profile - {selectedCar?.VehicleModel}
//         </DialogTitle>
//         <DialogContent sx={{ mt: 2 }}>
//           {selectedCar && (
//             <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//               <Avatar sx={{ width: 80, height: 80, mb: 2, bgcolor: '#1976D2' }}>
//                 {selectedCar.seller?.name?.charAt(0) || "S"}
//               </Avatar>
//               <Typography variant="h6" gutterBottom>
//                 {selectedCar.seller?.name || "Unknown"}
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 <strong>Email:</strong> {selectedCar.seller?.email || "N/A"}
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 <strong>Phone:</strong> {selectedCar.seller?.phone || "N/A"}
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 <strong>Location:</strong> {selectedCar.seller?.location || "N/A"}
//               </Typography>
//             </Box>
//           )}
//         </DialogContent>
//         <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
//           <Button
//             onClick={handleCloseDialog}
//             variant="contained"
//             color="primary"
//             sx={{ borderRadius: 3, px: 3 }}
//           >
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default Homepage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
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
  Avatar,
  Paper,
} from "@mui/material";
import { db } from "../config/firebase"; // Import Firestore
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";

function Homepage() {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [featuredCars, setFeaturedCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "RegisterVehicle"));
        const carsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFeaturedCars(carsData.slice(0, 6)); // Limit to 6 cars
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  const handleViewDetails = (car) => {
    navigate("/CarDetails/", { state: { carData: car } });
  };

  const handleInquiry = async (car) => {
    try {
      const buyerPastInquiriesRef = collection(db, "buyer_pastinquiry");
      const sellerInquiriesRef = collection(db, "seller_inquiry");

      // Check if the inquiry already exists
      const existingInquiryQuery = query(
        buyerPastInquiriesRef,
        where("carId", "==", car.id)
      );
      const existingInquirySnapshot = await getDocs(existingInquiryQuery);

      if (!existingInquirySnapshot.empty) {
        setSelectedCar(car);
        setOpenDialog(true);
        return;
      }

      // Create inquiry data
      const inquiryData = {
        carId: car.id,
        sellerId: car.seller?.id || "Unknown",
        sellerEmail: car.seller?.email || "N/A",
        carModel: car.VehicleModel,
        price: car.Price,
        timestamp: new Date(),
      };

      // Add to both collections
      await addDoc(buyerPastInquiriesRef, inquiryData);
      await addDoc(sellerInquiriesRef, inquiryData);

      setSelectedCar(car);
      setOpenDialog(true);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCar(null);
  };

  return (
    <div>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(/background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          pt: 12,
          pb: 10,
          textAlign: "center",
          boxShadow: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            gutterBottom
            fontWeight="bold"
            sx={{ textShadow: "3px 3px 6px rgba(0,0,0,0.6)" }}
          >
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
          {featuredCars.length > 0 ? (
            featuredCars.map((car) => (
              <Grid item key={car.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 6,
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={car.image || "/images/default-car.jpg"}
                    alt={car.VehicleModel}
                    sx={{ height: 250 }}
                  />
                  <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      fontWeight="bold"
                      color="primary"
                    >
                      {car.VehicleModel}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Price: {car.Price}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center", pb: 2 }}>
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
            ))
          ) : (
            <Typography variant="h6" align="center" sx={{ mt: 4 }}>
              No featured cars available.
            </Typography>
          )}
        </Grid>
      </Container>

      {/* About Us Section */}
      <Box sx={{ bgcolor: "grey.200", py: 8, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            fontWeight="bold"
            color="primary"
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
          >
            WheelDeal is a trusted platform dedicated to helping buyers and
            sellers connect seamlessly in the car marketplace. Our mission is to
            make car trading easy, transparent, and hassle-free.
          </Typography>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: "primary.dark",
          color: "white",
          p: 6,
          textAlign: "center",
        }}
        component="footer"
      >
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

      {/* Enhanced Dialog Box for Seller Details */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperComponent={Paper}
      >
        <DialogTitle
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            textAlign: "center",
          }}
        >
          Seller Details
        </DialogTitle>
        <DialogContent dividers>
          {selectedCar && (
            <Box textAlign="center" p={2}>
              <Avatar
                sx={{
                  bgcolor: "#1976d2",
                  width: 56,
                  height: 56,
                  margin: "0 auto",
                }}
              >
                {selectedCar.seller?.Name?.charAt(0) || "S"}
              </Avatar>
              <Typography mt={2} variant="h6" fontWeight="bold">
                {selectedCar.seller?.Name || "N/A"}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {selectedCar.seller?.email || "N/A"}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {selectedCar.seller?.Number || "N/A"}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            color="primary"
            variant="contained"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Homepage;
