import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function LessonScreen() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-bold text-gray-800">Introduction to Algebra</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Math</span>
            <span>•</span>
            <span>Chapter 1</span>
            <span>•</span>
            <span>15 minutes</span>
          </div>
        </motion.div>

        <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
          <p className="text-gray-500">Lesson content will appear here</p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <button className="flex items-center px-4 py-2 text-gray-700 hover:text-indigo-600">
            <FaArrowLeft className="mr-2" /> Previous
          </button>
          <div className="flex space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 flex items-center">
              <FaPlay className="mr-2" /> Start
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 flex items-center">
              <FaPause className="mr-2" /> Pause
            </button>
          </div>
          <button className="flex items-center px-4 py-2 text-gray-700 hover:text-indigo-600">
            Next <FaArrowRight className="ml-2" />
          </button>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Your Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonScreen;