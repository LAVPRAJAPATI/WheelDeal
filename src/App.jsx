import React from "react";
import SellerLogin from "./page/SellerLogin";
import SellerInquiries from "./page/SellerInquiries";
import SellerRegistervehicles from "./page/SellerRegistervehicles";
import SellerRegistration from "./page/SellerRegistration";
import BuyerLogin from "./page/BuyerLogin";
import BuyerRegistration from "./page/BuyerRegistration";
import BuyerCars from "./page/BuyerCars";
import BuyerPastinquiries from "./page/BuyerPastinquiries";
import Homepage from "./page/Homepage";
import BuyerProfile from "./page/BuyerProfile";
import SellerProfile from "./page/SellerProfile";
import SellerCars from "./page/SellerCars";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import CarDetails from "./page/CarDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/Seller/Cars" Component={SellerCars} />
          <Route path="/CarDetails/" Component={CarDetails} />
          <Route path="/Homepage" Component={Homepage} />
          <Route path="/Buyer/Profile" Component={BuyerProfile} />
          <Route path="/Seller/Profile" Component={SellerProfile} />
          <Route path="/Seller/Login" Component={SellerLogin} />
          <Route path="/Seller/Inquiries" Component={SellerInquiries} />
          <Route
            path="/Seller/Registervehicles"
            Component={SellerRegistervehicles}
          />
          <Route path="/Seller/Registration" Component={SellerRegistration} />
          <Route path="/Buyer/Login" Component={BuyerLogin} />
          <Route path="/Buyer/Registration" Component={BuyerRegistration} />
          <Route path="/Buyer/Cars" Component={BuyerCars} />
          <Route path="/Buyer/Pastinquiries" Component={BuyerPastinquiries} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
