import { motion } from 'framer-motion';
import { FaBook, FaBrain, FaClock } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Learning Dashboard</h1>
        <p className="text-gray-600">Track your progress and continue learning</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaBook className="text-2xl text-blue-500 mr-3" />
            <h2 className="text-xl font-semibold">Current Lessons</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span>Mathematics</span>
              <span className="text-blue-500">75%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Science</span>
              <span className="text-blue-500">60%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>History</span>
              <span className="text-blue-500">90%</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaBrain className="text-2xl text-purple-500 mr-3" />
            <h2 className="text-xl font-semibold">Learning Stats</h2>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Daily Goal</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Weekly Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaClock className="text-2xl text-green-500 mr-3" />
            <h2 className="text-xl font-semibold">Study Time</h2>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-green-500">2.5 hrs</p>
            <p className="text-sm text-gray-600">Today's study time</p>
            <p className="text-gray-700 mt-4">Weekly average: 2.8 hrs/day</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;