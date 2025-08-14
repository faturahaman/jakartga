// src/components/DataInfoTabSection.jsx
import React, { useState } from 'react';

const DataInfoTabSection = () => {
  const [activeTab, setActiveTab] = useState('app-mobile');

  const tabs = [
    { id: 'app-mobile', label: 'Aplikasi Mobile' },
    { id: 'info-pangan', label: 'Info Pangan' },
    { id: 'laporan-kinerja', label: 'Laporan Kinerja' },
    { id: 'bogor-global', label: 'Bogor Kota Global' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'app-mobile':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Aplikasi Mobile</h3>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Unduh dan manfaatkan aplikasi resmi Pemkot Bogor untuk layanan dan informasi dalam genggaman.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Bogor Smart', description: 'Aplikasi super-app Kota Bogor untuk layanan publik dan informasi warga.' },
                { title: 'Peta Bogor', description: 'Peta digital Kota Bogor lengkap dengan fasilitas publik dan wisata.' },
                { title: 'Pelayanan Publik', description: 'Permudah urusan administrasi warga dengan kanal layanan digital.' },
                { title: 'Info Transportasi', description: 'Pantau transportasi dan rute angkutan umum di Kota Bogor.' },
                { title: 'Sehat Bogor', description: 'Cari informasi layanan dan fasilitas kesehatan dengan mudah.' },
                { title: 'PPID Bogor', description: 'Informasi dan dokumentasi terkait Pemerintah Kota Bogor.' },
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
                    className="text-green-600 text-xs lg:text-sm font-medium hover:text-green-800 transition-colors"
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
              Pantau harga bahan pokok dan ketersediaan pangan terkini di berbagai pasar di Kota Bogor.
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
              Transparansi kinerja pemerintah Kota Bogor dalam mencapai target pembangunan.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 text-center">Konten Laporan Kinerja akan ditampilkan di sini</p>
            </div>
          </div>
        );
      case 'bogor-global':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Bogor Kota Global</h3>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Inisiatif dan proyek strategis untuk menjadikan Bogor sebagai kota modern dan berdaya saing global.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 text-center">Konten Bogor Kota Global akan ditampilkan di sini</p>
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
          Akses ragam data dan informasi resmi Kota Bogor yang transparan dan terkini.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="bg-white w-full lg:w-64 rounded-lg shadow-md p-4 space-y-2 order-2 lg:order-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`w-full text-left px-4 py-2 lg:py-3 rounded text-sm lg:text-base transition-colors ${
                  activeTab === tab.id
                    ? 'bg-green-100 text-green-900 font-semibold'
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
