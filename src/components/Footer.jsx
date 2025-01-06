// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 px-5 py-10 text-center mt-auto">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <a className="text-[#49779c] text-base font-normal" href="#">About</a>
        <a className="text-[#49779c] text-base font-normal" href="#">For Teams</a>
        <a className="text-[#49779c] text-base font-normal" href="#">Pricing</a>
        <a className="text-[#49779c] text-base font-normal" href="#">API</a>
        <a className="text-[#49779c] text-base font-normal" href="#">Help</a>
      </div>
    </footer>
  );
};

export default Footer;
