import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="text-white min-h-screen w-screen">
      <Navbar />
      <div className="pt-20">
        <h1 className="text-4xl text-center mt-10">Welcome to My Portfolio</h1>
      </div>
    </div>
  );
}

export default App
