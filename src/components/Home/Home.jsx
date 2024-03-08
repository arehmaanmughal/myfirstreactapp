import React from "react";
import Header from "../Header/Header";
import Pricing from "../Pricing/Pricing"; 
import Login from "../Login";
import Profile from "../Profile";
const Home = () => {
  return (
    <div>
      {/* <Header />
      <Pricing/> */}
      <Login/>
      <Profile/>
    </div>
  );
};

export default Home;
