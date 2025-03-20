import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

export default function SellerProfile() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main St",
    mobile: "1234567890",
    city: "New York",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
    alert(
      `Profile updated successfully!`
    );
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Profile
      </Typography>
      <TextField fullWidth label="Name" name="name" value={userData.name} onChange={handleChange} margin="normal" disabled={!isEditing} />
      <TextField fullWidth label="Email" name="email" type="email" value={userData.email} onChange={handleChange} margin="normal" disabled={!isEditing} />
      <TextField fullWidth label="Address" name="address" value={userData.address} onChange={handleChange} margin="normal" disabled={!isEditing} />
      <TextField fullWidth label="Mobile" name="mobile" type="tel" value={userData.mobile} onChange={handleChange} margin="normal" disabled={!isEditing} />
      <TextField fullWidth label="City" name="city" value={userData.city} onChange={handleChange} margin="normal" disabled={!isEditing} />

      {!isEditing ? (
        <Button variant="contained" color="secondary" fullWidth onClick={handleEdit} sx={{ mt: 2 }}>
          Change Data
        </Button>
      ) : (
        <Button variant="contained" color="primary" fullWidth onClick={handleUpdate} sx={{ mt: 2 }}>
          Update Profile
        </Button>
      )}
    </Container>
  );
}
  