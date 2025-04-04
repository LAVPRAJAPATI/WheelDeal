import React, { useState } from "react";
import {
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { db, auth } from "../config/firebase";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function SellerRegisterVehicles() {
  const [FormData, setFormData] = useState({
    Brand: "",
    VehicleModel: "",
    Insurance: "",
    CarKmsRun: "",
    Milage: "",
    Vehiclenumber: "",
    RCBookNumber: "",
    Owners: "",
    Price: "",
    Fuel: "",
    Vehicletype: "",
    Transmissiontype: "",
    MoreDetails: "",
    Image: [],
  });

  const navigate = useNavigate();
  const RegisterVehicleRef = collection(db, "RegisterVehicle");

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const sendData = async () => {
    const {
      Brand,
      VehicleModel,
      Insurance,
      CarKmsRun,
      Milage,
      Vehiclenumber,
      RCBookNumber,
      Owners,
      Price,
      Fuel,
      Vehicletype,
      Transmissiontype,
      Image,
    } = FormData;

    if (
      !Brand ||
      !VehicleModel ||
      !Insurance ||
      !CarKmsRun ||
      !Milage ||
      !Vehiclenumber ||
      !RCBookNumber ||
      !Owners ||
      !Price ||
      !Fuel ||
      !Vehicletype ||
      !Transmissiontype ||
      Image.length === 0
    ) {
      alert("Please fill in all the fields and upload at least one image.");
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        alert("Please log in to register a vehicle");
        return;
      }

      const newVehicleRef = doc(RegisterVehicleRef);
      const vehicleId = newVehicleRef.id;

      await setDoc(newVehicleRef, {
        ...FormData,
        sellerId: user.uid,
        vehicleId: vehicleId,
        createdAt: serverTimestamp(),
      });

      alert("Vehicle Registered Successfully!");
      navigate("/Seller/Cars");
    } catch (err) {
      console.error("Error registering vehicle:", err);
      alert("Failed to register vehicle. Try again later.");
    }
  };

  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          backgroundColor: "#fdfdfd",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1976D2", fontWeight: "bold", mb: 3 }}
        >
          Register Your Vehicle
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField name="Brand" fullWidth label="Brand" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="VehicleModel" fullWidth label="Model" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="Insurance" fullWidth label="Insurance Status" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="CarKmsRun" fullWidth label="Car Kms Run" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="Milage" fullWidth label="Mileage" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="Vehiclenumber" fullWidth label="Vehicle Number" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="RCBookNumber" fullWidth label="RC Book Number" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="Owners" fullWidth label="Number of Owners" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="Price" fullWidth label="Price" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Fuel Type</InputLabel>
              <Select name="Fuel" value={FormData.Fuel} onChange={handleChange}>
                <MenuItem value="Petrol">Petrol</MenuItem>
                <MenuItem value="Diesel">Diesel</MenuItem>
                <MenuItem value="Electric">Electric</MenuItem>
                <MenuItem value="Hybrid">Hybrid</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Vehicle Type</InputLabel>
              <Select name="Vehicletype" value={FormData.Vehicletype} onChange={handleChange}>
                <MenuItem value="SUV">SUV</MenuItem>
                <MenuItem value="Sedan">Sedan</MenuItem>
                <MenuItem value="Hatchback">Hatchback</MenuItem>
                <MenuItem value="Convertible">Convertible</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Transmission Type</InputLabel>
              <Select name="Transmissiontype" value={FormData.Transmissiontype} onChange={handleChange}>
                <MenuItem value="Manual">Manual</MenuItem>
                <MenuItem value="Automatic">Automatic</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="MoreDetails"
              fullWidth
              multiline
              rows={3}
              label="Additional Details"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" component="label">
              Upload Vehicle Images
              <input
                type="file"
                hidden
                accept="image/*"
                multiple
                onChange={(e) =>
                  setFormData({
                    ...FormData,
                    Image: Array.from(e.target.files),
                  })
                }
              />
            </Button>
            {FormData.Image.length > 0 && (
              <ul>
                {FormData.Image.map((img, idx) => (
                  <li key={idx}>{img.name}</li>
                ))}
              </ul>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth onClick={sendData}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default SellerRegisterVehicles;


