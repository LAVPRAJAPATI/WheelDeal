// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { 
//   TextField, 
//   Card, 
//   CardContent, 
//   Typography, 
//   Container, 
//   Grid, 
//   CardMedia, 
//   Box, 
//   Button, 
//   CardActions,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Avatar
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// const cars = [
//   { id: 1, VehicleModel: "Camry", image: "/images/camry.jfif", Price: "$80,000", Brand: "Toyota", Insurance: "Active", CarKmsRun: "20,000 km", Milage: "N/A", Vehiclenumber: "TES123", RCBookNumber: "TSL789", Owners: "1", Fuel: "Electric", Vehicletype: "Sedan", Transmissiontype: "Automatic", MoreDetails: "High-performance electric vehicle", seller: { name: 'Elon Musk', email: 'elon@tesla.com', phone: '+1 555 0123', location: 'California' } },
//   { id: 2, VehicleModel: "Civic", image: "/images/civic.jfif", Price: "$55,000", Brand: "Honda", Insurance: "Active", CarKmsRun: "30,000 km", Milage: "12 kmpl", Vehiclenumber: "FRD456", RCBookNumber: "MST012", Owners: "2", Fuel: "Petrol", Vehicletype: "Coupe", Transmissiontype: "Manual", MoreDetails: "Classic muscle car", seller: { name: 'James Ford', email: 'james@ford.com', phone: '+1 555 0456', location: 'Detroit' } },
//   { id: 3, VehicleModel: "Mustang", image: "/images/mustang.jfif", Price: "$50,000", Brand: "Ford", Insurance: "Active", CarKmsRun: "25,000 km", Milage: "14 kmpl", Vehiclenumber: "CHV789", RCBookNumber: "CAM345", Owners: "1", Fuel: "Petrol", Vehicletype: "Coupe", Transmissiontype: "Automatic", MoreDetails: "Sporty design", seller: { name: 'Mary Chevy', email: 'mary@chevy.com', phone: '+1 555 0789', location: 'Chicago' } },
//   { id: 4, VehicleModel: "Swift", image: "/images/swift.jfif", Price: "$75,000", Brand: "Maruti Suzuki", Insurance: "Active", CarKmsRun: "15,000 km", Milage: "15 kmpl", Vehiclenumber: "BMW012", RCBookNumber: "M3X678", Owners: "1", Fuel: "Petrol", Vehicletype: "Sedan", Transmissiontype: "Automatic", MoreDetails: "Luxury performance sedan", seller: { name: 'Hans Bauer', email: 'hans@bmw.com', phone: '+49 555 0123', location: 'Munich' } },
//   { id: 5, VehicleModel: "Creta", image: "/images/creta.webp", Price: "$150,000", Brand: "Hyundai", Insurance: "Active", CarKmsRun: "10,000 km", Milage: "13 kmpl", Vehiclenumber: "AUD345", RCBookNumber: "R8Y901", Owners: "1", Fuel: "Petrol", Vehicletype: "Coupe", Transmissiontype: "Automatic", MoreDetails: "Supercar performance", seller: { name: 'Anna Schmidt', email: 'anna@audi.com', phone: '+49 555 0456', location: 'Ingolstadt' } },
//   { id: 6, VehicleModel: "Fortuner", image: "/images/ff.jfif", Price: "$60,000", Brand: "Toyota", Insurance: "Active", CarKmsRun: "18,000 km", Milage: "16 kmpl", Vehiclenumber: "MER678", RCBookNumber: "CCL234", Owners: "1", Fuel: "Petrol", Vehicletype: "Sedan", Transmissiontype: "Automatic", MoreDetails: "Premium luxury sedan", seller: { name: 'Klaus Benz', email: 'klaus@mercedes.com', phone: '+49 555 0789', location: 'Stuttgart' } }
// ];

// function BuyerCars() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null);

