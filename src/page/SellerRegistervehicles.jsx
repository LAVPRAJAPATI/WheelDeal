 import React from "react";
import { Container, TextField, Select, MenuItem, FormControl, InputLabel, Button, Grid, Typography} from "@mui/material";
import { useState } from "react";

function SellerRegisterVehicles() {
  const[FormData,setFormData]=useState({
    Brand:"",
    Model:"",
    Insurance:"",
    CarKmsRun:"",
    Milage:"",
    Vehiclenumber:"",
    RCBookNumber:"",
    Owners:"",
    QuotedPrice:"",
    Fuel:"",
    Vehicletype:"",
    Transmissiontype:" "
  })
  const handlechange=(e)=>
  {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <Container maxWidth={false} sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form style={{ width: "80%", padding: "20px", background: "#f9f9f9", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} >
            <TextField  name="Brand" fullWidth label="Brand" variant="outlined" onChange={handlechange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField  name="Model" fullWidth label="Model" variant="outlined" onChange={handlechange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField  name="Insurance" fullWidth label="Insurance Status (Active/Expired)" variant="outlined"  onChange={handlechange}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth >
              <InputLabel>Vehicle Type</InputLabel>
              <Select name="Vehicletype" label="Vehicle Type" onChange={handlechange}>
                <MenuItem value="SUV">SUV</MenuItem>
                <MenuItem value="Sedan">Sedan</MenuItem>
                <MenuItem value="Convertible">Convertible</MenuItem>
                <MenuItem value="Hatchback">Hatchback</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField  name="CarKmsRun" fullWidth label="Car Kms Run" variant="outlined"  onChange={handlechange}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField  name="Milage" fullWidth label="Mileage" variant="outlined" onChange={handlechange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="Vehiclenumber" fullWidth label="Vehicle Identification Number" variant="outlined" onChange={handlechange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField  name=" RCBookNumber" fullWidth label=" RC Book Number" variant="outlined" onChange={handlechange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Fuel Type</InputLabel>
              <Select  name="Fuel" label="Fuel Type" onChange={handlechange} >
                <MenuItem value="Petrol">Petrol</MenuItem>
                <MenuItem value="Diesel">Diesel</MenuItem>
                <MenuItem value="Electric">Electric</MenuItem>
                <MenuItem value="Gas">Gas</MenuItem>
                <MenuItem value="Hybrid">Hybrid</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Transmission Type</InputLabel>
              <Select  name="Transmissiontype"label="Transmission Type" onChange={handlechange} >
                <MenuItem value="Manual">Manual</MenuItem>
                <MenuItem value="Automatic">Automatic</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField  name="Owners" fullWidth label="Number of Owners" variant="outlined" onChange={handlechange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField  name="QuotedPrice" fullWidth label="Quoted Price" variant="outlined" onChange={handlechange} />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" onClick={()=>{console.log(FormData)}}>Submit</Button>
          </Grid>
      
        </Grid>
      </form>
    </Container>
  );
}

export default SellerRegisterVehicles;

//learn git
//new learning tomorrow




// return(
// // import React, { useState } from "react";
// // import { Container, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography } from "@mui/material";
// // import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// // const VehicleForm = () => {
// //   const [formData, setFormData] = useState({});
// //   const [images, setImages] = useState([]); // Store multiple images
// //   const [imageNames, setImageNames] = useState([]); // Store image names

// //   const handleChange = (event) => {
// //     setFormData({ ...formData, [event.target.name]: event.target.value });
// //   };

// //   const handleImageUpload = (event) => {
// //     const files = Array.from(event.target.files); // Convert FileList to an array
// //     if (files.length > 0) {
// //       setImages((prevImages) => [...prevImages, ...files]); // Append new images
// //       setImageNames((prevNames) => [...prevNames, ...files.map((file) => file.name)]); // Append file names
// //     }
// //   };

// //   return (
// //     <Container
// //       maxWidth={false}
// //       sx={{
// //         minHeight: "100vh",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //       }}
// //     >
// //       <form
// //         style={{
// //           width: "80%",
// //           padding: "20px",
// //           background: "#f9f9f9",
// //           borderRadius: "10px",
// //           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// //         }}
// //       >
// //           <Typography
// //           variant="h4"
// //           style={{
// //             textAlign: "center",
// //             fontSize: "28px",
// //             fontWeight: "bold",
// //             color: "#333",
// //             marginBottom: "20px",
// //           }}
// //         >
// //           Register Your Vehicle
// //         </Typography>
// //         <Grid container spacing={2}>
// //           <Grid item xs={12} sm={6}>
// //             <TextField name="Brand" fullWidth label="Brand" variant="outlined" onChange={handleChange} />
// //           </Grid>
// //           <Grid item xs={12} sm={6}>
// //             <TextField name="Model" fullWidth label="Model" variant="outlined" onChange={handleChange} />
// //           </Grid>
// //           <Grid item xs={12} sm={6}>
// //             <TextField name="Insurance" fullWidth label="Insurance Status (Active/Expired)" variant="outlined" onChange={handleChange} />
// //           </Grid>
// //           <Grid item xs={12} sm={6}>
// //             <FormControl fullWidth>
// //               <InputLabel>Vehicle Type</InputLabel>
// //               <Select name="Vehicletype" label="Vehicle Type" onChange={handleChange}>
// //                 <MenuItem value="SUV">SUV</MenuItem>
// //                 <MenuItem value="Sedan">Sedan</MenuItem>
// //                 <MenuItem value="Convertible">Convertible</MenuItem>
// //                 <MenuItem value="Hatchback">Hatchback</MenuItem>
// //               </Select>
// //             </FormControl>
// //           </Grid>
// //           <Grid item xs={12} sm={6}>
// //             <TextField name="CarKmsRun" fullWidth label="Car Kms Run" variant="outlined" onChange={handleChange} />
// //           </Grid>
// //           <Grid item xs={12} sm={6}>
// //             <TextField name="Milage" fullWidth label="Mileage" variant="outlined" onChange={handleChange} />
// //           </Grid>
// //           <Grid item xs={12} sm={6}>
// //             <TextField name="Vehiclenumber" fullWidth label="Vehicle Identification Number" variant="outlined" onChange={handleChange} />
// //           </Grid>
// //           <Grid item xs={12} sm={6}>
// //             <TextField name="RCBookNumber" fullWidth label="RC Book Number" variant="outlined" onChange={handleChange} />
// //           </Grid>
// //           <Grid item xs={12} sm={6}>
// //             <FormControl fullWidth>
// //               <InputLabel>Fuel Type</InputLabel>
// //               <Select name="Fuel" label="Fuel Type" onChange={handleChange}>
// //                 <MenuItem value="Petrol">Petrol</MenuItem>
// //                 <MenuItem value="Diesel">Diesel</MenuItem>
// //                 <MenuItem value="Electric">Electric</MenuItem>
// //                 <MenuItem value="Gas">Gas</MenuItem>
// //                 <MenuItem value="Hybrid">Hybrid</MenuItem>
// //               </Select>
// //             </FormControl>
// //           </Grid>
// //           <Grid item xs={12} sm={6}>
// //             <FormControl fullWidth>
// //               <InputLabel>Transmission Type</InputLabel>
// //               <Select name="Transmissiontype" label="Transmission Type" onChange={handleChange}>
// //                 <MenuItem value="Manual">Manual</MenuItem>
// //                 <MenuItem value="Automatic">Automatic</MenuItem>
// //               </Select>
// //             </FormControl>
// //           </Grid>
// //           <Grid item xs={12} sm={6}>
// //             <TextField name="Owners" fullWidth label="Number of Owners" variant="outlined" onChange={handleChange} />
// //           </Grid>
// //           <Grid item xs={12} sm={6}>
// //             <TextField name="QuotedPrice" fullWidth label="Quoted Price" variant="outlined" onChange={handleChange} />
// //           </Grid>

// //           {/* Multiple Image Upload */}
// //           <Grid item xs={12}>
// //             <input
// //               type="file"
// //               accept="image/*"
// //               multiple // Allow multiple file selection
// //               onChange={handleImageUpload}
// //               style={{ display: "none" }}
// //               id="upload-image"
// //             />
// //             <label htmlFor="upload-image">
// //               <Button variant="contained" component="span" startIcon={<CloudUploadIcon />}>
// //                 Upload Images
// //               </Button>
// //             </label>
// //           </Grid>

// //           {/* Show Uploaded File Names */}
// //           {imageNames.length > 0 && (
// //             <Grid item xs={12}>
// //               <Typography variant="body1" color="textSecondary">
// //                 Uploaded Files:
// //               </Typography>
// //               <ul>
// //                 {imageNames.map((name, index) => (
// //                   <li key={index}>{name}</li>
// //                 ))}
// //               </ul>
// //             </Grid>
// //           )}

// //           <Grid item xs={12}>
// //             <Button
// //               fullWidth
// //               variant="contained"
// //               color="primary"
// //               onClick={() => console.log("Form Data:", formData, "Uploaded Images:", images)}
// //             >
// //               Submit
// //             </Button>
// //           </Grid>
// //         </Grid>
// //       </form>
// //     </Container>
// //   );
// // };

// // export default VehicleForm;
// )
