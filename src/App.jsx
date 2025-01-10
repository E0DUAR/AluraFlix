import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "./Context/Context";
import Inicio from "./Pages/Inicio";
import NuevoVideo from "./Pages/NuevoVideo";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nuevoVideo" element={<NuevoVideo />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