//   const filteredCars = cars.filter(car =>
//     car.VehicleModel.toLowerCase().includes(searchTerm.toLowerCase())
//   );

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
//     <div sx={{ bgcolor: 'white', color: 'white', minHeight: '100vh', py: 4 }}>
//       <Box>
//       <Typography 
//           variant="h3" 
//           align="center" 
//           sx={{ 
//             fontWeight: 'bold', 
//             color:"#007bb2",
//             textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
//             letterSpacing: '1px',
//           }}
//         >
//           Discover Your Perfect Ride
//         </Typography>
//         <Typography 
//           variant="h6" 
//           align="center" 
//           sx={{ 
//             color:"#007bb2", 
//             mt: 1,
//             fontStyle: 'italic',
//             opacity: 0.9
//           }}
//         >
//           Find your dream car today!
//         </Typography>
//         </Box>
//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//         <TextField
//           variant="outlined"
//           placeholder="Search for cars..."
//           sx={{ 
//             width: '400px', 
//             mr: 2, 
//             bgcolor: '#FFFFFF',
//             borderRadius: 3,
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': { borderColor: '#1976D2' },
//               '&:hover fieldset': { borderColor: '#1565C0' },
//               '&.Mui-focused fieldset': { borderColor: '#1976D2' },
//             },
//             '& .MuiInputBase-input': { color: '#757575' },
//           }}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Button 
//           variant="contained" 
//           color="primary" 
//           startIcon={<SearchIcon />} 
//           sx={{ borderRadius: 3, px: 4, fontSize: '1rem' }}
//         >
//           Search
//         </Button>
//       </Box>
//       <Container maxWidth="lg">
//         <Grid container spacing={3} mt={3}>
//           {filteredCars.map(car => (
//             <Grid item xs={12} sm={6} md={4} key={car.id}>
//               <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 6, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
//                 <CardMedia
//                   component="img"
//                   height="250"
//                   image={car.image}
//                   alt={car.VehicleModel}
//                 />
//                 <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
//                   <Typography 
//                     gutterBottom 
//                     variant="h5" 
//                     fontWeight="bold" 
//                     color="primary"
//                   >
//                     {car.VehicleModel}
//                   </Typography>
//                   <Typography 
//                     variant="h6" 
//                     color="text.secondary"
//                   >
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
//                     More Details
//                   </Button>
//                   <Button 
//                     variant="outlined"
//                     color="secondary" 
//                     sx={{ borderRadius: 3, px: 3 }}
//                     onClick={() => handleInquiry(car)}
//                   >
//                     Inquiry
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Inquiry Dialog */}
//       <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
//         <DialogTitle sx={{ bgcolor: '#1976D2', color: 'white', textAlign: 'center' }}>
//           Seller Profile - {selectedCar?.VehicleModel}
//         </DialogTitle>
//         <DialogContent sx={{ mt: 2 }}>
//           {selectedCar && (
//             <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//               <Avatar sx={{ width: 80, height: 80, mb: 2, bgcolor: '#1976D2' }}>
//                 {selectedCar.seller.name[0]}
//               </Avatar>
//               <Typography variant="h6" gutterBottom>
//                 {selectedCar.seller.name}
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 <strong>Email:</strong> {selectedCar.seller.email}
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 <strong>Phone:</strong> {selectedCar.seller.phone}
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 <strong>Location:</strong> {selectedCar.seller.location}
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
// };

// export default BuyerCars;
  


















// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   TextField, 
//   Card, 
//   CardContent, 
//   Typography, 
//   Container, 
//   Grid, 
//   CardMedia, 
//   Box, 
//   Button, 
//   CardActions,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Avatar
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { db } from "../config/firebase"; // Import Firebase
// import { collection, getDocs, addDoc } from "firebase/firestore";

// function BuyerCars() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [cars, setCars] = useState([]);

//   // Fetch vehicles from Firebase
//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "RegisterVehicle"));
//         const vehiclesData = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setCars(vehiclesData);
//       } catch (error) {
//         console.error("Error fetching vehicles:", error);
//       }
//     };

//     fetchCars();
//   }, []);

