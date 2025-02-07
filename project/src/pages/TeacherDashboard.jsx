import { motion } from 'framer-motion';
import { FaUserGraduate, FaChartBar, FaBell } from 'react-icons/fa';

function TeacherDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Teacher Dashboard</h1>
        <p className="text-gray-600">Monitor student progress and performance</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaUserGraduate className="text-2xl text-blue-500 mr-3" />
            <h2 className="text-xl font-semibold">Total Students</h2>
          </div>
          <p className="text-3xl font-bold text-blue-500">28</p>
          <p className="text-sm text-gray-600">Active learners</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaChartBar className="text-2xl text-green-500 mr-3" />
            <h2 className="text-xl font-semibold">Class Average</h2>
          </div>
          <p className="text-3xl font-bold text-green-500">82%</p>
          <p className="text-sm text-gray-600">Overall performance</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaBell className="text-2xl text-yellow-500 mr-3" />
            <h2 className="text-xl font-semibold">Alerts</h2>
          </div>
          <p className="text-3xl font-bold text-yellow-500">3</p>
          <p className="text-sm text-gray-600">Require attention</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Student List</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Alex Johnson</p>
                <p className="text-sm text-gray-600">Mathematics: 85%</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800">View Details</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Sarah Williams</p>
                <p className="text-sm text-gray-600">Mathematics: 92%</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800">View Details</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Michael Brown</p>
                <p className="text-sm text-gray-600">Mathematics: 78%</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800">View Details</button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium">Quiz Completed</p>
              <p className="text-sm text-gray-600">15 students completed Algebra Quiz #3</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="font-medium">Low Performance Alert</p>
              <p className="text-sm text-gray-600">2 students scoring below 60% in recent tests</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium">New Assignment Posted</p>
              <p className="text-sm text-gray-600">Chapter 4 homework assigned to all students</p>
              <p className="text-xs text-gray-500">2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;