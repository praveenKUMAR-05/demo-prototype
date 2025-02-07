import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LessonScreen from './pages/LessonScreen';
import GamificationHub from './pages/GamificationHub';
import ProgressDashboard from './pages/ProgressDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/lesson" element={<LessonScreen />} />
            <Route path="/gamification" element={<GamificationHub />} />
            <Route path="/progress" element={<ProgressDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;