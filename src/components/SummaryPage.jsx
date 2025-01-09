import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import background from '../assets/background.svg';
import { summarizeText } from '../services/summarizeService'; // Adjust path if needed

const SummarizeApp = () => {
  // State to hold input text, summary, saved summaries, and error/loading states
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [savedSummaries, setSavedSummaries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleSummarize = async () => {
    if (!inputText) { 
      setSummary('Please enter some text to summarize.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const summarizedText = await summarizeText(inputText);
      setSummary(summarizedText);  // Set the summary state with the response
    } catch (err) {
      setError(err.message || 'Failed to summarize text.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    if (!summary) return;
    setSavedSummaries((prev) => [...prev, summary]);
    setSummary(""); // Clear the summary field after saving
    setInputText(""); // Optionally clear input text
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <Header />
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-center">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            Summarize your text
          </h1>
          <h2 className="text-white text-sm font-normal leading-normal">
            Input your text below and we'll generate a summary for you. You can also upload a document or PDF file.
          </h2>
        </div>

        <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px]">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-[#49779c] flex border border-[#cedde8] bg-slate-50 items-center justify-center pl-[15px] rounded-l-xl border-r-0">
              <img src={background} alt="background" />
            </div>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter your text here"
              className="p-2 border-l border-[#cedde8] rounded-r-xl w-full"
            />
          </div>
        </label>

        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={handleSummarize}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Summarize'}
        </button>

        {error && (
          <div className="mt-4 text-red-500">{error}</div>
        )}

        <div className="p-4 text-center bg-slate-200 rounded-xl mt-8">
          <h3 className="text-lg font-bold">Summary:</h3>
          <p>{summary}</p>
          <button
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={handleSave}
          >
            Save Summary
          </button>
        </div>

        <div className="mt-8">
          {savedSummaries.length > 0 && (
            <div>
              <h3 className="text-lg font-bold">Saved Summaries:</h3>
              <ul className="list-disc ml-5">
                {savedSummaries.map((saved, index) => (
                  <li key={index} className="mt-1 text-sm">
                    {saved}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SummarizeApp;
