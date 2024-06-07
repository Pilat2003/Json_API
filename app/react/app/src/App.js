import './App.css';
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import ClickExample from './Componnts/ClickExample';
import NextExample from './Componnts/NextExample';

function App() {

  return (
    <div className="App">
      <Router>
            <Routes>
                <Route  path="/" element={<ClickExample />} />
                <Route  path="/NextExample" element={<NextExample />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
