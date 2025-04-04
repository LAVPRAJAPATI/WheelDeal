// import React, { useState } from "react";
// import { TextField, Button, Container, Typography, Box, Paper } from "@mui/material";

// export default function BuyerProfile() {
//   const [userData, setUserData] = useState({
//     name: "John Doe",
//     email: "johndoe@example.com",
//     address: "123 Main St",
//     mobile: "1234567890",
//     city: "New York",
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name] : e.target.value });
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleUpdate = () => {
//     setIsEditing(false);
//     alert("Profile updated successfully!");
//   };

//   return (
//     <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <Paper elevation={5} sx={{ p: 4, bgcolor: '#FAFAFA', color: '#757575', borderRadius: 3, width: '100%' }}>
//         <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#1976D2' }}>
//           Buyer Profile
//         </Typography>
//         <Box>
//           <TextField 
//             fullWidth 
//             label="Name" 
//             name="name" 
//             value={userData.name} 
//             onChange={handleChange} 
//             margin="normal" 
//             disabled={!isEditing} 
//             sx={{ bgcolor: '#FFFFFF', borderRadius: 1, input: { color: '#757575' }, label: { color: '#757575' } }} 
//           />
//           <TextField 
//             fullWidth 
//             label="Email" 
//             name="email" 
//             type="email" 
//             value={userData.email} 
//             onChange={handleChange} 
//             margin="normal" 
//             disabled={!isEditing} 
//             sx={{ bgcolor: '#FFFFFF', borderRadius: 1, input: { color: '#757575' }, label: { color: '#757575' } }} 
//           />
//           <TextField 
//             fullWidth 
//             label="Address" 
//             name="address" 
//             value={userData.address} 
//             onChange={handleChange} 
//             margin="normal" 
//             disabled={!isEditing} 
//             sx={{ bgcolor: '#FFFFFF', borderRadius: 1, input: { color: '#757575' }, label: { color: '#757575' } }} 
//           />
//           <TextField 
//             fullWidth 
//             label="Mobile" 
//             name="mobile" 
//             type="tel" 
//             value={userData.mobile} 
//             onChange={handleChange} 
//             margin="normal" 
//             disabled={!isEditing} 
//             sx={{ bgcolor: '#FFFFFF', borderRadius: 1, input: { color: '#757575' }, label: { color: '#757575' } }} 
//           />
//           <TextField 
//             fullWidth 
//             label="City" 
//             name="city" 
//             value={userData.city} 
//             onChange={handleChange} 
//             margin="normal" 
//             disabled={!isEditing} 
//             sx={{ bgcolor: '#FFFFFF', borderRadius: 1, input: { color: '#757575' }, label: { color: '#757575' } }} 
//           />
//         </Box>
//         {!isEditing ? (
//           <Button 
//             variant="contained" 
//             fullWidth 
//             onClick={handleEdit} 
//             sx={{ mt: 3, bgcolor: '#1976D2', color: '#FFFFFF', '&:hover': { bgcolor: '#1565C0' } }}
//           >
//             Edit Profile
//           </Button>
//         ) : (
//           <Button 
//             variant="contained" 
//             fullWidth 
//             onClick={handleUpdate} 
//             sx={{ mt: 3, bgcolor: '#1976D2', color: '#FFFFFF', '&:hover': { bgcolor: '#1565C0' } }}
//           >
//             Update Profile
//           </Button>
//         )}
//       </Paper>
//     </Container>
//   );
// }



import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography, Box, Paper } from "@mui/material";
import { db } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";


export default function BuyerProfile() {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userEmail = "johndoe@example.com"; // Replace with auth user email
        const q = query(collection(db, "buyer_registration"), where("Email", "==", userEmail));
        const querySnapshot = await getDocs(q);
    
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const userData = doc.data();
          setUserData({ ...userData, docId: doc.id }); // include doc ID
        } else {
          console.log("No user found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
        fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    try {
      const docRef = doc(db, "buyer_registration", userData.docId); // Use doc ID
      const { Name, Address, Mobile } = userData;
  
      await updateDoc(docRef, { Name, Address, Mobile });
  
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Try again.");
    }
  };
  
  if (!userData) {
    return <Typography>Loading profile...</Typography>;
  }

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={5} sx={{ p: 4, bgcolor: '#FAFAFA', color: '#757575', borderRadius: 3, width: '100%' }}>
        <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#1976D2' }}>
          Buyer Profile
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
          />
          <TextField 
            fullWidth 
            label="Email" 
            name="Email" 
            type="email" 
            value={userData.Email} 
            onChange={handleChange} 
            margin="normal" 
            disabled 
          />
          <TextField 
            fullWidth 
            label="Address" 
            name="Address" 
            value={userData.Address} 
            onChange={handleChange} 
            margin="normal" 
            disabled={!isEditing} 
          />
          <TextField 
            fullWidth 
            label="Mobile" 
            name="Mobile" 
            type="tel" 
            value={userData.Mobile} 
            onChange={handleChange} 
            margin="normal" 
            disabled={!isEditing} 
          />
        </Box>
        {!isEditing ? (
          <Button 
            variant="contained" 
            fullWidth 
            onClick={handleEdit} 
            sx={{ mt: 3, bgcolor: '#1976D2', color: '#FFFFFF' }}
          >
            Edit Profile
          </Button>
        ) : (
          <Button 
            variant="contained" 
            fullWidth 
            onClick={handleUpdate} 
            sx={{ mt: 3, bgcolor: '#1976D2', color: '#FFFFFF' }}
          >
            Update Profile
          </Button>
        )}
      </Paper>
    </Container>
  );
}
