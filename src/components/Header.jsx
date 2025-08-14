// src/components/Header.jsx
import React from 'react';

const Header = ({ onMenuToggle, isMobileMenuOpen }) => (
  <header className="bg-white shadow-sm border-b sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
              <img src="public\logo\logo-1.png" alt="" className="w-12" />
          <div>
            <h1 className="text-2xl font-bold text-blue-900">Bogor</h1>
            <p className="text-sm text-gray-600">Portal Resmi Kota Bogor </p>
          </div>
        </div>
        <button
          onClick={onMenuToggle}
          className={`lg:hidden p-2 rounded-md border border-gray-300 hover:bg-gray-50 ${isMobileMenuOpen ? 'active' : ''}`}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
            <div className={`w-4 h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-4 h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-4 h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>
        </button>
      </div>
    </div>
  </header>
);

export default Header;