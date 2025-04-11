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
  DialogActions,
  Avatar
} from '@mui/material';
import { db } from '../config/firebase';
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
  deleteDoc
} from 'firebase/firestore';

export default function BuyerPastInquiries() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState([]);
  const [buyerEmail, setBuyerEmail] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {
    const storedBuyerEmail = localStorage.getItem('userEmail');
    setBuyerEmail(storedBuyerEmail);

    if (storedBuyerEmail) {
      const fetchInquiriesWithDetails = async () => {
        try {
          const q = query(
            collection(db, 'buyer_pastinquiry'),
            where('buyerEmail', '==', storedBuyerEmail)
          );
          const snapshot = await getDocs(q);
          const rawInquiries = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));

          const enrichedInquiries = await Promise.all(
            rawInquiries.map(async (inquiry) => {
              let carDetails = {};
              if (inquiry.vehicleId) {
                const carRef = doc(db, 'RegisterVehicle', inquiry.vehicleId);
                const carSnap = await getDoc(carRef);
                if (carSnap.exists()) {
                  const carData = carSnap.data();
                  carDetails = {
                    ...carData,
                    image: Array.isArray(carData.Image) && carData.Image.length > 0
                      ? carData.Image[0]
                      : "/images/default-car.jpg"
                  };
                }
              }

              let sellerDetails = {};
              if (inquiry.sellerEmail) {
                const sellerQuery = query(
                  collection(db, 'seller_registration'),
                  where('Email', '==', inquiry.sellerEmail)
                );
                const sellerSnapshot = await getDocs(sellerQuery);
                if (!sellerSnapshot.empty) {
                  const sellerData = sellerSnapshot.docs[0].data();
                  sellerDetails = {
                    sellerName: sellerData.Name || "N/A",
                    sellerMobile: sellerData.Mobile || "N/A",
                  };
                }
              }

              return {
                ...inquiry,
                ...carDetails,
                ...sellerDetails
              };
            })
          );

          setInquiries(enrichedInquiries);
        } catch (error) {
          console.error('Error fetching enriched buyer inquiries:', error);
        }
      };

      fetchInquiriesWithDetails();
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, [buyerEmail]);

  const handleViewDetails = (inquiry) => {
    navigate("/CarDetails", { state: { carData: inquiry } });
  };

  const handleOpenDialog = (inquiry) => {
    setSelectedInquiry(inquiry);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedInquiry(null);
  };

  const handleBuyNow = async (inquiry) => {
    const amount = parseInt(inquiry.Price || inquiry.price || 0);
    if (!amount || isNaN(amount)) {
      alert("Invalid price");
      return;
    }

    const options = {
      key: "rzp_test_13Q0Lcg00AjXFM",
      amount: amount * 100,
      currency: "INR",
      name: "Car Buy & Sell",
      description: `Buying ${inquiry.VehicleModel}`,
      image: "/logo.png",
      handler: async function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);

        try {
          // Save order with image
          await addDoc(collection(db, "buyer_orders"), {
            buyerEmail: buyerEmail,
            sellerEmail: inquiry.sellerEmail,
            vehicleId: inquiry.vehicleId,
            price: amount,
            paymentId: response.razorpay_payment_id,
            purchaseDate: new Date().toISOString(),
            image: inquiry.image || "",
            vehicleModel: inquiry.VehicleModel || "Unknown Model"
          });

          // Delete from RegisterVehicle
          await deleteDoc(doc(db, "RegisterVehicle", inquiry.vehicleId));

          // Delete from buyer_pastinquiry
          const pastInquiryQuery = query(
            collection(db, "buyer_pastinquiry"),
            where("buyerEmail", "==", buyerEmail),
            where("vehicleId", "==", inquiry.vehicleId)
          );
          const pastInquirySnap = await getDocs(pastInquiryQuery);
          pastInquirySnap.forEach(async (docSnap) => {
            await deleteDoc(doc(db, "buyer_pastinquiry", docSnap.id));
          });

          // Delete from seller_inquiry
          const sellerInquiryQuery = query(
            collection(db, "seller_inquiry"),
            where("sellerEmail", "==", inquiry.sellerEmail),
            where("vehicleId", "==", inquiry.vehicleId)
          );
          const sellerInquirySnap = await getDocs(sellerInquiryQuery);
          sellerInquirySnap.forEach(async (docSnap) => {
            await deleteDoc(doc(db, "seller_inquiry", docSnap.id));
          });

          alert("Order placed and vehicle removed successfully!");

          // Refresh list
          setInquiries((prev) =>
            prev.filter((item) => item.vehicleId !== inquiry.vehicleId)
          );
        } catch (error) {
          console.error("Error placing order or deleting data:", error);
          alert("Something went wrong saving your order.");
        }
      },
      prefill: {
        email: buyerEmail,
      },
      theme: {
        color: "#1976D2",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#0D47A1' }}
      >
        Inquiries
      </Typography>
      <Container>
        <Grid container spacing={2} mt={3} justifyContent="center">
          {inquiries.length === 0 ? (
            <Typography variant="h6" align="center" color="text.secondary" mt={5}>
              No inquiries found.
            </Typography>
          ) : (
            inquiries.map((inquiry) => (
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
                    image={inquiry.image}
                    alt={inquiry.VehicleModel || "Car"}
                    onError={(e) => { e.target.src = "/images/default-car.jpg"; }}
                  />
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      fontWeight="bold"
                      color="primary"
                    >
                      {inquiry.VehicleModel || "Unknown Model"}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Price: ₹{inquiry.Price || "N/A"}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ flexDirection: "column", gap: 1, pb: 2 }}>
                    <Box sx={{ display: "flex", gap: 1 }}>
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
                        onClick={() => handleOpenDialog(inquiry)}
                      >
                        Seller Info
                      </Button>
                    </Box>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ borderRadius: 3, mt: 1, width: "80%" }}
                      onClick={() => handleBuyNow(inquiry)}
                    >
                      Buy Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>

      {/* Seller Info Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: '#1976D2', color: 'white', textAlign: 'center' }}>
          Seller Profile
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          {selectedInquiry && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar sx={{ width: 80, height: 80, mb: 2, bgcolor: '#1976D2' }}>
                {selectedInquiry.sellerName?.charAt(0)?.toUpperCase() || "?"}
              </Avatar>
              <Typography variant="h6" gutterBottom>
                {selectedInquiry.sellerName || "No Name"}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Email:</strong> {selectedInquiry.sellerEmail || "N/A"}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Phone:</strong> {selectedInquiry.sellerMobile || "N/A"}
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
