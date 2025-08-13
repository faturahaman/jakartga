// src/components/NewsSection.jsx
const NewsSection = () => {
  const newsItems = [
    {
      category: 'Berita Terkini',
      title: 'UP PM-PTSP Rawajati Beri Layanan Solusi Arsitek Gratis Publik',
      meta: 'Lintas Kota | 06 08 2025 14:53',
      icon: 'fas fa-newspaper',
      color: 'from-blue-500 to-blue-700',
    },
    {
      category: 'Siaran Pers',
      title: 'Dukung Penguatan Lembaga Keagamaan, Gubernur Pramono Resmikan Gedung MUI, DMI, dan IPQAH',
      meta: 'Jakarta Selatan | Kamis, 07 Agustus 2025 11:43',
      icon: 'fas fa-bullhorn',
      color: 'from-green-500 to-green-700',
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
              <div
                className={`h-32 sm:h-40 lg:h-44 bg-gradient-to-r ${item.color} flex items-center justify-center`}
              >
                <i className={`${item.icon} text-white text-3xl lg:text-4xl`}></i>
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