import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import collageImage from './assets/PortfolioCollage.png';

function App() {
  return (
    <div className="text-white min-h-screen w-screen text-base md:text-lg">
      <Navbar />
      <div className="pt-20">
        <img 
          src={collageImage} 
          alt="Jake Sales banner" 
          className="w-full -mt-4"
          style={{ display: 'block' }}
        />
        <AboutMe />
      </div>
    </div>
  );
}

export default App
