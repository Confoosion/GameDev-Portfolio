import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

import collageImage from './assets/PortfolioCollage.png';

function App() {
  return (
    <Router basename="/GameDev-Portfolio">
      <div className="text-white min-h-screen w-screen text-base md:text-lg">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <div className="pt-20">
                  <img 
                    src={collageImage} 
                    alt="Jake Sales banner" 
                    className="w-full -mt-4"
                    style={{ display: 'block' }}
                  />
                  <AboutMe />
                </div>
              </>
            } 
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
