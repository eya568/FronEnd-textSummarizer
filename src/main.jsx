import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import SummarizeApp from './components/SummarizeApp';
import LoginPage from './pages/LoginPage';
import SavedSummaries from './components/savedSummaries';
import SummaryPage from './components/SummaryPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SummarizeApp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Saved" element={<SavedSummaries />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);