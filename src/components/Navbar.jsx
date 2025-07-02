const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-800 via-indigo-500 to-blue-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jake Sales</h1>
        <ul className="flex space-x-6 list-none m-0 p-0">
          <li><a href="HomePage" className="hover:text-gray-400">Home</a></li>
          <li><a href="Projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="Work" className="hover:text-gray-400">Work</a></li>
          <li><a href="Resume" className="hover:text-gray-400">Resume</a></li>
          <li><a href="Contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;