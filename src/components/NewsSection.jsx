// src/components/NewsSection.jsx
const NewsSection = () => {
  const newsItems = [
    {
      category: 'Berita Terkini',
      title: 'Pemkot Bogor Resmikan Taman Sempur Sebagai Ruang Terbuka Hijau Baru',
      meta: 'Kota Bogor | 12 Agustus 2025 10:15',
      icon: 'fas fa-tree',
      color: 'from-green-500 to-green-700',
      image: '/logo/public/ammar-andiko-R1DpwwnIoIU-unsplash.jpg',
    },
    {
      category: 'Siaran Pers',
      title: 'Wali Kota Bogor Launching Program Smart City Tahap 2 untuk Tingkatkan Layanan Publik',
      meta: 'Balai Kota Bogor | 10 Agustus 2025 09:30',
      icon: 'fas fa-city',
      color: 'from-blue-500 to-blue-700',
      image: '/logo/public/batik.jpg',
    },
    {
      category: 'Pengumuman',
      title: 'Penutupan Sementara Jalan Pajajaran untuk Pembangunan Flyover',
      meta: 'Dinas Perhubungan Kota Bogor | 09 Agustus 2025 16:00',
      icon: 'fas fa-road',
      color: 'from-yellow-500 to-yellow-700',
      image: '/logo/public/berita_jakarta.jpg',
    },
  ];

  return (
    <section className="px-4 lg:px-6 py-8 lg:py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-lg lg:text-xl font-semibold">Berita dan Siaran Pers</h2>
          <a
            href="#"
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full text-xs lg:text-sm hover:bg-blue-50 transition-colors whitespace-nowrap flex items-center gap-1"
          >
            Lihat Semua <i className="fas fa-angle-right"></i>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md border bg-white hover:shadow-lg transition-shadow"
            >
              {/* Gambar di bagian atas card */}
              <div className="h-32 sm:h-40 lg:h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-blue-900 text-white p-4 flex flex-col justify-between min-h-[120px] lg:min-h-[140px]">
                <div>
                  <p className="text-xs lg:text-sm font-semibold mb-1">{item.category}</p>
                  <p className="text-xs lg:text-sm leading-snug mb-2 line-clamp-3">{item.title}</p>
                  <p className="text-xs text-gray-300">{item.meta}</p>
                </div>
                <div className="text-right mt-2">
                  <a
                    href="#"
                    className="text-white text-xs italic underline hover:text-blue-200 transition-colors"
                  >
                    [ lihat semua ]
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className="hidden lg:block rounded-lg bg-gradient-to-r from-blue-800 to-blue-900 min-h-[300px] flex items-center justify-center">
            <div className="text-center text-white p-6">
              <i className="fas fa-plus-circle text-4xl mb-4 opacity-50"></i>
              <p className="text-sm opacity-75">Konten Tambahan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
