import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import background from '../assets/background.svg'
import { summarizeText } from '../services/summarizeService'; // Adjust path if needed

const SummarizeApp = () => {
  // State to hold input text and summary
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
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
  
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center rounded-xl bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/fdf09acf-defd-4945-9c1d-9d3c2392a7ea.png")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                       Summarise your text
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Input your text below and we'll generate a summary for you. You can also upload a document or PDF file.
                    </h2>
                  </div>

                  <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                      <div
                        className="text-[#49779c] flex border border-[#cedde8] bg-slate-50 items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                      >
                        <img src={background} alt="background" />
                      </div>
                      <input
                        placeholder="Paste your text here"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d151c] focus:outline-0 focus:ring-0 border border-[#cedde8] bg-slate-50 focus:border-[#cedde8] h-full placeholder:text-[#49779c] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                      />
                      <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#cedde8] bg-slate-50 pr-[7px]">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                          onClick={handleSummarize}
                          disabled={loading}
                        >
                          {loading ? 'Loading...' : 'Summarize'}
                        </button>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="mt-4">
                {error && (
                  <div className="p-4 text-center bg-red-200 rounded-xl">
                    <h3 className="text-lg font-bold text-red-700">Error:</h3>
                    <p>{error}</p>
                  </div>
                )}
                {summary && !error && (
                  <div className="p-4 text-center bg-slate-200 rounded-xl">
                    <h3 className="text-lg font-bold">Summary:</h3>
                    <p>{summary}</p>
                  </div>
                )}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarizeApp;
