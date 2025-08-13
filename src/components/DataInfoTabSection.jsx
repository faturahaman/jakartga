// src/components/DataInfoTabSection.jsx
import React, { useState } from 'react';

const DataInfoTabSection = () => {
  const [activeTab, setActiveTab] = useState('app-mobile');

  const tabs = [
    { id: 'app-mobile', label: 'Aplikasi Mobile' },
    { id: 'info-pangan', label: 'Info Pangan' },
    { id: 'laporan-kinerja', label: 'Laporan Kinerja' },
    { id: 'jakarta-global', label: 'Jakarta Kota Global' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'app-mobile':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Aplikasi Mobile</h3>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Unduh dan manfaatkan aplikasi resmi Pemprov DKI Jakarta untuk layanan dan informasi dalam genggaman.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'JDIH', description: 'Jaringan Dokumentasi dan Informasi Hukum Provinsi DKI Jakarta' },
                { title: 'JAKI', description: 'Super-app serba bisa untuk membantu keseharian Anda selama berada di Jakarta.' },
                { title: 'Alpukat Betawi', description: 'Permudah urusan administrasi, tersedia kanal pelayanan bagi warga DKI Jakarta.' },
                { title: 'Jak Lingko', description: 'Berkelana dengan transportasi publik di Jakarta kini semakin mudah.' },
                { title: 'Jak Sehat', description: 'Kemudahan mencari informasi layanan dan fasilitas kesehatan dalam genggaman.' },
                { title: 'PPID Jakarta', description: 'Ketahui lebih banyak tentang informasi dan dokumentasi Jakarta.' },
              ].map((app, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 h-40 lg:h-44 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <h4 className="font-bold mb-2 text-sm lg:text-base">{app.title}</h4>
                    <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">{app.description}</p>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 text-xs lg:text-sm font-medium hover:text-blue-800 transition-colors"
                  >
                    Selengkapnya..
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      case 'info-pangan':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Info Pangan</h3>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Pantau harga bahan pokok dan ketersediaan pangan terkini di berbagai pasar di Jakarta.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 text-center">Konten Info Pangan akan ditampilkan di sini</p>
            </div>
          </div>
        );
      case 'laporan-kinerja':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Laporan Kinerja</h3>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Transparansi kinerja pemerintah dalam mencapai target pembangunan.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 text-center">Konten Laporan Kinerja akan ditampilkan di sini</p>
            </div>
          </div>
        );
      case 'jakarta-global':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Jakarta Kota Global</h3>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Inisiatif dan proyek strategis untuk menjadikan Jakarta sebagai pusat ekonomi dan budaya global.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 text-center">Konten Jakarta Kota Global akan ditampilkan di sini</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#f1f6fd] px-4 lg:px-6 py-8 lg:py-12 mt-8 lg:mt-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl lg:text-2xl font-bold mb-2">Data dan Informasi</h2>
        <p className="text-gray-600 mb-6 lg:mb-8 text-sm lg:text-base">
          Akses ragam data dan informasi resmi Jakarta yang transpran dan terkini.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="bg-white w-full lg:w-64 rounded-lg shadow-md p-4 space-y-2 order-2 lg:order-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`w-full text-left px-4 py-2 lg:py-3 rounded text-sm lg:text-base transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-900 font-semibold'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white flex-1 rounded-lg shadow-md p-4 lg:p-6 relative order-1 lg:order-2">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataInfoTabSection;