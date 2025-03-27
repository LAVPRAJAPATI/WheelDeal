// import React, { useState } from "react";
// import { Container, TextField, Button, Grid, Typography } from "@mui/material";

// function BuyerRegistration() {
//   const [formData, setFormData] = useState({
//     Name: "",
//     Address: "",
//     City: "",
//     Email: "",
//     Mobile: "",
//     Password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <Container
//       maxWidth={false}
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "white", // Matches Homepage Footer
//       }}
//     >
//       <form
//         style={{
//           width: "80%",
//           maxWidth: "500px",
//           padding: "20px",
//           background: "#FAFAFA", // Matches Homepage card background
//           borderRadius: "12px",
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
//         }}
//       >
//         <Typography
//           variant="h4"
//           style={{
//             textAlign: "center",
//             fontSize: "28px",
//             fontWeight: "bold",
//             color: "#1976D2", // Matches Homepage primary
//             marginBottom: "20px",
//           }}
//         >
//           Buyer Registration
//         </Typography>

//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               name="Name"
//               fullWidth
//               label="Full Name"
//               variant="outlined"
//               onChange={handleChange}
//               sx={{
//                 "& .MuiInputBase-input": { color: "#757575" }, // Matches Homepage secondary text
//                 "& .MuiInputLabel-root": { color: "#757575" }, // Matches Homepage secondary text
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "#1976D2" }, // Matches Homepage primary
//                   "&:hover fieldset": { borderColor: "#1565C0" }, // Darker primary on hover
//                   "&.Mui-focused fieldset": { borderColor: "#1976D2" }, // Matches Homepage primary
//                   "& .MuiInputBase-input::placeholder": { color: "#757575", opacity: 1 }, // Matches Homepage secondary text
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               name="Address"
//               fullWidth
//               label="Address"
//               variant="outlined"
//               onChange={handleChange}
//               sx={{
//                 "& .MuiInputBase-input": { color: "#757575" },
//                 "& .MuiInputLabel-root": { color: "#757575" },
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "#1976D2" },
//                   "&:hover fieldset": { borderColor: "#1565C0" },
//                   "&.Mui-focused fieldset": { borderColor: "#1976D2" },
//                   "& .MuiInputBase-input::placeholder": { color: "#757575", opacity: 1 },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               name="City"
//               fullWidth
//               label="City"
//               variant="outlined"
//               onChange={handleChange}
//               sx={{
//                 "& .MuiInputBase-input": { color: "#757575" },
//                 "& .MuiInputLabel-root": { color: "#757575" },
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "#1976D2" },
//                   "&:hover fieldset": { borderColor: "#1565C0" },
//                   "&.Mui-focused fieldset": { borderColor: "#1976D2" },
//                   "& .MuiInputBase-input::placeholder": { color: "#757575", opacity: 1 },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               name="Email"
//               type="email"
//               fullWidth
//               label="Email"
//               variant="outlined"
//               onChange={handleChange}
//               sx={{
//                 "& .MuiInputBase-input": { color: "#757575" },
//                 "& .MuiInputLabel-root": { color: "#757575" },
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "#1976D2" },
//                   "&:hover fieldset": { borderColor: "#1565C0" },
//                   "&.Mui-focused fieldset": { borderColor: "#1976D2" },
//                   "& .MuiInputBase-input::placeholder": { color: "#757575", opacity: 1 },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               name="Mobile"
//               type="tel"
//               fullWidth
//               label="Mobile Number"
//               variant="outlined"
//               onChange={handleChange}
//               sx={{
//                 "& .MuiInputBase-input": { color: "#757575" },
//                 "& .MuiInputLabel-root": { color: "#757575" },
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "#1976D2" },
//                   "&:hover fieldset": { borderColor: "#1565C0" },
//                   "&.Mui-focused fieldset": { borderColor: "#1976D2" },
//                   "& .MuiInputBase-input::placeholder": { color: "#757575", opacity: 1 },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               name="Password"
//               type="password"
//               fullWidth
//               label="Password"
//               variant="outlined"
//               onChange={handleChange}
//               sx={{
//                 "& .MuiInputBase-input": { color: "#757575" },
//                 "& .MuiInputLabel-root": { color: "#757575" },
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "#1976D2" },
//                   "&:hover fieldset": { borderColor: "#1565C0" },
//                   "&.Mui-focused fieldset": { borderColor: "#1976D2" },
//                   "& .MuiInputBase-input::placeholder": { color: "#757575", opacity: 1 },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               fullWidth
//               variant="contained"
//               color="primary"
//               style={{
//                 padding: "12px",
//                 fontSize: "16px",
//                 borderRadius: "5px",
//                 backgroundColor: "#1976D2", // Matches Homepage primary
//                 color: "#FFFFFF", // Matches Homepage button text
//               }}
//               onClick={() => console.log("Form Data:", formData)}
//             >
//               Register
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// }

