import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import SavedSummaries from './components/savedSummaries'
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/Saved" element={<SavedSummaries />} />
          <Route path="/summary" element={<SummaryPage />} />

        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;