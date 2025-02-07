import { motion } from 'framer-motion';
import { FaStar, FaTrophy, FaMedal, FaUsers } from 'react-icons/fa';

function GamificationHub() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Gamification Hub</h1>
        <p className="text-gray-600">Level up your learning journey!</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaStar className="text-yellow-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Points</h2>
          <p className="text-3xl font-bold text-yellow-500">2,450</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaTrophy className="text-purple-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Level</h2>
          <p className="text-3xl font-bold text-purple-500">15</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaMedal className="text-blue-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Badges</h2>
          <p className="text-3xl font-bold text-blue-500">8</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaUsers className="text-green-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Rank</h2>
          <p className="text-3xl font-bold text-green-500">#42</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Daily Challenges</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">Complete Math Quiz</p>
                <p className="text-sm text-gray-600">+100 points</p>
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700">
                Start
              </button>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">Read Science Article</p>
                <p className="text-sm text-gray-600">+50 points</p>
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700">
                Start
              </button>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-xl font-bold text-yellow-500 mr-3">1.</span>
                <span>Sarah M.</span>
              </div>
              <span className="font-semibold">3,240 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-400 mr-3">2.</span>
                <span>John D.</span>
              </div>
              <span className="font-semibold">2,980 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-xl font-bold text-orange-500 mr-3">3.</span>
                <span>Emma W.</span>
              </div>
              <span className="font-semibold">2,750 pts</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GamificationHub;