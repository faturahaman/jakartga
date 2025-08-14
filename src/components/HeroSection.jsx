import bogorBackground from '../../public/logo/public/ammar-andiko-R1DpwwnIoIU-unsplash.jpg';

const HeroSection = () => (
  <section 
    className="hero-bg px-4 py-12 lg:py-20 bg-cover bg-center" 
    style={{ backgroundImage: `url(${bogorBackground})` }}
  >
    <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
        Kota Bogor <br /> kota yang kaya akan sejarah dan budaya
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 lg:mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
        Kehidupan perkotaan yang semarak dengan berbagai keragaman, dari warisan budaya, inovasi tanpa henti, hingga destinasi kelas dunia yang memikat. Selamat datang!
      </p>
    </div>
  </section>
);

export default HeroSection;