import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";
import Profile from "./Profile/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Search />
      <Profile />
    </>
  );
}

export default App;
