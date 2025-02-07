import { motion } from 'framer-motion';
import { FaChartLine, FaCalendarAlt, FaBrain } from 'react-icons/fa';

function ProgressDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Progress Dashboard</h1>
        <p className="text-gray-600">Track your learning journey</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaChartLine className="text-2xl text-indigo-500 mr-3" />
            <h2 className="text-xl font-semibold">Overall Progress</h2>
          </div>
          <p className="text-3xl font-bold text-indigo-500 mb-2">78%</p>
          <p className="text-sm text-gray-600">+5% from last week</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaCalendarAlt className="text-2xl text-green-500 mr-3" />
            <h2 className="text-xl font-semibold">Study Streak</h2>
          </div>
          <p className="text-3xl font-bold text-green-500 mb-2">12 days</p>
          <p className="text-sm text-gray-600">Keep it up!</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaBrain className="text-2xl text-purple-500 mr-3" />
            <h2 className="text-xl font-semibold">Focus Score</h2>
          </div>
          <p className="text-3xl font-bold text-purple-500 mb-2">85/100</p>
          <p className="text-sm text-gray-600">Excellent concentration!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Subject Progress</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Mathematics</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Science</span>
                <span>70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>History</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="bg-yellow-100 p-2 rounded-full mr-4">
                <FaChartLine className="text-yellow-500" />
              </div>
              <div>
                <p className="font-medium">Perfect Score Streak</p>
                <p className="text-sm text-gray-600">Achieved 100% in 3 consecutive quizzes</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <FaBrain className="text-green-500" />
              </div>
              <div>
                <p className="font-medium">Focus Master</p>
                <p className="text-sm text-gray-600">Maintained high focus for 2 hours straight</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProgressDashboard;