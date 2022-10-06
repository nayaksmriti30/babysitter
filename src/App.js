import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/css/style.css"; 
import "./assets/css/Media.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

import Index from "./pages/Index";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import UpdateProfile from "./pages/UpdateProfile";
import Parents from "./pages/Parents";
import Caregiver from "./pages/Caregiver";
import CreateProfile from "./pages/CreateProfile";
import Business from "./pages/Business";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />}></Route>
          <Route exact path="/faq" element={<Faq />}></Route>
          <Route exact path="/Blog" element={<Blog />}></Route>
          <Route exact path="/signin" element={<Login />}></Route>
          <Route exact path="/updateprofile" element={<UpdateProfile />}></Route>
          <Route exact path="/parents" element={<Parents />}></Route>          
          <Route exact path="/caregiver" element={<Caregiver />}></Route>
          <Route exact path="/createprofile" element={<CreateProfile />}></Route>
          <Route exact path="/business" element={<Business />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
