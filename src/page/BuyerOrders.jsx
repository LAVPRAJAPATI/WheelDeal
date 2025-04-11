import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { db } from "../config/firebase";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Box,
  Divider,
  Chip
} from "@mui/material";

function BuyerOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const buyerEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const q = query(
          collection(db, "buyer_orders"),
          where("buyerEmail", "==", buyerEmail)
        );
        const querySnapshot = await getDocs(q);

        const ordersData = querySnapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data()
        }));

        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching buyer orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [buyerEmail]);

  return (
    <Container sx={{ mt: 10, mb: 5 }}>
      <Typography variant="h4" gutterBottom align="center" fontWeight="bold" color="primary">
        My Orders
      </Typography>

      {loading ? (
        <CircularProgress sx={{ display: "block", mx: "auto", mt: 5 }} />
      ) : orders.length === 0 ? (
        <Typography align="center" sx={{ mt: 5 }}>
          No orders found.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {orders.map((order) => (
            <Grid item xs={12} sm={6} md={4} key={order.id}>
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: 6,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: 8
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={order.image || "/images/default-car.jpg"}
                  alt={order.vehicleModel || "Car Image"}
                  sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom color="primary">
                    {order.vehicleModel || "Car"}
                  </Typography>

                  <Divider sx={{ my: 1 }} />

                  <Box sx={{ mb: 1 }}>
                    <Typography variant="body1">
                      <strong>Price:</strong> ₹{order.price}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Seller:</strong> {order.sellerEmail}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Date:</strong>{" "}
                      {new Date(order.purchaseDate).toLocaleString()}
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 1 }} />

                  <Chip
                    label={`Payment ID: ${order.paymentId}`}
                    size="small"
                    sx={{ backgroundColor: "#e0f7fa", fontWeight: "bold", mt: 1 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default BuyerOrders;
