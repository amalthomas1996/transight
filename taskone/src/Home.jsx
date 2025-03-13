import React from "react";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./Search/Search";
import Profile from "./Profile/Profile";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Profile />
    </>
  );
};

export default Home;
