import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography } from "@mui/material";

function BuyerRegistration() {
  const [formData, setFormData] = useState({
    Name: "",
    Address: "",
    City: "",
    Email: "",
    Mobile: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container
      maxWidth={false}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f9",
      }}
    >
      <form
        style={{
          width: "80%",
          maxWidth: "500px",
          padding: "20px",
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Buyer Registration
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField name="Name" fullWidth label="Full Name" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="Address" fullWidth label="Address" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="City" fullWidth label="City" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="Email" type="email" fullWidth label="Email" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="Mobile" type="tel" fullWidth label="Mobile Number" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="Password" type="password" fullWidth label="Password" variant="outlined" onChange={handleChange} />
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
                backgroundColor:"limegreen",
                color: "white",
              }}
              onClick={() => console.log("Form Data:", formData)}
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





// import React, { useState } from "react";
// import { Container, TextField, Button, Grid, Typography } from "@mui/material";
// import { auth, createUserWithEmailAndPassword, db, collection, addDoc } from "../config/firebase";

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

//   const handleSubmit = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, formData.Email, formData.Password);
//       const user = userCredential.user;
//       await addDoc(collection(db, "buyers"), {
//         uid: user.uid,
//         Name: formData.Name,
//         Address: formData.Address,
//         City: formData.City,
//         Email: formData.Email,
//         Mobile: formData.Mobile,
//       });

//       alert("Buyer registered successfully!");
//     } catch (error) {
//       console.error("Error registering user:", error.message);
//       alert(error.message);
//     }
//   };

//   return (
//     <Container
//       maxWidth={false}
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#f4f6f9",
//       }}
//     >
//       <form
//         style={{
//           width: "80%",
//           maxWidth: "500px",
//           padding: "20px",
//           background: "#ffffff",
//           borderRadius: "12px",
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Typography
//           variant="h4"
//           style={{
//             textAlign: "center",
//             fontSize: "28px",
//             fontWeight: "bold",
//             color: "#333",
//             marginBottom: "20px",
//           }}
//         >
//           Buyer Registration
//         </Typography>

//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField name="Name" fullWidth label="Full Name" variant="outlined" onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField name="Address" fullWidth label="Address" variant="outlined" onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField name="City" fullWidth label="City" variant="outlined" onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField name="Email" type="email" fullWidth label="Email" variant="outlined" onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField name="Mobile" type="tel" fullWidth label="Mobile Number" variant="outlined" onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField name="Password" type="password" fullWidth label="Password" variant="outlined" onChange={handleChange} />
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
//                 backgroundColor: "limegreen",
//                 color: "white",
//               }}
//               onClick={handleSubmit}
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
