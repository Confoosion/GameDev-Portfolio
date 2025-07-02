import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-800 via-indigo-500 to-blue-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jake Sales</h1>
        <ul className="flex space-x-6 list-none m-0 p-0">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/work" className="hover:text-gray-400">Work</Link></li>
          <li><Link to="/resume" className="hover:text-gray-400">Resume</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;