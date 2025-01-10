// src/components/SavedSummaries.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Ensure you import Link if you're using it
import { getSummaries } from "../services/summarizeService"; 

const SummaryCard = ({ title, time, image }) => {
  return (
    <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
      <div className="flex items-center gap-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="flex flex-col justify-center">
          <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">{title}</p>
          <p className="text-[#4e7397] text-sm font-normal leading-normal line-clamp-2">{time} read</p>
        </div>
      </div>
      <div className="shrink-0">
        <a href="/summary" className="text-base font-medium leading-normal">View</a>
      </div>
    </div>
  );
};

const SavedSummaries = () => {
  const [summaries, setSummaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // To track page number
  const [hasMore, setHasMore] = useState(true); // To track if more summaries exist

  useEffect(() => {
    const fetchSummaries = async () => {
      try {
        const data = await getSummaries(page); // Pass page as parameter
        setSummaries(prevSummaries => [...prevSummaries, ...data.summaries]); // Append new summaries
        setHasMore(data.summaries.length > 0);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch summaries.');
        setLoading(false);
      }
    };
    fetchSummaries();
  }, [page]); // Re-fetch when page changes

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <>
      {/* Header Section */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
        <div className="flex items-center gap-4 text-[#0e141b]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">
            Summarize.ai
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">
              Dashboard
            </a>
            <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">
              Explore
            </a>
          </div>
          <Link to="/" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">New Summary</span>
          </Link>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                "url('https://cdn.usegalileo.ai/sdxl10/8a02553d-8f9e-4656-90f4-9f371688330a.png')",
            }}
          ></div>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#0e141b] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
              Saved Summaries
            </p>
          </div>
          {summaries.length > 0 ? (
            summaries.map((summary, index) => (
              <SummaryCard key={index} title={summary.content} time="1 min" image={summary.image} />
            ))
          ) : (
            <p>No summaries available.</p>
          )}
          {hasMore && (
            <button onClick={loadMore} className="btn-load-more">
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SavedSummaries;
