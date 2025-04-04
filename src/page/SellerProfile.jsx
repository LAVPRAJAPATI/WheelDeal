import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { auth, db } from "../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function SellerProfile() {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const q = query(
            collection(db, "seller_registration"),
            where("sellerId", "==", user.uid)
          );
          const snapshot = await getDocs(q);

          if (!snapshot.empty) {
            const docSnap = snapshot.docs[0];
            const data = docSnap.data();
            setUserData({ ...data, docId: docSnap.id });
          } else {
            console.warn("No seller profile found for this account.");
          }
        } catch (error) {
          console.error("Error fetching seller data:", error);
        }
      } else {
        console.warn("User not logged in.");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const { Name, Email, Address, Mobile, City, docId } = userData;
      const docRef = doc(db, "seller_registration", docId);

      await updateDoc(docRef, {
        Name,
        Email,
        Address,
        Mobile,
        City,
      });

      alert("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating seller profile:", error);
      alert("Failed to update profile.");
    }
  };

  if (loading) return <Typography>Loading profile...</Typography>;
  if (!userData) return <Typography>No profile data found.</Typography>;

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={5} sx={{ p: 4, bgcolor: '#FAFAFA', color: '#757575', borderRadius: 3, width: '100%' }}>
        <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#1976D2' }}>
          Seller Profile
        </Typography>
        <Box>
          <TextField
            fullWidth
            label="Name"
            name="Name"
            value={userData.Name}
            onChange={handleChange}
            margin="normal"
            disabled={!isEditing}
            sx={fieldStyle}
          />
          <TextField
            fullWidth
            label="Email"
            name="Email"
            value={userData.Email}
            onChange={handleChange}
            margin="normal"
            disabled
            sx={fieldStyle}
          />
          <TextField
            fullWidth
            label="Address"
            name="Address"
            value={userData.Address}
            onChange={handleChange}
            margin="normal"
            disabled={!isEditing}
            sx={fieldStyle}
          />
          <TextField
            fullWidth
            label="Mobile"
            name="Mobile"
            value={userData.Mobile}
            onChange={handleChange}
            margin="normal"
            disabled={!isEditing}
            sx={fieldStyle}
          />
          <TextField
            fullWidth
            label="City"
            name="City"
            value={userData.City}
            onChange={handleChange}
            margin="normal"
            disabled={!isEditing}
            sx={fieldStyle}
          />
        </Box>
        <Button
          variant="contained"
          fullWidth
          onClick={isEditing ? handleUpdate : () => setIsEditing(true)}
          sx={{ mt: 3, bgcolor: '#1976D2', color: '#FFFFFF', '&:hover': { bgcolor: '#1565C0' } }}
        >
          {isEditing ? "Update Profile" : "Edit Profile"}
        </Button>
      </Paper>
    </Container>
  );
}

const fieldStyle = {
  bgcolor: '#FFFFFF',
  borderRadius: 1,
  input: { color: '#757575' },
  label: { color: '#757575' },
};
