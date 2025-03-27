// import React, { useState } from "react";
// import { Container, TextField, Button, Grid, Typography } from "@mui/material";

// function BuyerLogin() {
//   const [formData, setFormData] = useState({
//     Email: "",
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
//           maxWidth: "400px",
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
//           Buyer Login
//         </Typography>

//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               name="Email"
//               type="email"
//               fullWidth
//               label="Email"
//               variant="outlined"
//               onChange={handleChange}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   backgroundColor: "#FFFFFF", // Matches Homepage TextField background
//                   "& fieldset": {
//                     borderColor: "#1976D2", // Matches Homepage primary
//                   },
//                   "&:hover fieldset": {
//                     borderColor: "#1565C0", // Darker primary on hover
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#1976D2", // Matches Homepage primary
//                   },
//                 },
//                 "& .MuiInputBase-input": {
//                   color: "#757575", // Matches Homepage secondary text
//                 },
//                 "& .MuiInputLabel-root": {
//                   color: "#757575", // Matches Homepage secondary text
//                 },
//                 "& .MuiInputLabel-root.Mui-focused": {
//                   color: "#1976D2", // Matches Homepage primary
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
//                 "& .MuiOutlinedInput-root": {
//                   backgroundColor: "#FFFFFF",
//                   "& fieldset": {
//                     borderColor: "#1976D2",
//                   },
//                   "&:hover fieldset": {
//                     borderColor: "#1565C0",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#1976D2",
//                   },
//                 },
//                 "& .MuiInputBase-input": {
//                   color: "#757575",
//                 },
//                 "& .MuiInputLabel-root": {
//                   color: "#757575",
//                 },
//                 "& .MuiInputLabel-root.Mui-focused": {
//                   color: "#1976D2",
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
//               onClick={() => console.log("Login Data:", formData)}
//             >
//               Login
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// }

// export default BuyerLogin;



import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase"; // Adjust path to your firebase.js
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google"; // Correct import for GoogleIcon

function BuyerLogin() {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.Email, formData.Password);
      console.log("Buyer logged in successfully!");
      navigate("/buyer-car-list");
    } catch (error) {
      console.error("Login failed:", error.message);
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("Buyer logged in with Google!");
      navigate("/Buyer/Login");
    } catch (error) {
      console.error("Google login failed:", error.message);
      setError(error.message);
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
          maxWidth: "400px",
          padding: "20px",
          background: "#FAFAFA",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
        onSubmit={handleEmailLogin}
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
          Buyer Login
        </Typography>

        {error && (
          <Typography color="error" style={{ textAlign: "center", marginBottom: "10px" }}>
            {error}
          </Typography>
        )}

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="Email"
              type="email"
              fullWidth
              label="Email"
              variant="outlined"
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFFFFF",
                  "& fieldset": {
                    borderColor: "#1976D2",
                  },
                  "&:hover fieldset": {
                    borderColor: "#1565C0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976D2",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#757575",
                },
                "& .MuiInputLabel-root": {
                  color: "#757575",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1976D2",
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
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFFFFF",
                  "& fieldset": {
                    borderColor: "#1976D2",
                  },
                  "&:hover fieldset": {
                    borderColor: "#1565C0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976D2",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#757575",
                },
                "& .MuiInputLabel-root": {
                  color: "#757575",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1976D2",
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
              type="submit"
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                onClick={handleGoogleLogin}
                startIcon={<GoogleIcon />}
                sx={{
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  borderColor: "#1976D2",
                  color: "#1976D2",
                  "&:hover": {
                    borderColor: "#1565C0",
                    color: "#1565C0",
                  },
                }}
              >
                Login with Google
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default BuyerLogin;