import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Paper } from "@mui/material";

export default function BuyerProfile() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main St",
    mobile: "1234567890",
    city: "New York",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name] : e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

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
            name="name" 
            value={userData.name} 
            onChange={handleChange} 
            margin="normal" 
            disabled={!isEditing} 
            sx={{ bgcolor: '#FFFFFF', borderRadius: 1, input: { color: '#757575' }, label: { color: '#757575' } }} 
          />
          <TextField 
            fullWidth 
            label="Email" 
            name="email" 
            type="email" 
            value={userData.email} 
            onChange={handleChange} 
            margin="normal" 
            disabled={!isEditing} 
            sx={{ bgcolor: '#FFFFFF', borderRadius: 1, input: { color: '#757575' }, label: { color: '#757575' } }} 
          />
          <TextField 
            fullWidth 
            label="Address" 
            name="address" 
            value={userData.address} 
            onChange={handleChange} 
            margin="normal" 
            disabled={!isEditing} 
            sx={{ bgcolor: '#FFFFFF', borderRadius: 1, input: { color: '#757575' }, label: { color: '#757575' } }} 
          />
          <TextField 
            fullWidth 
            label="Mobile" 
            name="mobile" 
            type="tel" 
            value={userData.mobile} 
            onChange={handleChange} 
            margin="normal" 
            disabled={!isEditing} 
            sx={{ bgcolor: '#FFFFFF', borderRadius: 1, input: { color: '#757575' }, label: { color: '#757575' } }} 
          />
          <TextField 
            fullWidth 
            label="City" 
            name="city" 
            value={userData.city} 
            onChange={handleChange} 
            margin="normal" 
            disabled={!isEditing} 
            sx={{ bgcolor: '#FFFFFF', borderRadius: 1, input: { color: '#757575' }, label: { color: '#757575' } }} 
          />
        </Box>
        {!isEditing ? (
          <Button 
            variant="contained" 
            fullWidth 
            onClick={handleEdit} 
            sx={{ mt: 3, bgcolor: '#1976D2', color: '#FFFFFF', '&:hover': { bgcolor: '#1565C0' } }}
          >
            Edit Profile
          </Button>
        ) : (
          <Button 
            variant="contained" 
            fullWidth 
            onClick={handleUpdate} 
            sx={{ mt: 3, bgcolor: '#1976D2', color: '#FFFFFF', '&:hover': { bgcolor: '#1565C0' } }}
          >
            Update Profile
          </Button>
        )}
      </Paper>
    </Container>
  );
}