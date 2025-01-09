import React from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
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
  );
};

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
        <Link to="/summary" className="text-base font-medium leading-normal">View</Link>
      </div>
    </div>
  );
};

const SavedSummaries = () => {
  const summaries = [
    { title: "How to write a great resume", time: "1 min", image: "https://cdn.usegalileo.ai/sdxl10/55f20968-877c-44e6-b92c-9077a2eec7cf.png" },
    { title: "The benefits of meditation", time: "3 min", image: "https://cdn.usegalileo.ai/sdxl10/758734d6-b678-4c77-8aa0-6fbb514c6015.png" },
    { title: "The most effective productivity hacks", time: "2 min", image: "https://cdn.usegalileo.ai/sdxl10/766475d4-2146-457b-bb36-d74b5e43c942.png" },
    { title: "The impact of climate change on our planet", time: "5 min", image: "https://cdn.usegalileo.ai/sdxl10/1298656e-0db4-4c21-bbfe-e6017ab4323d.png" },
    { title: "The importance of regular exercise", time: "4 min", image: "https://cdn.usegalileo.ai/sdxl10/0fa417ec-775d-44db-8d73-1ddd93405aa4.png" },
    { title: "The rise of remote work", time: "2 min", image: "https://cdn.usegalileo.ai/sdxl10/658998d3-3e9c-4f61-84c4-2400b649c26f.png" },
    { title: "The future of artificial intelligence", time: "3 min", image: "https://cdn.usegalileo.ai/sdxl10/1b9a2517-fd4b-4efa-92da-2911a634286a.png" },
  ];

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#0e141b] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
            Saved Summaries
          </p>
        </div>
        {summaries.map((summary, index) => (
          <SummaryCard key={index} {...summary} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: "Inter, Noto Sans, sans-serif" }}>
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <SavedSummaries />
      </div>
    </div>
  );
};

export default App;
