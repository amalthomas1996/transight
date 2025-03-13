import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import AddDriver from "./AddDriver/AddDriver";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-driver" element={<AddDriver />} />
      </Routes>
    </Router>
  );
}

export default App;
