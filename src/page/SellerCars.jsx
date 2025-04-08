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
  Button,
} from "@mui/material";
import { db, auth } from "../config/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function SellerCars() {
  const [carList, setCarList] = useState([]);
  const navigate = useNavigate(); // 👈 Add this

  useEffect(() => {
    const fetchSellerCars = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const sellerQuery = query(
          collection(db, "seller_registration"),
          where("Email", "==", user.email)
        );
        const sellerSnap = await getDocs(sellerQuery);
        if (sellerSnap.empty) {
          console.log("Seller not found.");
          return;
        }
        const sellerDoc = sellerSnap.docs[0];
        const sellerId = sellerDoc.id;

        const vehiclesQuery = query(
          collection(db, "RegisterVehicle"),
          where("sellerId", "==", sellerId)
        );
        const vehicleSnap = await getDocs(vehiclesQuery);
        const vehicleData = vehicleSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCarList(vehicleData);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchSellerCars();
  }, []);

  const handleRemoveCar = async (id) => {
    if (!window.confirm("Are you sure you want to delete this vehicle?")) return;

    try {
      await deleteDoc(doc(db, "RegisterVehicle", id));
      setCarList((prev) => prev.filter((vehicle) => vehicle.id !== id));
      alert("Vehicle removed successfully!");
    } catch (error) {
      console.error("Error removing vehicle:", error);
      alert("Failed to remove vehicle. Try again later.");
    }
  };

  const handleViewDetails = (vehicle) => {
    navigate("/CarDetails", { state: { carData: vehicle } }); // 👈 Navigate to CarDetails
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "white", minHeight: "100vh" }}>
      <Container>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#0D47A1" }}
        >
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
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={
                      Array.isArray(vehicle.Image) && vehicle.Image.length > 0
                        ? vehicle.Image[0]
                        : "/images/default-car.jpg"
                    }
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
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{ borderRadius: 3, px: 3 }}
                      onClick={() => handleViewDetails(vehicle)} // 👈 Handle view details
                    >
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
