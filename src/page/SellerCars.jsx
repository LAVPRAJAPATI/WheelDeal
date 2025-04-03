// import React from 'react';
// import { 
//   Box, 
//   Container, 
//   Typography, 
//   Grid, 
//   Card, 
//   CardMedia, 
//   CardContent, 
//   CardActions, 
//   Button 
// } from '@mui/material';

// // Sample vehicle data
// const vehicles = [
//   {
//     id: 1,
//     VehicleModel: "Civic",
//     price: "28,00,000",
//     image: "/images/civic.jfif"
//   },
//   {
//     id: 2,
//     VehicleModel: "i20",
//     price: "8,00,000",
//     image: "/images/i20.jfif"
//   },
//   {
//     id: 3,
//     VehicleModel: "Glanza",
//     price: "9,00,000",
//     image: "/images/glanza.jfif"
//   },
//   {
//     id: 4,
//     VehicleModel: "Brezza",
//     price: "6,00,000",
//     image: "/images/brezza.jfif"
//   },
//   {
//     id: 5,
//     VehicleModel: "Thar",
//     price: "12,00,000",
//     image: "/images/thar.jfif"
//   },
// ];
 
// function SellerCars() {
//   const [carList, setCarList] = React.useState(vehicles);

//   const handleRemoveCar = (id) => {
//     setCarList((prevList) => prevList.filter((vehicle) => vehicle.id !== id));
//   };

//   return (
//     <Box sx={{ p: 4, backgroundColor: 'white', minHeight: '100vh' }}>
//       <Container>
//         <Typography 
//           variant="h3" 
//           align="center" 
//           gutterBottom 
//           sx={{ fontWeight: 'bold', color: '#0D47A1' }}
//         >
//           My Vehicles
//         </Typography>
//         <Grid container spacing={2} mt={3} justifyContent="center">
//           {carList.map((vehicle) => (
//             <Grid item xs={12} sm={6} md={4} key={vehicle.id}>
//               <Card 
//                 sx={{ 
//                   height: '100%', 
//                   display: 'flex', 
//                   flexDirection: 'column', 
//                   boxShadow: 6, 
//                   borderRadius: 3, 
//                   transition: '0.3s', 
//                   '&:hover': { transform: 'scale(1.05)' } 
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="250"
//                   image={vehicle.image}
//                   alt={vehicle.VehicleModel}
//                 />
//                 <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
//                   <Typography gutterBottom variant="h5" fontWeight="bold" color="primary">
//                     {vehicle.VehicleModel}
//                   </Typography>
//                   <Typography 
//                     variant="h6" 
//                     color="text.secondary"
//                   >
//                     Price: {vehicle.price}
//                   </Typography>
//                 </CardContent>
//                 <CardActions sx={{ justifyContent: 'center', pb: 2, gap: 1 }}>
//                   <Button 
//                     variant="outlined" 
//                     color="secondary" 
//                     sx={{ borderRadius: 3, px: 3 }}
//                   >
//                     View Details
//                   </Button>
//                   <Button 
//                     variant="outlined" 
//                     color="error" 
//                     sx={{ borderRadius: 3, px: 3 }}
//                     onClick={() => handleRemoveCar(vehicle.id)}
//                   >
//                     Remove
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

// export default SellerCars;

import React, { useEffect, useState } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button 
} from "@mui/material";
import { db, auth } from "../config/firebase"; // Firebase auth & Firestore
import { collection, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";

function SellerCars() {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return; // Ensure user is logged in

        const q = query(collection(db, "RegisterVehicle"), where("sellerId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const vehiclesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCarList(vehiclesData);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchCars();
  }, []);

  const handleRemoveCar = async (id) => {
    if (!window.confirm("Are you sure you want to delete this vehicle?")) return;

    try {
      await deleteDoc(doc(db, "RegisterVehicle", id)); // Correct collection name
      setCarList(prevList => prevList.filter(vehicle => vehicle.id !== id)); // Update UI
      alert("Vehicle removed successfully!");
    } catch (error) {
      console.error("Error removing vehicle:", error);
      alert("Failed to remove vehicle. Try again later.");
    }
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "white", minHeight: "100vh" }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#0D47A1" }}>
          My Vehicles
        </Typography>
        <Grid container spacing={2} mt={3} justifyContent="center">
          {carList.length > 0 ? (
            carList.map((vehicle) => (
              <Grid item xs={12} sm={6} md={4} key={vehicle.id}>
                <Card 
                  sx={{ 
                    height: "100%", 
                    display: "flex", 
                    flexDirection: "column", 
                    boxShadow: 6, 
                    borderRadius: 3, 
                    transition: "0.3s", 
                    "&:hover": { transform: "scale(1.05)" } 
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={vehicle.image || "/images/default-car.jpg"} // Default image if none
                    alt={vehicle.VehicleModel}
                  />
                  <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                    <Typography gutterBottom variant="h5" fontWeight="bold" color="primary">
                      {vehicle.VehicleModel}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Price: {vehicle.Price}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center", pb: 2, gap: 1 }}>
                    <Button variant="outlined" color="secondary" sx={{ borderRadius: 3, px: 3 }}>
                      View Details
                    </Button>
                    <Button 
                      variant="outlined" 
                      color="error" 
                      sx={{ borderRadius: 3, px: 3 }}
                      onClick={() => handleRemoveCar(vehicle.id)}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" align="center" sx={{ mt: 4 }}>
              No vehicles registered yet.
            </Typography>
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default SellerCars;

