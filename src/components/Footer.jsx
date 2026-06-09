const Footer = () => {
  return (
    <footer className="bg-brand-green relative overflow-hidden pt-20 pb-8 px-4 w-full">
      <div className="absolute right-0 top-32 w-32 h-64 bg-brand-purple rounded-l-full hidden md:block"></div>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-24 z-10 relative">
          <h2 className="text-5xl md:text-6xl font-medium text-gray-900 mb-4">
            Subscribe to <br /> our newsletter
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            To make your stay special and even more memorable
          </p>
          <button className="bg-brand-dark text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors">
            Subscribe Now
          </button>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-sm z-10">
          <div className="space-y-4">
            <h4 className="font-medium text-brand-dark mb-6">Company</h4>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Studio</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Service</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Blog</a>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-brand-dark mb-6">Terms & Policies</h4>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Terms & Conditions</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Explore</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Accessibility</a>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-brand-dark mb-6">Follow Us</h4>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Instagram</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">LinkedIn</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Youtube</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Twitter</a>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-brand-dark mb-6">Terms & Policies</h4>
            <p className="text-gray-600">1498w Rutan ste, STE<br/>28 Chicago, IL 60661</p>
            <p className="text-gray-600">(123)456789000</p>
            <a href="mailto:info@elementum.com" className="block text-gray-600 hover:text-gray-900">info@elementum.com</a>
          </div>
        </div>
        <div className="w-full text-center text-xs text-gray-500 pt-8 border-t border-brand-green/50 border-gray-300">
          ©2025 Elementum. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;