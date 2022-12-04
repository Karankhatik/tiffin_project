import React from "react";
import HomeComponent from "./Component.js/HomeComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AddYourTiffin from "./Pages/AddYourTiffin";

import TiffinAdminLogin from "./AdminLoginSignup/TiffinAdminLogin";
import TiffinAdminSignup from "./AdminLoginSignup/TiffinAdminSignup";
import AdminAfterLogin from "./AdminLoginSignup/AdminAfterLogin";
import { AddTiffin } from "./SellerData/AddTiffin";
import AfterLogin from "./CostomerAfterLogin/AfterLogin";
import { AdminProfile } from "./Profile/AdminProfile";
import { CostomerProfile } from "./Profile/CostomerProfile";
import { About } from "./FooterPages/About";
import { PrivacyPolicy } from "./FooterPages/PrivacyPolicy";
import { ContactUs } from "./FooterPages/ContactUs";
import { FAQ } from "./FooterPages/FAQ";
import { OurServices } from "./FooterPages/OurServives";
import Cart from "./Order/Cart";
<<<<<<< HEAD
import { ErrorPage } from "./ErrorPage/ErrorPage";
=======
import MyOrder from "./Order/MyOrder";
>>>>>>> d886f8b1de6b24d5046c37b5cdfb051c1b08221c

function App() {
  // const [userId, setUserId] = useState("0");
  // console.log("State", userId);
  // setUserId("pandey");
  // console.log("updated state", userId);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="/addyourtiffin" element={<AddYourTiffin />} />
          <Route exact path="/loginadmin" element={<TiffinAdminLogin />} />
          <Route exact path="/signupadmin" element={<TiffinAdminSignup />} />
          <Route exact path="/adminlogged" element={<AdminAfterLogin />} />
          <Route path="/addtiffin" element={<AddTiffin />} />
          <Route path="/logged" element={<AfterLogin />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
          <Route path="/userprofile" element={<CostomerProfile />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/cart" element={<Cart />} />
<<<<<<< HEAD
          <Route path='/*' element={<ErrorPage/>}/>
=======
          <Route path="/my-order" element={<MyOrder />} />
>>>>>>> d886f8b1de6b24d5046c37b5cdfb051c1b08221c
        </Routes>
      </Router>
    </>
  );
}

export default App;
