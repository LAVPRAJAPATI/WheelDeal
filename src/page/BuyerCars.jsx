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
        sellerId,
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

  const handleBuyNow = async (car) => {
    const amount = parseFloat(car.Price) ;

    const options = {
      key: "rzp_test_13Q0Lcg00AjXFM", // Replace with your Razorpay Key ID
      amount: amount,
      currency: "INR",
      name: "Car Buyer App",
      description: `Payment for ${car.VehicleModel}`,
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        email: localStorage.getItem("userEmail") || "",
      },
      theme: {
        color: "#1976d2",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
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
          sx={{ color: "#007bb2", mt: 1, fontStyle: "italic", opacity: 0.9 }}
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
                  <CardActions sx={{ flexDirection: "column", gap: 1, pb: 2 }}>
                    <Box sx={{ display: "flex", gap: 1 }}>
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
                    </Box>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ borderRadius: 3, mt: 1, width: "80%" }}
                      onClick={() => handleBuyNow(car)}
                    >
                      Buy Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" align="center" sx={{ mt: 4, width: "100%" }}>
              No vehicles available at the moment.
            </Typography>
          )}
        </Grid>
      </Container>

      <Dialog open={openDialog} onClose={handleCloseDialog} PaperComponent={Paper}>
        <DialogTitle
          sx={{ backgroundColor: "#1976d2", color: "white", textAlign: "center" }}
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
