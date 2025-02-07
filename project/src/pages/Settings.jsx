import { motion } from 'framer-motion';
import { FaUser, FaBell, FaLock } from 'react-icons/fa';

function Settings() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600">Manage your account preferences</p>
      </motion.div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b">
          <nav className="flex">
            <button className="px-6 py-4 text-indigo-600 border-b-2 border-indigo-600">
              Account
            </button>
            <button className="px-6 py-4 text-gray-600 hover:text-gray-800">
              Notifications
            </button>
            <button className="px-6 py-4 text-gray-600 hover:text-gray-800">
              Privacy
            </button>
          </nav>
        </div>

        <div className="p-6">
          <div className="max-w-2xl">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaUser className="text-2xl text-gray-400 mr-3" />
                <h2 className="text-xl font-semibold">Profile Information</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    defaultValue="Alex Johnson"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    defaultValue="alex@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaBell className="text-2xl text-gray-400 mr-3" />
                <h2 className="text-xl font-semibold">Notifications</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="emailNotif"
                    className="h-4 w-4 text-indigo-600 rounded"
                    defaultChecked
                  />
                  <label htmlFor="emailNotif" className="ml-2 text-gray-700">
                    Email Notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="progressNotif"
                    className="h-4 w-4 text-indigo-600 rounded"
                    defaultChecked
                  />
                  <label htmlFor="progressNotif" className="ml-2 text-gray-700">
                    Progress Updates
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaLock className="text-2xl text-gray-400 mr-3" />
                <h2 className="text-xl font-semibold">Privacy</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="publicProfile"
                    className="h-4 w-4 text-indigo-600 rounded"
                  />
                  <label htmlFor="publicProfile" className="ml-2 text-gray-700">
                    Make profile public
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="shareProgress"
                    className="h-4 w-4 text-indigo-600 rounded"
                    defaultChecked
                  />
                  <label htmlFor="shareProgress" className="ml-2 text-gray-700">
                    Share progress with teachers
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;