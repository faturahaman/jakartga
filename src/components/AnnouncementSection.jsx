// src/components/AnnouncementSection.jsx
const AnnouncementSection = () => (
  <section className="max-w-6xl mx-auto relative z-20 -mt-12 lg:-mt-20 px-4">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
      <div className="lg:col-span-1 p-6 lg:p-8 bg-blue-900 text-white rounded-xl shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
        <div className="relative">
          <h3 className="text-xl lg:text-2xl font-bold mb-3">Pengumuman</h3>
          <p className="text-sm lg:text-base font-light mb-6 leading-relaxed">
            Pendaftaran Seleksi Calon Anggota Komisi Informasi Provinsi DKI Jakarta 2025–2029
          </p>
        </div>
        <div>
          <a href="#" className="inline-block bg-white text-blue-900 font-bold py-2 px-4 lg:px-6 rounded-full hover:bg-gray-100 transition-colors text-sm lg:text-base">
            EXPLORE NOW
          </a>
          <hr className="border-t border-white/30 my-4 lg:my-6" />
          <p className="text-xs lg:text-sm">
            Untuk Mengunduh Persyaratan <a href="#" className="font-bold underline hover:text-yellow-200 transition-colors">KLIK DISINI</a>
          </p>
        </div>
      </div>
      <div className="lg:col-span-2 bg-white p-6 lg:p-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl custom-scroll overflow-y-auto max-h-[400px] lg:max-h-[300px]">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mb-3 leading-tight">
          Seleksi Calon Anggota Komisi Informasi Provinsi DKI Jakarta 2025–2029
        </h2>
        <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-6">
          Pendaftaran dapat dilakukan dengan mengirimkan berkas melalui email ke <a href="mailto:seleksikip@jakarta.go.id" className="text-blue-600 underline hover:text-blue-800 transition-colors break-all">seleksikip@jakarta.go.id</a> atau langsung ke alamat: Gedung Graha Mental Spiritual, Lantai 7, Jl. Awaludin II, Jakarta Pusat. pada tanggal 28 Juli – 8 Agustus 2025.
        </p>
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  </section>
);

export default AnnouncementSection;