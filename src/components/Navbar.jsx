import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-4 md:px-8 max-w-7xl mx-auto relative z-50">
      <div className="flex justify-between items-center w-full">
        <div className="text-xl font-medium tracking-wide">
          Elementum
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-600">
          <a href="#" className="text-black font-medium">Home</a>
          <a href="#" className="hover:text-black transition-colors">Studio</a>
          <a href="#" className="hover:text-black transition-colors">Services</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
          <a href="#" className="hover:text-black transition-colors">FAQs</a>
        </div>

        <button 
          className="flex flex-col space-y-1.5 md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-black block transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black block transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
        </button>

        <button className="hidden md:flex flex-col space-y-1.5 p-2">
          <span className="w-6 h-0.5 bg-black block"></span>
          <span className="w-6 h-0.5 bg-black block"></span>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-4 flex flex-col space-y-4 md:hidden rounded-b-2xl">
          <a href="#" className="text-black font-medium block">Home</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors block">Studio</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors block">Services</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors block">Contact</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors block">FAQs</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;