//   // Filter cars based on search input
//   const filteredCars = cars.filter(car =>
//     car.VehicleModel?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleViewDetails = (car) => {
//     navigate("/CarDetails/", { state: { carData: car } });
//   };

//   const handleInquiry = async (car) => {
//     setSelectedCar(car);
//     setOpenDialog(true);

//     const buyerInquiry = {
//       buyerEmail: "buyer@example.com", // Replace with logged-in buyer's email
//       buyerName: "Buyer Name", // Replace with logged-in buyer's name
//       vehicleId: car.id,
//       vehicleModel: car.VehicleModel,
//       price: car.Price,
//       sellerEmail: car.seller?.email || "N/A",
//       sellerName: car.seller?.name || "Unknown Seller",
//       inquiryDate: new Date().toISOString(),
//     };

//     try {
//       // Add to Buyer Past Inquiries with Firestore generated ID
//       await addDoc(collection(db, "BuyerPastInquiries"), buyerInquiry);

//       // Add to Seller Inquiries
//       await addDoc(collection(db, "SellerInquiries"), buyerInquiry);

//       console.log("Inquiry added successfully!");
//     } catch (error) {
//       console.error("Error adding inquiry:", error);
//     }
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setSelectedCar(null);
//   };

//   return (
//     <div sx={{ bgcolor: 'white', color: 'white', minHeight: '100vh', py: 4 }}>
//       <Box>
//         <Typography 
//           variant="h3" 
//           align="center" 
//           sx={{ fontWeight: 'bold', color:"#007bb2", textShadow: '2px 2px 4px rgba(0,0,0,0.3)', letterSpacing: '1px' }}
//         >
//           Discover Your Perfect Ride
//         </Typography>
//         <Typography 
//           variant="h6" 
//           align="center" 
//           sx={{ color:"#007bb2", mt: 1, fontStyle: 'italic', opacity: 0.9 }}
//         >
//           Find your dream car today!
//         </Typography>
//       </Box>

//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//         <TextField
//           variant="outlined"
//           placeholder="Search for cars..."
//           sx={{ 
//             width: '400px', 
//             mr: 2, 
//             bgcolor: '#FFFFFF',
//             borderRadius: 3,
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': { borderColor: '#1976D2' },
//               '&:hover fieldset': { borderColor: '#1565C0' },
//               '&.Mui-focused fieldset': { borderColor: '#1976D2' },
//             },
//             '& .MuiInputBase-input': { color: '#757575' },
//           }}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Button 
//           variant="contained" 
//           color="primary" 
//           startIcon={<SearchIcon />} 
//           sx={{ borderRadius: 3, px: 4, fontSize: '1rem' }}
//         >
//           Search
//         </Button>
//       </Box>

//       <Container maxWidth="lg">
//         <Grid container spacing={3} mt={3}>
//           {filteredCars.length > 0 ? (
//             filteredCars.map(car => (
//               <Grid item xs={12} sm={6} md={4} key={car.id}>
//                 <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 6, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
//                   <CardMedia
//                     component="img"
//                     height="250"
//                     image={car.image || "/images/default-car.jpg"} // Default image if none
//                     alt={car.VehicleModel}
//                   />
//                   <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
//                     <Typography 
//                       gutterBottom 
//                       variant="h5" 
//                       fontWeight="bold" 
//                       color="primary"
//                     >
//                       {car.VehicleModel}
//                     </Typography>
//                     <Typography 
//                       variant="h6" 
//                       color="text.secondary"
//                     >
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
//                       More Details
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
//             <Typography variant="h6" align="center" sx={{ mt: 4, width: "100%" }}>
//               No vehicles available at the moment.
//             </Typography>
//           )}
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default BuyerCars;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  CardMedia,
  Box,
  Button,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { db } from "../config/firebase";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";

