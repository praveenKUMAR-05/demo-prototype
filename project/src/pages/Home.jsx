import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaChartLine } from 'react-icons/fa';

function Home() {
  const studentName = "PRAVEEN KUMAR MOHAN"; // This would come from auth context in a real app

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome back, {studentName}!
        </h1>
        <p className="text-gray-600">Ready to continue your learning journey?</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-3xl text-indigo-600 mr-4" />
            <h2 className="text-xl font-semibold">Continue Learning</h2>
          </div>
          <p className="text-gray-600 mb-4">Pick up where you left off in Mathematics</p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700">
            Resume Lesson
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-4">
            <FaTrophy className="text-3xl text-yellow-500 mr-4" />
            <h2 className="text-xl font-semibold">Your Achievements</h2>
          </div>
          <p className="text-gray-600 mb-4">You've earned 3 new badges this week!</p>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600">
            View Badges
          </button>
        </motion.div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaChartLine className="text-3xl text-green-500 mr-4" />
          <h2 className="text-xl font-semibold">Learning Progress</h2>
        </div>
        <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Progress visualization coming soon</p>
        </div>
      </div>
    </div>
  );
}

export default Home;