// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-solid border-b-[#e7eef4] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0d151c]">
        <div className="w-10 h-10">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em]">Summarize</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-[#0d151c] text-sm font-medium leading-normal" href="#">Home</a>
          <a className="text-[#0d151c] text-sm font-medium leading-normal" href="#">Explore</a>
          <a className="text-[#0d151c] text-sm font-medium leading-normal" href="#">Profile</a>
        </div>
       
        <div className="w-10 h-10 bg-center bg-no-repeat bg-cover rounded-full" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/ebfdd10d-8c69-4a1a-b628-13f91d443dc0.png")' }}></div>
      </div>
    </header>
  );
};

export default Header;
