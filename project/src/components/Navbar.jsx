import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaGamepad, FaCog } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-indigo-600">EduMind</Link>
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
              <FaHome className="mr-2" /> Home
            </Link>
            <Link to="/dashboard" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
              <FaChartBar className="mr-2" /> Dashboard
            </Link>
            <Link to="/gamification" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
              <FaGamepad className="mr-2" /> Games
            </Link>
            <Link to="/settings" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
              <FaCog className="mr-2" /> Settings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar