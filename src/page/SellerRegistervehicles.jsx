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
import {
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// 🔧 Convert image file to base64 string
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

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

      const sellerQuery = query(
        collection(db, "seller_registration"),
        where("Email", "==", user.email)
      );
      const querySnapshot = await getDocs(sellerQuery);

      if (querySnapshot.empty) {
        alert("Seller not found in registration database.");
        return;
      }

      const sellerDoc = querySnapshot.docs[0];
      const sellerId = sellerDoc.id;

      const newVehicleRef = doc(RegisterVehicleRef);
      const vehicleId = newVehicleRef.id;

      await setDoc(newVehicleRef, {
        ...FormData,
        sellerId: sellerId,
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
          {[
            { label: "Brand", name: "Brand" },
            { label: "Model", name: "VehicleModel" },
            { label: "Insurance Status", name: "Insurance" },
            { label: "Car Kms Run", name: "CarKmsRun" },
            { label: "Mileage", name: "Milage" },
            { label: "Vehicle Number", name: "Vehiclenumber" },
            { label: "RC Book Number", name: "RCBookNumber" },
            { label: "Number of Owners", name: "Owners" },
            { label: "Price", name: "Price" },
          ].map((field, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <TextField
                name={field.name}
                fullWidth
                label={field.label}
                onChange={handleChange}
              />
            </Grid>
          ))}

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
              <Select
                name="Vehicletype"
                value={FormData.Vehicletype}
                onChange={handleChange}
              >
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
              <Select
                name="Transmissiontype"
                value={FormData.Transmissiontype}
                onChange={handleChange}
              >
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
                onChange={async (e) => {
                  const files = Array.from(e.target.files);
                  const base64Images = await Promise.all(
                    files.map((file) => toBase64(file))
                  );
                  setFormData({
                    ...FormData,
                    Image: base64Images,
                  });
                }}
              />
            </Button>

            {FormData.Image.length > 0 && (
              <Grid container spacing={2} mt={2}>
                {FormData.Image.map((img, idx) => (
                  <Grid item key={idx}>
                    <img
                      src={img}
                      alt={`preview-${idx}`}
                      width="100"
                      style={{ borderRadius: 8, border: "1px solid #ccc" }}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={sendData}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default SellerRegisterVehicles;
