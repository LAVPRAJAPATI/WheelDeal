// import React, { useState } from "react";
// import {
//   Container,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Button,
//   Grid,
//   Typography,
// } from "@mui/material";
// import { db } from "../config/firebase";
// import { addDoc, collection } from "firebase/firestore";
// import { Navigate, useNavigate } from "react-router-dom";

// function SellerRegisterVehicles() {
//   const [FormData, setFormData] = useState({
//     Brand: "",
//     VehicleModel: "",
//     Insurance: "",
//     CarKmsRun: "",
//     Milage: "",
//     Vehiclenumber: "",
//     RCBookNumber: "",
//     Owners: "",
//     Price: "",
//     Fuel: "",
//     Vehicletype: "",
//     Transmissiontype: "",
//     MoreDetails: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...FormData, [e.target.name]: e.target.value });
//   };

//   const RegisterVehicleRef = collection(db, "RegisterVehicle");
//   const senddata = async () => {
//     try {
//       await addDoc(RegisterVehicleRef, {
//         Brand: FormData.Brand,
//         VehicleModel: FormData.VehicleModel,
//         Insurance: FormData.Insurance,
//         CarKmsRun: FormData.CarKmsRun,
//         Milage: FormData.Milage,
//         Vehiclenumber: FormData.Vehiclenumber,
//         RCBookNumber: FormData.RCBookNumber,
//         Owners: FormData.Owners,
//         Price: FormData.Price,
//         Fuel: FormData.Fuel,
//         Vehicletype: FormData.Vehicletype,
//         Transmissiontype: FormData.Transmissiontype,
//         MoreDetails: FormData.MoreDetails,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//    const Navigate = useNavigate();

//   return (
//     <Container sx={{ mt: 10 }}>
//       <form>
//         <Typography
//           variant="h4"
//           align="center"
//           sx={{ color: "#1976D2", marginBottom: "30px", fontWeight: "bold" }}
//         >
//           Register Your Vehicle
//         </Typography>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="Brand"
//               fullWidth
//               label="Brand"
//               variant="outlined"
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="VehicleModel"
//               fullWidth
//               label="Model"
//               variant="outlined"
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="Insurance"
//               fullWidth
//               label="Insurance Status"
//               variant="outlined"
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="CarKmsRun"
//               fullWidth
//               label="Car Kms Run"
//               variant="outlined"
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="Milage"
//               fullWidth
//               label="Mileage"
//               variant="outlined"
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="Vehiclenumber"
//               fullWidth
//               label="Vehicle Number"
//               variant="outlined"
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="RCBookNumber"
//               fullWidth
//               label="RC Book Number"
//               variant="outlined"
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="Owners"
//               fullWidth
//               label="Number of Owners"
//               variant="outlined"
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="Price"
//               fullWidth
//               label="Price"
//               variant="outlined"
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel>Fuel Type</InputLabel>
//               <Select name="Fuel" onChange={handleChange}>
//                 <MenuItem value="Petrol">Petrol</MenuItem>
//                 <MenuItem value="Diesel">Diesel</MenuItem>
//                 <MenuItem value="Electric">Electric</MenuItem>
//                 <MenuItem value="Hybrid">Hybrid</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel>Vehicle Type</InputLabel>
//               <Select name="Vehicletype" onChange={handleChange}>
//                 <MenuItem value="SUV">SUV</MenuItem>
//                 <MenuItem value="Sedan">Sedan</MenuItem>
//                 <MenuItem value="Hatchback">Hatchback</MenuItem>
//                 <MenuItem value="Convertible">Convertible</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel>Transmission Type</InputLabel>
//               <Select name="Transmissiontype" onChange={handleChange}>
//                 <MenuItem value="Manual">Manual</MenuItem>
//                 <MenuItem value="Automatic">Automatic</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               name="MoreDetails"
//               fullWidth
//               label="More Details"
//               variant="outlined"
//               multiline
//               rows={3}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               onClick={() => {
//                 console.log(FormData);
//                 senddata();
//                 Navigate("/Seller/Cars")
//               }}
//             >
//               Submit

//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// }

// export default SellerRegisterVehicles;
 
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
  });

  const navigate = useNavigate();
  const RegisterVehicleRef = collection(db, "RegisterVehicle");

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const sendData = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        alert("Please log in to register a vehicle");
        return;
      }

      const newVehicleRef = doc(RegisterVehicleRef); // Create a doc reference with a unique ID
      const vehicleId = newVehicleRef.id; // Get auto-generated ID

      await setDoc(newVehicleRef, {
        ...FormData,
        sellerId: user.uid,
        vehicleId: vehicleId, // Store the auto-generated ID
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
    <Container sx={{ mt: 10 }}>
      <form>
        <Typography variant="h4" align="center" sx={{ color: "#1976D2", marginBottom: "30px", fontWeight: "bold" }}>
          Register Your Vehicle
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField name="Brand" fullWidth label="Brand" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="VehicleModel" fullWidth label="Model" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="Insurance" fullWidth label="Insurance Status" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="CarKmsRun" fullWidth label="Car Kms Run" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="Milage" fullWidth label="Mileage" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="Vehiclenumber" fullWidth label="Vehicle Number" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="RCBookNumber" fullWidth label="RC Book Number" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="Owners" fullWidth label="Number of Owners" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="Price" fullWidth label="Price" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Fuel Type</InputLabel>
              <Select name="Fuel" onChange={handleChange}>
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
              <Select name="Vehicletype" onChange={handleChange}>
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
              <Select name="Transmissiontype" onChange={handleChange}>
                <MenuItem value="Manual">Manual</MenuItem>
                <MenuItem value="Automatic">Automatic</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField name="MoreDetails" fullWidth label="More Details" variant="outlined" multiline rows={3} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={sendData}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default SellerRegisterVehicles;
