// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import AboutMe from './components/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function Home() {
  return (
    <div className="pt-20">
      <section id="about" className="scroll-mt-24 pb-32"><AboutMe /></section>
      <section id="projects" className="scroll-mt-24 pb-32"><Projects initialLimit={4} /></section>
      <section id="resume" className="scroll-mt-24 pb-32"><Resume /></section>
      <section id="contact" className="scroll-mt-24 pb-32"><Contact /></section>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNavbar = /^\/projects\/[^/]+$/.test(location.pathname);

  return (
    <div className="text-white min-h-screen w-screen text-base md:text-lg">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<div className="pt-20"><Projects /></div>} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/resume" element={<div className="pt-20"><Resume /></div>} />
        <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router basename="/GameDev-Portfolio">
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
