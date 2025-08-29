// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function Home() {
  return (
    <div className="pt-20">
      {/* About */}
      <section id="about" className="scroll-mt-24">
        <AboutMe />
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24">
        <Projects limit={4} />
      </section>

      {/* Resume (inline) */}
      <section id="resume" className="scroll-mt-24">
        {/* Option A: reuse your full Resume page component */}
        <Resume />

        {/* Option B (lighter): a compact preview with buttons
        <div className="px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Resume</h2>
          <div className="flex gap-4 justify-center">
            <a href="/GameDev-Portfolio/resume.pdf" target="_blank" rel="noopener noreferrer"
               className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
              View PDF
            </a>
            <a href="/GameDev-Portfolio/resume.pdf" download
               className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
              Download
            </a>
          </div>
        </div>
        */}
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Router basename="/GameDev-Portfolio">
      <div className="text-white min-h-screen w-screen text-base md:text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Keep standalone pages if you want direct routes */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
