import React from 'react';
import { useLocation } from 'react-router-dom';

const SummaryPage = () => {
  // Get the summary data passed through the Link or React Router state
  const location = useLocation();
  const { title, time, image } = location.state || {}; // Default to an empty object if no state is passed
  
  return (
    <div className="relative flex flex-col bg-slate-50 min-h-screen">
      <header className="flex items-center justify-between border-b border-solid border-b-[#e7eef4] px-10 py-3">
        <div className="flex items-center gap-4 text-[#0d151c]">
          <div className="w-10 h-10">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em]">Summarize</h2>
        </div>
      </header>
      <main className="px-40 py-5 flex justify-center">
        <div className="flex flex-col max-w-[960px] flex-1">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-[#0e141b] text-3xl font-semibold">{title}</h1>
            <p className="text-[#4e7397] text-sm">{time} read</p>
            {/* Adjust image size by specifying width and height */}
            <div
              className="bg-center bg-no-repeat bg-cover rounded-lg my-4"
              style={{ 
                backgroundImage: `url(${image})`, 
                width: '200px',  // Set custom width for the image
                height: '200px', // Set custom height for the image
                backgroundSize: 'cover', // Ensure the image covers the area
                backgroundPosition: 'center' // Center the image inside the container
              }}
            ></div>
            <div className="text-[#0e141b] text-base leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor orci vitae nulla bibendum, 
                nec consectetur lorem aliquam. Nulla euismod velit vitae nisi luctus, ac malesuada lorem auctor. 
                Sed pretium hendrerit risus, vel iaculis enim mollis id. Donec congue velit justo, at suscipit tortor 
                scelerisque at. Nulla ac libero at leo tincidunt consectetur. Donec iaculis sapien eu purus viverra, 
                sed varius magna posuere.
              </p>
              <p>
                Morbi a ante metus. Nulla facilisi. Curabitur sed nulla est. Integer in ultricies elit. Duis id nulla 
                vitae lorem sollicitudin posuere. Aliquam erat volutpat. Phasellus auctor, eros eu pellentesque tincidunt, 
                quam orci venenatis sapien, sit amet luctus metus ipsum in nulla. Suspendisse ac urna risus.
              </p>
              <p>
                Integer tristique, sapien non auctor aliquet, nisl nulla ullamcorper risus, nec feugiat elit leo ac lorem. 
                Vivamus placerat dui eget libero scelerisque feugiat. Fusce hendrerit condimentum mi a varius. Integer nec 
                risus ligula. Sed auctor, eros et iaculis ullamcorper, lorem metus cursus lorem, eget rutrum purus lectus et 
                felis. Donec faucibus volutpat felis, sit amet pharetra libero sollicitudin ac. Sed sit amet nunc nisl.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SummaryPage;
