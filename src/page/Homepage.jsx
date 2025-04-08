import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
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

function Homepage() {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [featuredCars, setFeaturedCars] = useState([]);
  const [sellerDetails, setSellerDetails] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "RegisterVehicle"));
        const carsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const imageSrc =
            Array.isArray(data.Image) && data.Image.length > 0
              ? data.Image[0]
              : "/images/default-car.jpg";

          return {
            id: doc.id,
            ...data,
            image: imageSrc,
          };
        });

        setFeaturedCars(carsData.slice(0, 6));
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
    const buyerEmail = localStorage.getItem("userEmail");
    const userRole = localStorage.getItem("userRole");

    if (!buyerEmail || userRole !== "buyer") {
      alert("Please log in as a buyer to make an inquiry.");
      navigate("/Buyer/Login");
      return;
    }

    try {
      const buyerPastInquiriesRef = collection(db, "buyer_pastinquiry");
      const sellerInquiriesRef = collection(db, "seller_inquiry");

      const existingInquiryQuery = query(
        buyerPastInquiriesRef,
        where("vehicleId", "==", car.id),
        where("buyerEmail", "==", buyerEmail)
      );
      const existingInquirySnapshot = await getDocs(existingInquiryQuery);

      let sellerData = null;

      if (car.sellerId) {
        const sellerDocRef = doc(db, "seller_registration", car.sellerId);
        const sellerDocSnap = await getDoc(sellerDocRef);
        if (sellerDocSnap.exists()) {
          const sellerDocData = sellerDocSnap.data();
          sellerData = {
            Name: sellerDocData.Name || "N/A",
            Email: sellerDocData.Email || "N/A",
            Number: sellerDocData.Mobile || "N/A",
          };
        }
      }

      setSellerDetails(sellerData);
      setSelectedCar(car);
      setOpenDialog(true);

      if (!existingInquirySnapshot.empty) {
        alert("You have already made an inquiry for this vehicle.");
        return;
      }

      const inquiryData = {
        vehicleId: car.id,
        VehicleModel: car.VehicleModel,
        price: car.Price,
        timestamp: new Date(),
        sellerEmail: sellerData?.Email || "N/A",
        sellerId: car.sellerId || "Unknown",
        sellerName: sellerData?.Name || "N/A",
        sellerPhone: sellerData?.Number || "N/A",
        buyerEmail: buyerEmail,
      };

      await addDoc(buyerPastInquiriesRef, inquiryData);
      await addDoc(sellerInquiriesRef, inquiryData);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
    }
  };

  const handleBuyNow = async (car) => {
    const buyerEmail = localStorage.getItem("userEmail");
    const userRole = localStorage.getItem("userRole");

    if (!buyerEmail || userRole !== "buyer") {
      alert("Please log in as a buyer to proceed with purchase.");
      navigate("/Buyer/Login");
      return;
    }

    try {
      const amount = parseFloat(car.Price) ; // in paise

      const options = {
        key: "rzp_test_13Q0Lcg00AjXFM", // Replace with your Razorpay Key ID
        amount: amount,
        currency: "INR",
        name: "WheelDeal",
        description: `Buying ${car.VehicleModel}`,
        image: "/logo.png",
        handler: async function (response) {
          alert("Payment Successful! ID: " + response.razorpay_payment_id);

          // Save the order to Firestore
          await addDoc(collection(db, "orders"), {
            carId: car.id,
            carModel: car.VehicleModel,
            buyerEmail: buyerEmail,
            paymentId: response.razorpay_payment_id,
            amount: amount / 100,
            timestamp: new Date(),
          });
        },
        prefill: {
          email: buyerEmail,
        },
        theme: {
          color: "#1976d2",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCar(null);
    setSellerDetails(null);
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
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Welcome to WheelDeal
          </Typography>
          <Typography variant="h5" paragraph>
            Your one-stop destination for buying and selling cars
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 10 }} maxWidth="lg">
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
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
                    image={car.image}
                    alt={car.VehicleModel}
                    sx={{ height: 250 }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/default-car.jpg";
                    }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h5" fontWeight="bold" color="primary">
                      {car.VehicleModel}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Price: ₹{car.Price}
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
            <Typography variant="h6" align="center" sx={{ mt: 4 }}>
              No featured cars available.
            </Typography>
          )}
        </Grid>
      </Container>

      <Dialog open={openDialog} onClose={handleCloseDialog} PaperComponent={Paper}>
        <DialogTitle sx={{ backgroundColor: "#1976d2", color: "white", textAlign: "center" }}>
          Seller Details
        </DialogTitle>
        <DialogContent dividers>
          {sellerDetails ? (
            <Box textAlign="center" p={2}>
              <Avatar sx={{ bgcolor: "#1976d2", width: 56, height: 56, margin: "0 auto" }}>
                {sellerDetails.Name?.charAt(0) || "S"}
              </Avatar>
              <Typography mt={2} variant="h6" fontWeight="bold">
                {sellerDetails.Name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {sellerDetails.Email}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {sellerDetails.Number}
              </Typography>
            </Box>
          ) : (
            <Typography>Loading seller details...</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
            About Us
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary">
            WheelDeal is a car listing platform designed to connect buyers and sellers
            seamlessly. We provide a transparent and easy-to-use interface where users
            can browse, list, and inquire about vehicles.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "primary.dark", color: "white", p: 6, textAlign: "center" }} component="footer">
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
    </div>
  );
}

export default Homepage;