// export default BuyerRegistration;


import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase"; // Adjust path to your firebase.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

function BuyerRegistration() {
  const [formData, setFormData] = useState({
    Name: "",
    Address: "",
    City: "",
    Email: "",
    Mobile: "",
    Password: "",
  });
  const [error, setError] = useState(""); // Added for error feedback
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission refresh
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.Email,
        formData.Password
      );
      const user = userCredential.user;

      // Store additional buyer details in Firestore
      await addDoc(collection(db, "buyers"), {
        uid: user.uid,
        name: formData.Name,
        address: formData.Address,
        city: formData.City,
        email: formData.Email,
        mobile: formData.Mobile,
        createdAt: new Date().toISOString(),
      });

      console.log("Buyer registered successfully!");
      navigate("/Buyer/Login"); // Redirect to buyer login page
    } catch (error) {
      console.error("Registration failed:", error.message);
      setError(error.message); // Display error to user
    }
  };

  return (
    <Container
      maxWidth={false}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <form
        style={{
          width: "80%",
          maxWidth: "500px",
          padding: "20px",
          background: "#FAFAFA",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
        onSubmit={handleSubmit} // Added form submission handler
      >
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#1976D2",
            marginBottom: "20px",
          }}
        >
          Buyer Registration
        </Typography>

        {error && (
          <Typography color="error" style={{ textAlign: "center", marginBottom: "10px" }}>
            {error}
          </Typography>
        )}

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="Name"
              fullWidth
              label="Full Name"
              variant="outlined"
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-input": { color: "#757575" },
                "& .MuiInputLabel-root": { color: "#757575" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#1976D2" },
                  "&:hover fieldset": { borderColor: "#1565C0" },
                  "&.Mui-focused fieldset": { borderColor: "#1976D2" },
                  "& .MuiInputBase-input::placeholder": { color: "#757575", opacity: 1 },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Address"
              fullWidth
              label="Address"
              variant="outlined"
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-input": { color: "#757575" },
                "& .MuiInputLabel-root": { color: "#757575" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#1976D2" },
                  "&:hover fieldset": { borderColor: "#1565C0" },
                  "&.Mui-focused fieldset": { borderColor: "#1976D2" },
                  "& .MuiInputBase-input::placeholder": { color: "#757575", opacity: 1 },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="City"
              fullWidth
              label="City"
              variant="outlined"
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-input": { color: "#757575" },
                "& .MuiInputLabel-root": { color: "#757575" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#1976D2" },
                  "&:hover fieldset": { borderColor: "#1565C0" },
                  "&.Mui-focused fieldset": { borderColor: "#1976D2" },
                  "& .MuiInputBase-input::placeholder": { color: "#757575", opacity: 1 },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Email"
              type="email"
              fullWidth
              label="Email"
              variant="outlined"
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-input": { color: "#757575" },
                "& .MuiInputLabel-root": { color: "#757575" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#1976D2" },
                  "&:hover fieldset": { borderColor: "#1565C0" },
                  "&.Mui-focused fieldset": { borderColor: "#1976D2" },
                  "& .MuiInputBase-input::placeholder": { color: "#757575", opacity: 1 },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Mobile"
              type="tel"
              fullWidth
              label="Mobile Number"
              variant="outlined"
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-input": { color: "#757575" },
                "& .MuiInputLabel-root": { color: "#757575" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#1976D2" },
                  "&:hover fieldset": { borderColor: "#1565C0" },
                  "&.Mui-focused fieldset": { borderColor: "#1976D2" },
                  "& .MuiInputBase-input::placeholder": { color: "#757575", opacity: 1 },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Password"
              type="password"
              fullWidth
              label="Password"
              variant="outlined"
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-input": { color: "#757575" },
                "& .MuiInputLabel-root": { color: "#757575" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#1976D2" },
                  "&:hover fieldset": { borderColor: "#1565C0" },
                  "&.Mui-focused fieldset": { borderColor: "#1976D2" },
                  "& .MuiInputBase-input::placeholder": { color: "#757575", opacity: 1 },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{
                padding: "12px",
                fontSize: "16px",
                borderRadius: "5px",
                backgroundColor: "#1976D2",
                color: "#FFFFFF",
              }}
              type="submit" // Changed from onClick to form submission
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default BuyerRegistration;