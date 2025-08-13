// src/data/navigationData.js
export const navigationData = {
  "mengenal-jakarta": {
    label: "Mengenal Jakarta",
    children: {
      "profil-kota": {
        label: "Profil Jakarta",
        children: {
          sejarah: { label: "Sejarah Jakarta" },
          "visi-misi": { label: "Visi dan Misi" },
          lambang: { label: "Lambang Jakarta" },
          geografi: { label: "Geografi" },
          demografi: { label: "Demografi" },
          ekonomi: { label: "Ekonomi" },
        },
      },
      pemerintahan: {
        label: "Pemerintahan",
        children: {
          gubernur: { label: "Gubernur DKI Jakarta" },
          wagub: { label: "Wakil Gubernur" },
          sekda: { label: "Sekretariat Daerah" },
          dprd: { label: "DPRD" },
          skpd: { label: "SKPD" },
          ukpd: { label: "UKPD" },
        },
      },
      wilayah: {
        label: "Wilayah Administrasi",
        children: {
          "jakarta-pusat": { label: "Jakarta Pusat" },
          "jakarta-utara": { label: "Jakarta Utara" },
          "jakarta-barat": { label: "Jakarta Barat" },
          "jakarta-selatan": { label: "Jakarta Selatan" },
          "jakarta-timur": { label: "Jakarta Timur" },
          "kepulauan-seribu": { label: "Kepulauan Seribu" },
        },
      },
    },
  },
  "informasi-layanan": {
    label: "Informasi dan Layanan",
    children: {
      "layanan-publik": {
        label: "Layanan Publik",
        children: {
          kesehatan: { label: "Kesehatan" },
          pendidikan: { label: "Pendidikan" },
          transportasi: { label: "Transportasi" },
          administrasi: { label: "Administrasi Kependudukan" },
          perizinan: { label: "Perizinan" },
          perpajakan: { label: "Perpajakan" },
        },
      },
      "program-unggulan": {
        label: "Program Unggulan",
        children: {
          "jak-lingko": { label: "Jak Lingko" },
          "kjp-plus": { label: "KJP Plus" },
          "jak-one": { label: "JakOne Mobile" },
          jha: { label: "Jakarta Health Alert" },
          "jak-wifi": { label: "JakWifi" },
          lpj: { label: "Layanan Jakarta" },
        },
      },
      informasi: {
        label: "Informasi Terkini",
        children: {
          berita: { label: "Berita Terkini" },
          pengumuman: { label: "Pengumuman" },
          agenda: { label: "Agenda Jakarta" },
          "siaran-pers": { label: "Siaran Pers" },
        },
      },
    },
  },
  "jelajah-jakarta": {
    label: "Jelajah Jakarta",
    children: {
      wisata: {
        label: "Wisata Jakarta",
        children: {
          "tempat-wisata": { label: "Destinasi Wisata" },
          "wisata-sejarah": { label: "Wisata Sejarah" },
          museum: { label: "Museum Jakarta" },
          "taman-kota": { label: "Taman Kota" },
          rptra: { label: "RPTRA" },
        },
      },
      budaya: {
        label: "Seni & Budaya",
        children: {
          betawi: { label: "Budaya Betawi" },
          kuliner: { label: "Kuliner Khas" },
          festival: { label: "Festival Jakarta" },
          seni: { label: "Sanggar Seni" },
          galeri: { label: "Galeri Seni" },
        },
      },
      fasilitas: {
        label: "Fasilitas Kota",
        children: {
          olahraga: { label: "Fasilitas Olahraga" },
          perpustakaan: { label: "Perpustakaan" },
          transportasi: { label: "Transportasi Umum" },
          "ruang-publik": { label: "Ruang Publik" },
        },
      },
    },
  },
};