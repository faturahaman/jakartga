// src/components/TabNavigation.jsx
import React, { useState, useEffect } from 'react';
import { navigationData } from '../data/navigationData';

const TabNavigation = ({ isMobileMenuOpen }) => {
  const [activeLevel1, setActiveLevel1] = useState(null);
  const [activeLevel2, setActiveLevel2] = useState(null);
  const [activeLevel3, setActiveLevel3] = useState(null);

  const handleLevel1Click = (id) => {
    if (activeLevel1 === id) {
      setActiveLevel1(null);
      setActiveLevel2(null);
      setActiveLevel3(null);
    } else {
      setActiveLevel1(id);
      setActiveLevel2(null);
      setActiveLevel3(null);
    }
  };

  const handleLevel2Click = (id) => {
    if (activeLevel2 === id) {
      setActiveLevel2(null);
      setActiveLevel3(null);
    } else {
      setActiveLevel2(id);
      setActiveLevel3(null);
    }
  };

  const handleLevel3Click = (id) => {
    setActiveLevel3(activeLevel3 === id ? null : id);
  };

  const renderInfoColumn = () => {
    if (!activeLevel1) {
      const defaultInfo = {
        title: "Selamat Datang",
        text: "Selamat datang di Portal Resmi Pemerintah Provinsi DKI Jakarta. Silakan pilih kategori layanan untuk mengakses informasi dan layanan yang tersedia.",
        contact: { phone: "112", email: "dki@jakarta.go.id" },
        popularServices: ["Jak Lingko", "PPDB Jakarta", "JakOne Mobile"],
      };

      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white/90">{defaultInfo.title}</h3>
          <p className="text-white/80 text-sm leading-relaxed">{defaultInfo.text}</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <i className="fas fa-phone-alt text-2xl text-white mb-2"></i>
              <p className="text-white text-sm font-medium">Call Center</p>
              <p className="text-white/70 text-xs">{defaultInfo.contact.phone}</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <i className="fas fa-envelope text-2xl text-white mb-2"></i>
              <p className="text-white text-sm font-medium">Email</p>
              <p className="text-white/70 text-xs">{defaultInfo.contact.email}</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium text-white mb-2">Layanan Populer:</h4>
            <div className="space-y-2">
              {defaultInfo.popularServices.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-between text-sm text-white/70 hover:text-white"
                >
                  <span>{service}</span>
                  <i className="fas fa-chevron-right"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (!activeLevel2) {
      const level1Info = {
        title: navigationData[activeLevel1].label,
        subtitle: "Silakan pilih kategori layanan untuk melihat detail",
        info: "Pilih menu di sebelah kiri untuk melihat layanan yang tersedia",
        availability: "Layanan tersedia 24 jam",
      };

      return (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <i className="fas fa-compass text-white text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white/90">{level1Info.title}</h3>
              <p className="text-white/70 text-sm mt-1">{level1Info.subtitle}</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <i className="fas fa-info-circle"></i>
                <span className="text-sm">{level1Info.info}</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <i className="fas fa-clock"></i>
                <span className="text-sm">{level1Info.availability}</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (!activeLevel3) {
      const level2Info = {
        title: navigationData[activeLevel1].children[activeLevel2].label,
        parent: navigationData[activeLevel1].label,
        instruction: "Pilih layanan spesifik di sebelah kiri untuk melihat informasi detail.",
      };

      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white/90">{level2Info.title}</h3>
            <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">{level2Info.parent}</span>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="space-y-3">
              <p className="text-sm text-white/70">{level2Info.instruction}</p>
              <div className="flex items-center space-x-2 text-white/70">
                <i className="fas fa-clock text-sm"></i>
                <span className="text-sm">Update terakhir: Hari ini</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      const selectedItem = navigationData[activeLevel1].children[activeLevel2].children[activeLevel3];

      // Tentukan label tombol berdasarkan tipe
      const getActionLabel = () => {
        switch (selectedItem.type) {
          case 'gmaps':
            return 'Buka di Google Maps 📍';
          case 'form':
            return 'Isi Formulir 📝';
          case 'link':
            return 'Kunjungi Halaman 🔗';
          default:
            return 'Lihat Informasi';
        }
      };

      const shouldOpenNewTab = selectedItem.type === 'gmaps';

      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white/90">{selectedItem.label}</h3>

          <p className="text-white/80 text-sm leading-relaxed">
            {selectedItem.label} merupakan bagian dari{' '}
            <strong>{navigationData[activeLevel1].children[activeLevel2].label}</strong>.
            {selectedItem.description
              ? ` ${selectedItem.description}`
              : ' Layanan ini tersedia pada jam operasional 08.00 - 16.00 WIB.'}
          </p>

          {selectedItem.url && (
            <a
              href={selectedItem.url}
              target={shouldOpenNewTab ? '_blank' : '_self'}
              rel="noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full text-sm transition-colors shadow-md hover:shadow-lg"
            >
              {getActionLabel()}
            </a>
          )}

          <p className="text-white/70 text-xs mt-4">
            {selectedItem.type === 'gmaps' && '📍 Lokasi dapat dilihat di Google Maps'}
            {selectedItem.type === 'form' && '📝 Formulir resmi Pemprov DKI Jakarta'}
            {selectedItem.type === 'link' && '🔗 Sumber resmi pemerintah'}
            {!selectedItem.url && 'ℹ️ Konten akan segera tersedia'}
          </p>
        </div>
      );
    }
  };

  // Tutup menu level 1 otomatis di layar besar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setActiveLevel1(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`nav-container ${!isMobileMenuOpen && 'hidden'} lg:block`}>
      <div className="max-w-7xl mx-auto">
        {/* Top Level Navigation */}
        <div className="top-level-nav">
          {Object.keys(navigationData).map((key) => (
            <button
              key={key}
              className={`top-level-button ${activeLevel1 === key ? 'active' : ''}`}
              onClick={() => handleLevel1Click(key)}
            >
              {navigationData[key].label}
              <span
                className={`ml-2 transform transition-transform ${activeLevel1 === key ? 'rotate-180' : ''}`}
              >
                ▼
              </span>
            </button>
          ))}
        </div>

        {/* Navigation Columns */}
        {activeLevel1 && (
          <div className="nav-columns">
            {/* Level 2 Column */}
            <div className="nav-column">
              <h3 className="text-lg font-semibold mb-4 text-white/90">
                {navigationData[activeLevel1].label}
              </h3>
              <div className="space-y-1">
                {Object.entries(navigationData[activeLevel1].children).map(([id, data]) => (
                  <button
                    key={id}
                    className={`nav-button ${activeLevel2 === id ? 'active' : ''}`}
                    onClick={() => handleLevel2Click(id)}
                  >
                    {data.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Level 3 Column */}
            <div className="nav-column">
              {activeLevel2 && (
                <>
                  <h3 className="text-lg font-semibold mb-4 text-white/90">
                    {navigationData[activeLevel1].children[activeLevel2].label}
                  </h3>
                  <div className="space-y-1">
                    {Object.entries(navigationData[activeLevel1].children[activeLevel2].children).map(([id, data]) => (
                      <button
                        key={id}
                        className={`nav-button ${activeLevel3 === id ? 'active' : ''}`}
                        onClick={() => handleLevel3Click(id)} // ✅ Hanya aktifkan, tidak redirect
                      >
                        {data.label}
                        {data.type === 'gmaps' && <span className="text-xs ml-1">📍</span>}
                        {data.type === 'form' && <span className="text-xs ml-1">📝</span>}
                        {data.type === 'link' && <span className="text-xs ml-1">🔗</span>}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Info Column */}
            <div className="nav-column">
              {renderInfoColumn()}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TabNavigation;