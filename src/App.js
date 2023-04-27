import "./App.css";
import { NavBar } from "./components/NavBar";
import FootballVideo from "./assets/FootballVideo.mp4";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details/Details";
import { useState } from "react";

function App() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="App">
      <NavBar fixed="top" expanded={expanded} setExpanded={setExpanded} />
      <div className="main">
        <div
          className="overlay"
          onClick={() => {
            setExpanded(false);
            console.log(expanded);
          }}
        ></div>{" "}
      </div>
      <Routes>
        <Route path="/" element={<Details />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
