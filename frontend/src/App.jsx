// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
// import { Box } from '@mui/material';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import LayoutGridDemo from "./components/meme-gallery";
import TextGenerateEffectDemo from "./components/text-generate";
import ContainerTextFlipDemo from "./components/text-flip";
import BentoGridDemo from "./components/mood";

BentoGridDemo



const HomePage = () => (
  <div className="home-container">
    <div className="section">
      <ContainerTextFlipDemo />
    </div>
    <div className="section">
      <TextGenerateEffectDemo />
    </div>
    <div className="section">
      <LayoutGridDemo />
    </div>
    
  </div>
);

function App() {
  return (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mood" element={<BentoGridDemo />} />
          </Routes>
  )
}

export default App
