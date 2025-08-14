// src/components/Footer.jsx
const Footer = () => (
  <footer className="bg-blue-900 text-white py-8 lg:py-10 mt-8">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      <div>
        <h4 className="font-bold text-lg mb-4">Tentang Bogor</h4>
        <p className="text-sm leading-relaxed opacity-90">
          Portal informasi resmi Kota Bogor untuk warga dan pengunjung kota.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-4">Navigasi</h4>
        <ul className="text-sm space-y-2">
          <li>
            <a href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
              Beranda
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
              Layanan
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
              Data & Informasi
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
              Berita
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-4">Kontak</h4>
        <p className="text-sm leading-relaxed opacity-90">
          Jl. Raya Pajajaran No. 1<br />
          Bogor Tengah<br />
          Telp: (0251) 832-1234
        </p>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-4">Ikuti Kami</h4>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400 transition-colors text-lg">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors text-lg">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors text-lg">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors text-lg">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="text-center mt-8 lg:mt-10 text-xs lg:text-sm text-gray-300 px-4">
      &copy; 2025 Pemerintah Kota Bogor. All rights reserved.
    </div>
  </footer>
);

export default Footer;
