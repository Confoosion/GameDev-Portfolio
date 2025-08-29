// Navbar.jsx
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-800 via-indigo-500 to-blue-800 text-white shadow-md z-50">
    <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">Jake Sales</Link>
      </h1>
      <ul className="flex space-x-6 list-none m-0 p-0">
        <li><HashLink smooth to="/#about" className="hover:text-gray-200">About</HashLink></li>
        <li><HashLink smooth to="/#projects" className="hover:text-gray-200">Projects</HashLink></li>
        <li><HashLink smooth to="/#resume" className="hover:text-gray-200">Resume</HashLink></li>
        <li><HashLink smooth to="/#contact" className="hover:text-gray-200">Contact</HashLink></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
