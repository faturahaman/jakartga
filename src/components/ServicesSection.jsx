// src/components/ServicesSection.jsx
const ServicesSection = () => {
  const services = [
    { name: 'Layanan Darurat', color: 'blue', iconText: 'Darurat' },
    { name: 'Layanan Pengunjung', color: 'green', iconText: 'Pengunjung' },
    { name: 'Layanan Warga', color: 'yellow', iconText: 'Warga' },
    { name: 'Perizinan', color: 'red', iconText: 'Perizinan' },
    { name: 'Pajak', color: 'purple', iconText: 'Pajak' },
    { name: 'Pendidikan', color: 'orange', iconText: 'Pendidikan' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Layanan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {services.map((service) => (
            <a
              key={service.name}
              href="#"
              className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div
                className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mb-2`}
              >
                <img
                  src={`https://via.placeholder.com/64x64?text=${service.iconText}`}
                  alt={service.name}
                  className="w-10 h-10"
                />
              </div>
              <p className="text-sm font-semibold text-gray-700">{service.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;