function BuyerCars() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "RegisterVehicle"));
        const vehiclesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCars(vehiclesData);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) =>
    car.VehicleModel?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (car) => {
    navigate("/CarDetails/", { state: { carData: car } });
  };

  const handleInquiry = async (car) => {
    try {
      const buyerEmail = localStorage.getItem("userEmail");
      if (!buyerEmail) {
        alert("Please log in to send an inquiry.");
        return;
      }

      const buyerQuery = query(
        collection(db, "buyer_registration"),
        where("Email", "==", buyerEmail)
      );
      const buyerSnapshot = await getDocs(buyerQuery);
      if (buyerSnapshot.empty) {
        alert("Buyer not found.");
        return;
      }
      const buyerData = buyerSnapshot.docs[0].data();
      const buyerId = buyerData.buyerId;

      const sellerId = car.sellerId;
      const sellerRef = doc(db, "seller_registration", sellerId);
      const sellerSnap = await getDoc(sellerRef);

      if (!sellerSnap.exists()) {
        alert("Seller not found.");
        return;
      }
      const sellerData = sellerSnap.data();

      const existingInquiryQuery = query(
        collection(db, "buyer_pastinquiry"),
        where("vehicleId", "==", car.id),
        where("buyerId", "==", buyerId)
      );
      const existingInquirySnapshot = await getDocs(existingInquiryQuery);
      if (!existingInquirySnapshot.empty) {
        setSelectedCar({
          ...car,
          sellerName: sellerData.Name,
          sellerPhone: sellerData.Mobile,
          sellerEmail: sellerData.Email,
        });
        setOpenDialog(true);
        return;
      }

      const inquiryData = {
        vehicleId: car.id,
        VehicleModel: car.VehicleModel,
        price: car.Price,
        sellerId: sellerId,
        sellerEmail: sellerData.Email,
        buyerId,
        buyerEmail,
        timestamp: new Date(),
      };

      await addDoc(collection(db, "buyer_pastinquiry"), inquiryData);
      await addDoc(collection(db, "seller_inquiry"), inquiryData);

      setSelectedCar({
        ...car,
        sellerName: sellerData.Name,
        sellerPhone: sellerData.Mobile,
        sellerEmail: sellerData.Email,
      });
      setOpenDialog(true);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert("Failed to send inquiry.");
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCar(null);
  };

  return (
    <div sx={{ bgcolor: "white", minHeight: "100vh", py: 4 }}>
      <Box mb={4}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#007bb2",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            letterSpacing: "1px",
          }}
        >
          Discover Your Perfect Ride
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "#007bb2",
            mt: 1,
            fontStyle: "italic",
            opacity: 0.9,
          }}
        >
          Find your dream car today!
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 4 }}>
        <TextField
          variant="outlined"
          placeholder="Search for cars..."
          sx={{
            width: "400px",
            mr: 2,
            bgcolor: "#FFFFFF",
            borderRadius: 3,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#1976D2" },
              "&:hover fieldset": { borderColor: "#1565C0" },
              "&.Mui-focused fieldset": { borderColor: "#1976D2" },
            },
            "& .MuiInputBase-input": { color: "#757575" },
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
          sx={{ borderRadius: 3, px: 4, fontSize: "1rem" }}
        >
          Search
        </Button>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4} mt={3} pb={6}>
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <Grid item xs={12} sm={6} md={4} key={car.id}>
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
                    height="250"
                    image={car.Image?.[0] || "/images/default-car.jpg"}
                    alt={car.VehicleModel}
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
                      More Details
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
            <Typography
              variant="h6"
              align="center"
              sx={{ mt: 4, width: "100%" }}
            >
              No vehicles available at the moment.
            </Typography>
          )}
        </Grid>
      </Container>

      <Dialog open={openDialog} onClose={handleCloseDialog} PaperComponent={Paper}>
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
                {selectedCar.sellerName?.charAt(0) || "S"}
              </Avatar>
              <Typography mt={2} variant="h6" fontWeight="bold">
                {selectedCar.sellerName || "N/A"}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {selectedCar.sellerEmail || "N/A"}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {selectedCar.sellerPhone || "N/A"}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BuyerCars;
