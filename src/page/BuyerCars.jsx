import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { 
  TextField, 
  Card, 
  CardContent, 
  Typography, 
  Container, 
  Grid, 
  CardMedia, 
  Box, 
  Button, 
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const cars = [
  { id: 1, VehicleModel: "Model S", image: "https://source.unsplash.com/400x300/?tesla", Price: "$80,000", Brand: "Tesla", Insurance: "Active", CarKmsRun: "20,000 km", Milage: "N/A", Vehiclenumber: "TES123", RCBookNumber: "TSL789", Owners: "1", Fuel: "Electric", Vehicletype: "Sedan", Transmissiontype: "Automatic", MoreDetails: "High-performance electric vehicle", seller: { name: 'Elon Musk', email: 'elon@tesla.com', phone: '+1 555 0123', location: 'California' } },
  { id: 2, VehicleModel: "Mustang", image: "https://source.unsplash.com/400x300/?mustang", Price: "$55,000", Brand: "Ford", Insurance: "Active", CarKmsRun: "30,000 km", Milage: "12 kmpl", Vehiclenumber: "FRD456", RCBookNumber: "MST012", Owners: "2", Fuel: "Petrol", Vehicletype: "Coupe", Transmissiontype: "Manual", MoreDetails: "Classic muscle car", seller: { name: 'James Ford', email: 'james@ford.com', phone: '+1 555 0456', location: 'Detroit' } },
  { id: 3, VehicleModel: "Camaro", image: "https://source.unsplash.com/400x300/?camaro", Price: "$50,000", Brand: "Chevrolet", Insurance: "Active", CarKmsRun: "25,000 km", Milage: "14 kmpl", Vehiclenumber: "CHV789", RCBookNumber: "CAM345", Owners: "1", Fuel: "Petrol", Vehicletype: "Coupe", Transmissiontype: "Automatic", MoreDetails: "Sporty design", seller: { name: 'Mary Chevy', email: 'mary@chevy.com', phone: '+1 555 0789', location: 'Chicago' } },
  { id: 4, VehicleModel: "M3", image: "https://source.unsplash.com/400x300/?bmw", Price: "$75,000", Brand: "BMW", Insurance: "Active", CarKmsRun: "15,000 km", Milage: "15 kmpl", Vehiclenumber: "BMW012", RCBookNumber: "M3X678", Owners: "1", Fuel: "Petrol", Vehicletype: "Sedan", Transmissiontype: "Automatic", MoreDetails: "Luxury performance sedan", seller: { name: 'Hans Bauer', email: 'hans@bmw.com', phone: '+49 555 0123', location: 'Munich' } },
  { id: 5, VehicleModel: "R8", image: "https://source.unsplash.com/400x300/?audi", Price: "$150,000", Brand: "Audi", Insurance: "Active", CarKmsRun: "10,000 km", Milage: "13 kmpl", Vehiclenumber: "AUD345", RCBookNumber: "R8Y901", Owners: "1", Fuel: "Petrol", Vehicletype: "Coupe", Transmissiontype: "Automatic", MoreDetails: "Supercar performance", seller: { name: 'Anna Schmidt', email: 'anna@audi.com', phone: '+49 555 0456', location: 'Ingolstadt' } },
  { id: 6, VehicleModel: "C-Class", image: "https://source.unsplash.com/400x300/?mercedes", Price: "$60,000", Brand: "Mercedes-Benz", Insurance: "Active", CarKmsRun: "18,000 km", Milage: "16 kmpl", Vehiclenumber: "MER678", RCBookNumber: "CCL234", Owners: "1", Fuel: "Petrol", Vehicletype: "Sedan", Transmissiontype: "Automatic", MoreDetails: "Premium luxury sedan", seller: { name: 'Klaus Benz', email: 'klaus@mercedes.com', phone: '+49 555 0789', location: 'Stuttgart' } }
];

function BuyerCars() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const filteredCars = cars.filter(car =>
    car.VehicleModel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (car) => {
    navigate("/CarDetails/", { state: { carData: car } });
  };

  const handleInquiry = (car) => {
    setSelectedCar(car);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCar(null);
  };

  return (
    <div sx={{ bgcolor: 'white', color: 'white', minHeight: '100vh', py: 4 }}>
      <Box>
      <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            fontWeight: 'bold', 
            color:"#007bb2",
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '1px',
          }}
        >
          Discover Your Perfect Ride
        </Typography>
        <Typography 
          variant="h6" 
          align="center" 
          sx={{ 
            color:"#007bb2", 
            mt: 1,
            fontStyle: 'italic',
            opacity: 0.9
          }}
        >
          Find your dream car today!
        </Typography>
        </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search for cars..."
          sx={{ 
            width: '400px', 
            mr: 2, 
            bgcolor: '#FFFFFF',
            borderRadius: 3,
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#1976D2' },
              '&:hover fieldset': { borderColor: '#1565C0' },
              '&.Mui-focused fieldset': { borderColor: '#1976D2' },
            },
            '& .MuiInputBase-input': { color: '#757575' },
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<SearchIcon />} 
          sx={{ borderRadius: 3, px: 4, fontSize: '1rem' }}
        >
          Search
        </Button>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={3} mt={3}>
          {filteredCars.map(car => (
            <Grid item xs={12} sm={6} md={4} key={car.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 6, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={car.image}
                  alt={car.VehicleModel}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    fontWeight="bold" 
                    color="primary"
                  >
                    {car.VehicleModel}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color="text.secondary"
                  >
                    Price: {car.Price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ borderRadius: 3, px: 3 }}
                    onClick={() => handleViewDetails(car)}
                  >
                    More Details
                  </Button>
                  <Button 
                    variant="outlined"
                    color="secondary" 
                    sx={{ borderRadius: 3, px: 3 }}
                    onClick={() => handleInquiry(car)}
                  >
                    Inquiry
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Inquiry Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: '#1976D2', color: 'white', textAlign: 'center' }}>
          Seller Profile - {selectedCar?.VehicleModel}
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          {selectedCar && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar sx={{ width: 80, height: 80, mb: 2, bgcolor: '#1976D2' }}>
                {selectedCar.seller.name[0]}
              </Avatar>
              <Typography variant="h6" gutterBottom>
                {selectedCar.seller.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Email:</strong> {selectedCar.seller.email}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Phone:</strong> {selectedCar.seller.phone}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Location:</strong> {selectedCar.seller.location}
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
    </div>
  );
};

export default BuyerCars;

