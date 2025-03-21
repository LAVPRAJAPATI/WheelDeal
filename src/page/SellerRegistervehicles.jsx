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