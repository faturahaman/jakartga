// src/components/MapsSection.jsx
import React from "react";

const DEFAULT_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126829.29180934656!2d106.70948908670947!3d-6.595186739258495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5b7ad0f824b%3A0x4c71fd1b0b8ae76d!2sKota%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1755160338045!5m2!1sid!2sid";

const MapsSection = ({
  title = "Peta Kota Bogor",
  subtitle = "Lihat lokasi Kota Bogor dan sekitarnya.",
  src = DEFAULT_EMBED_SRC,
}) => {
  return (
    <section className="px-4 lg:px-6 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h2 className="text-lg lg:text-xl font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>

        {/* Wrapper responsif 16:9 */}
        <div className="relative w-full rounded-lg overflow-hidden shadow-md border bg-white">
          <div style={{ paddingTop: "56.25%" }} />
          <iframe
            title="Peta Kota Bogor"
            src={src}
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            Sumber peta: Google Maps — data dapat berubah sewaktu-waktu.
          </p>
          <a
            href="https://www.google.com/maps/place/Kota+Bogor,+Jawa+Barat/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blue-600 text-blue-600 px-4 py-2 text-xs lg:text-sm hover:bg-blue-50 transition-colors"
          >
            Buka di Google Maps
            <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapsSection;
