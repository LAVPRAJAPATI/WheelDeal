import React, { useState, useEffect } from 'react';
import { db, auth } from "../config/firebase";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import {
  Card, CardActions, CardContent, CardMedia,
  Button, Typography, Grid, Box, Container,
  Dialog, DialogTitle, DialogContent, DialogActions, Avatar
} from '@mui/material';

export default function SellerInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {
    const fetchInquiriesWithDetails = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const inquiryQuery = query(
          collection(db, "seller_inquiry"),
          where("sellerId", "==", user.uid)
        );
        const inquirySnapshot = await getDocs(inquiryQuery);
        const inquiryDocs = inquirySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const enrichedInquiries = await Promise.all(
          inquiryDocs.map(async (inquiry) => {
            let buyerDetails = {};
            if (inquiry.buyerEmail) {
              const buyerQuery = query(
                collection(db, "buyer_registration"),
                where("Email", "==", inquiry.buyerEmail)
              );
              const buyerSnapshot = await getDocs(buyerQuery);
              if (!buyerSnapshot.empty) {
                const buyerData = buyerSnapshot.docs[0].data();
                buyerDetails = {
                  buyerName: buyerData.Name || "N/A",
                  buyerPhone: buyerData.Mobile || "N/A",
                };
              }
            }

            let carDetails = {};
            if (inquiry.vehicleId) {
              const carDocRef = doc(db, "RegisterVehicle", inquiry.vehicleId);
              const carDocSnap = await getDoc(carDocRef);
              if (carDocSnap.exists()) {
                const carData = carDocSnap.data();
                const imageArray = carData.Image;

                carDetails = {
                  VehicleModel: carData.VehicleModel || "Unknown Model",
                  image: Array.isArray(imageArray) && imageArray.length > 0
                    ? imageArray[0]
                    : "/images/default-car.jpg",
                  price: carData.Price || "N/A",
                };
              }
            }

            return {
              ...inquiry,
              ...buyerDetails,
              ...carDetails,
            };
          })
        );

        setInquiries(enrichedInquiries);
      } catch (error) {
        console.error("Error fetching enriched inquiries:", error);
      }
    };

    fetchInquiriesWithDetails();
  }, []);

  const handleContactBuyer = (inquiry) => {
    setSelectedInquiry(inquiry);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedInquiry(null);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: 'white', minHeight: '100vh' }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#0D47A1' }}>
          Seller Inquiries
        </Typography>

        {inquiries.length === 0 ? (
          <Typography variant="h6" align="center" color="text.secondary" mt={5}>
            No inquiries found.
          </Typography>
        ) : (
          <Grid container spacing={2} mt={3} justifyContent="center">
            {inquiries.map((inquiry) => (
              <Grid item xs={12} sm={6} md={4} key={inquiry.id}>
                <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 6,
                  borderRadius: 3,
                  transition: '0.3s',
                  '&:hover': { transform: 'scale(1.05)' }
                }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={inquiry.image}
                    alt={inquiry.VehicleModel || "Car"}
                    onError={(e) => { e.target.src = "/images/default-car.jpg"; }}
                  />
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Typography gutterBottom variant="h5" fontWeight="bold" color="primary">
                      {inquiry.VehicleModel || "Unknown Model"}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Price: {inquiry.price || "N/A"}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{ borderRadius: 3, px: 3 }}
                      onClick={() => handleContactBuyer(inquiry)}
                    >
                      Contact Buyer
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Buyer Details Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: '#1976D2', color: 'white', textAlign: 'center' }}>
          Buyer Profile
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          {selectedInquiry && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar sx={{ width: 80, height: 80, mb: 2, bgcolor: '#1976D2' }}>
                {selectedInquiry.buyerName?.charAt(0)?.toUpperCase() || "?"}
              </Avatar>
              <Typography variant="h6" gutterBottom>
                {selectedInquiry.buyerName || "No Name"}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Email:</strong> {selectedInquiry.buyerEmail || "N/A"}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Phone:</strong> {selectedInquiry.buyerPhone || "N/A"}
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
