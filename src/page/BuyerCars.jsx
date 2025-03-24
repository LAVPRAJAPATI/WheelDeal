// import React, { useState } from "react";
// import { TextField, Card, CardContent, Typography, Container, Grid, CardMedia, Box, Button } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// const cars = [
//   { id: 1, name: "Tesla Model S", image: "https://source.unsplash.com/400x300/?tesla", price: "80,000" },
//   { id: 2, name: "Ford Mustang", image: "https://source.unsplash.com/400x300/?mustang", price: "55,000" },
//   { id: 3, name: "Chevrolet Camaro", image: "https://source.unsplash.com/400x300/?camaro", price: "50,000"},
//   { id: 4, name: "BMW M3", image: "https://source.unsplash.com/400x300/?bmw", price: "75,000"},
//   { id: 5, name: "Audi R8", image: "https://source.unsplash.com/400x300/?audi", price: "150,000"},
//   { id: 6, name: "Mercedes-Benz C-Class", image: "https://source.unsplash.com/400x300/?mercedes", price: "60,000"}
// ];

// const CarSearchPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredCars = cars.filter(car =>
//     car.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Container sx={{ bgcolor: '#0d1b2a', color: 'white', minHeight: '100vh', py: 4 }}>
//       <Typography variant="h3" align="center" sx={{ mt: 2, mb: 3, fontWeight: 'bold',}}>
//         Discover Your Perfect Ride
//       </Typography>
//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//         <TextField
//           variant="outlined"
//           placeholder="Search for cars..."
//           sx={{ width: '400px', mr: 2, bgcolor: 'white', borderRadius: 3 }}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Button variant="contained" color="primary" startIcon={<SearchIcon />} sx={{ borderRadius: 3, px: 4, fontSize: '1rem' }}>
//           Search
//         </Button>
//       </Box>
//       <Grid container spacing={3} mt={3}>
//         {filteredCars.map(car => (
//           <Grid item xs={12} sm={6} md={4} key={car.id}>
//             <Card sx={{ bgcolor: '#1b263b', color: 'white', borderRadius: 2, boxShadow: 5 }}>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={car.image}
//                 alt={car.name}
//               />
//               <CardContent>
//                 <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{car.name}</Typography>
//                 <Typography variant="body1">Price: {car.price}</Typography>
//                 <Button variant="contained" sx={{ mt: 1, mr: 1, bgcolor: '#003366', color: 'white', '&:hover': { bgcolor: '#002855' } }}>
//                   More Details
//                 </Button>
//                 <Button variant="contained" sx={{ mt: 1, bgcolor: '#003366', color: 'white', '&:hover': { bgcolor: '#002855' } }}>
//                   Contact
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default CarSearchPage;


import React, { useState } from "react";
import { TextField, Card, CardContent, Typography, Container, Grid, CardMedia, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const cars = [
  { id: 1, name: "Tesla Model S", image: "https://source.unsplash.com/400x300/?tesla", price: "80,000" },
  { id: 2, name: "Ford Mustang", image: "https://source.unsplash.com/400x300/?mustang", price: "55,000" },
  { id: 3, name: "Chevrolet Camaro", image: "https://source.unsplash.com/400x300/?camaro", price: "50,000"},
  { id: 4, name: "BMW M3", image: "https://source.unsplash.com/400x300/?bmw", price: "75,000"},
  { id: 5, name: "Audi R8", image: "https://source.unsplash.com/400x300/?audi", price: "150,000"},
  { id: 6, name: "Mercedes-Benz C-Class", image: "https://source.unsplash.com/400x300/?mercedes", price: "60,000"}
];

function BuyerCars()  {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div sx={{ bgcolor: 'white', color: 'white', minHeight: '100vh', py: 4 }}> {/* Matches Footer primary.dark */}
      
      <Typography 
        variant="h3" 
        align="center" 
        sx={{ mt: 2, mb: 3, fontWeight: 'bold', color: '#0D47A1' }} /* White like Hero */
      >
        Discover Your Perfect Ride
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search for cars..."
          sx={{ 
            width: '400px', 
            mr: 2, 
            bgcolor: '#FFFFFF', /* White like Homepage default */
            borderRadius: 3,
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#1976D2' }, /* Primary blue */
              '&:hover fieldset': { borderColor: '#1565C0' }, /* Darker blue on hover */
              '&.Mui-focused fieldset': { borderColor: '#1976D2' }, /* Primary blue when focused */
            },
            '& .MuiInputBase-input': { color: '#757575' }, /* Secondary text for input */
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<SearchIcon />} 
          sx={{ borderRadius: 3, px: 4, fontSize: '1rem' }} /* Primary blue */
        >
          Search
        </Button>
      </Box>
      <Container>
      <Grid container spacing={3} mt={3}>
        {filteredCars.map(car => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <Card sx={{ bgcolor: '#FAFAFA', color: '#757575', borderRadius: 2, boxShadow: 5 }}> {/* Matches Homepage card default */}
              <CardMedia
                component="img"
                height="200"
                image={car.image}
                alt={car.name}
              />
              <CardContent>
                <Typography 
                  variant="h6" 
                  sx={{ fontWeight: 'bold', color: '#1976D2' }} /* Primary blue like car name */
                >
                  {car.name}
                </Typography>
                <Typography variant="body1" color="text.secondary"> {/* Secondary text */}
                  Price: {car.price}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 1, mr: 1, borderRadius: 3 }} /* Primary blue */
                >
                  More Details
                </Button>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  sx={{ mt: 1, borderRadius: 3 }} /* Secondary pinkish-red */
                >
                  Contact
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    </div>
  );
};

export default BuyerCars;
