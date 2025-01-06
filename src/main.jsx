import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import SummarizeApp from './components/SummarizeApp';
import LoginPage from './pages/LoginPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SummarizeApp />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);