export const profile = {
  name: "Sri Diana Sari",
  degree: "S.Tr. JMP",
  tagline: "Quality Assurance · Quality Control · Food Safety · Product Development",
  location: "Bogor, Jawa Barat",
  phone: "085894449505",
  phoneIntl: "6285894449505",
  email: "disabermudez@gmail.com",
  linkedin: "https://www.linkedin.com/in/sri-diana-sari-4639662a6",
  linkedinLabel: "linkedin.com/in/sri-diana-sari",
  summary:
    "Fresh graduate Sarjana Terapan Jaminan Mutu Pangan (S.Tr. JMP) dengan minat berkarier di bidang Quality Assurance, Quality Control, Food Safety, dan Product Development. Memiliki pengetahuan mengenai Good Manufacturing Practices (GMP), Cara Produksi Pangan Olahan yang Baik (CPPOB), Hazard Analysis Critical Control Point (HACCP), pengujian fisikokimia, serta analisis sensori produk pangan. Berpengalaman dalam pelaksanaan proyek penelitian formulasi produk pangan dan penyusunan dokumentasi hasil pengujian. Memiliki kemampuan analitis, teliti, bertanggung jawab, serta mampu bekerja secara individu maupun dalam tim.",
  interests: ["Quality Assurance", "Quality Control", "Food Safety", "Product Development"],
  knowledges: ["GMP", "CPPOB", "HACCP", "Pengujian Fisikokimia", "Analisis Sensori", "Sistem Jaminan Halal"],
};

export const education = {
  school: "Sekolah Vokasi IPB University",
  period: "2022 – 2026",
  program: "Supervisor Jaminan Mutu Pangan (D4 / Sarjana Terapan)",
  courses: [
    "Teknologi Pengolahan Pangan",
    "Jaminan Mutu Pangan",
    "Keamanan Pangan & HACCP",
    "Mikrobiologi Pangan",
    "Kimia & Analisis Pangan",
    "Pengembangan Produk Pangan",
    "Evaluasi Sensori",
    "Statistika & Rancangan Percobaan",
  ],
  projects: [
    {
      year: "2023",
      items: [
        'Merancang desain kemasan menggunakan Adobe Illustrator untuk produk kuaci "Kawaichi" varian matcha, pisang, dan cokelat.',
        "Mempelajari dan menganalisis strategi komunikasi pada Dinas Ketahanan Pangan dan Pertanian Kota Bogor.",
        "Mempelajari dan menganalisis pola serta jaringan komunikasi di Glo Café, Kota Bogor.",
        'Membuat gim "Farmer Toon" menggunakan aplikasi Thunkable dan Scratch.',
        'Mengembangkan produk inovatif susu bunga telang "Butterfly Latte" serta menjalankan kegiatan wirausaha.',
      ],
    },
    {
      year: "2024",
      items: [
        'Membuat produk fermentasi inovatif "Nachos Tempe" serta menjalankan kegiatan wirausaha.',
        'Menganalisis permasalahan pemenuhan regulasi pangan pada UMKM industri rumah tangga pangan "Soes Legend Mak Mpoeq".',
        "Memberikan penyuluhan penggunaan Bahan Tambahan Pangan (BTP) pewarna pada jajanan anak di Panti Asuhan Mizan Amanah.",
        "Menyusun SOP dan formulir pengujian produk ikan kemasan kaleng untuk pengelolaan laboratorium.",
        'Membantu penerbitan sertifikasi halal melalui program SEHATI serta menyusun manual SJPH untuk "Rujak Buah Ulek Klenger".',
        'Mengembangkan produk dan menyusun HACCP plan untuk produk egg roll "Roll N Joy".',
      ],
    },
  ],
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  note?: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Asisten Dosen — Supervisor Jaminan Mutu Pangan",
    org: "Sekolah Vokasi IPB University",
    period: "Agu 2026 – Sekarang",
    note: "Analisis Sensori · Bisnis JMP · Pengendalian Proses Produksi · Sistem Jaminan Pangan Halal · Audit & Inspeksi Pangan",
    points: [
      "Mendukung pelaksanaan pembelajaran terkait analisis sensori, pengendalian proses produksi, sistem jaminan pangan halal, serta audit dan inspeksi pangan.",
      "Membantu dosen menyiapkan kegiatan pembelajaran untuk mendukung pemahaman mahasiswa terhadap konsep jaminan mutu dan keamanan pangan.",
      "Mendampingi mahasiswa memahami prinsip pengendalian proses produksi pangan serta penerapan sistem mutu di industri pangan.",
      "Membantu evaluasi pembelajaran, termasuk pemeriksaan tugas dan rekapitulasi hasil belajar mahasiswa.",
      "Berkoordinasi dengan dosen pengampu untuk kelancaran kegiatan akademik.",
    ],
  },
  {
    role: "Quality Assurance & R&D Intern",
    org: "PT Inasentra Unisatya & PT Delta Daya Karya",
    period: "Agu 2025 – Jan 2026",
    note: "Anak usaha Indadi Group (PT Kapal Api Global) — industri pengolahan permen dan produk pangan",
    points: [
      "Mengembangkan dan mengevaluasi mutu Coffee Jelly (Americano, Coconut Latte, Mint Latte) dari skala laboratorium hingga trial skala industri: formulasi, pengujian pH, °Brix, suhu, dan uji organoleptik.",
      "Mengevaluasi penerapan HACCP pada produksi Coffee Jelly mengacu pada 7 prinsip HACCP, termasuk penetapan CCP pada sterilisasi retort dan metal detector.",
      "Menemukan formulasi optimal Coffee Jelly melalui penambahan buffer potasium sitrat 0,10% untuk mempertahankan stabilitas tekstur gel pasca retort.",
      "Berpartisipasi dalam pengembangan produk freeze-dried (yoghurt dan buah) serta produksi skala industri MPASI Freeze-Dried untuk Prodi Ilmu Gizi UNDIP.",
      "Mendukung kesiapan audit BPOM melalui evaluasi sarana produksi, penerapan CPPOB dan SJH, serta pengarsipan dokumen mutu (CPPOB, HACCP, PMR, halal).",
      "Mengolah dan menganalisis data mutu berat kemasan menggunakan Microsoft Excel dan SPSS untuk mengevaluasi konsistensi proses produksi.",
    ],
  },
  {
    role: "Quality Control Intern (Incoming · Process · Packing)",
    org: "PT Dmamam Sehatin Indonesia",
    period: "Jan – Jul 2025",
    note: "Produsen frozen food sehat pertama di Indonesia, khusus olahan daging untuk balita dan anak-anak",
    points: [
      "Memeriksa bahan baku dan BTP sesuai formulasi harian, pencatatan kartu stok, serta penstempelan barcode, kode produksi, dan tanggal kedaluwarsa (QC Incoming).",
      "Memantau proses produksi (QC In Process): pengecekan suhu freezer dan pemasakan, pengamatan penggilingan dan pencampuran, serta penyiapan retain sample.",
      "Memeriksa kemasan akhir (QC Packing): deteksi kebocoran, vacuum loss, dan ketidaksesuaian label sebelum distribusi.",
      "Mengendalikan penggunaan BTP melalui pemeriksaan COA, penerapan FIFO/FEFO, dan kesesuaian batas aman BPOM.",
      "Membantu tim R&D dalam pengujian formulasi produk maklon Egg Chicken Roll (ECR), termasuk perbandingan varian bawang putih bubuk dan TVP.",
    ],
  },
  {
    role: "Live Streamer Toko Online",
    org: "Srindi Official Store",
    period: "Jul – Des 2024",
    note: "Platform Shopee — produk sandal wanita",
    points: [
      "Mempresentasikan produk secara menarik serta menjelaskan fitur dan kualitas produk melalui siaran langsung di Shopee.",
      "Berinteraksi dengan pelanggan secara real-time untuk meningkatkan minat beli dan mencapai target penjualan.",
      "Menerapkan komunikasi persuasif dan pemahaman produk yang baik untuk menarik audiens.",
    ],
  },
  {
    role: "Asisten Dosen Pendidikan Agama Islam (PAI)",
    org: "Sekolah Vokasi IPB University — Prodi Ekowisata",
    period: "Jul – Des 2024",
    points: [
      "Memfasilitasi pemahaman mahasiswa mengenai materi akidah, ibadah, akhlak, serta Al-Qur'an dan hadis.",
      "Mengelola kegiatan kelas dan memandu diskusi untuk memastikan penerapan nilai-nilai Islam dalam kehidupan sehari-hari.",
      "Memberikan dan mengembangkan tugas untuk mahasiswa serta merekapitulasi kehadiran dan nilai.",
      "Berkoordinasi dengan tim empat asisten dosen dalam penilaian dan penyampaian materi.",
    ],
  },
];

export const researches = [
  {
    title: "Undergraduate Thesis — Snack Pisang–Kopi Kering Beku",
    org: "Sekolah Vokasi IPB University",
    period: "2026",
    points: [
      "Melakukan trial produk snack pisang–kopi freeze-dried dengan beberapa variasi rasio bahan skala laboratorium.",
      "Pengujian fisikokimia (kadar air, tekstur, warna) serta uji sensori terhadap variasi rasio pisang dan kopi.",
      "Mengolah data dengan SPSS dan Microsoft Excel, menganalisis pengaruh rasio bahan terhadap karakteristik produk.",
      "Menyusun laporan penelitian sesuai kaidah penulisan ilmiah.",
    ],
  },
  {
    title: "R&D — Coffee Jelly",
    org: "PT Delta Daya Karya",
    period: "2025",
    points: [
      "Evaluasi dan trial perbaikan formulasi Coffee Jelly skala laboratorium untuk stabilitas tekstur setelah retort.",
      "Trial gellan gum, xanthan gum, dan potassium citrate terhadap struktur gel dan sineresis pasca sterilisasi.",
      "Menentukan potassium citrate 0,10% sebagai formulasi optimal untuk mempertahankan tekstur dan mengurangi sineresis.",
    ],
  },
  {
    title: "R&D — Freeze-Dried Yoghurt",
    org: "PT Delta Daya Karya",
    period: "2025",
    points: [
      "Trial produksi snack yoghurt freeze-dried dengan berbagai variasi rasio bahan skala laboratorium.",
      "Pengujian fisikokimia (kadar air, tekstur, warna) serta evaluasi sensori variasi rasio pisang dan kopi.",
      "Mengolah data hasil pengujian dengan SPSS dan Microsoft Excel serta menganalisis pengaruh variasi rasio bahan.",
    ],
  },
];

export const organizations = [
  {
    org: "BEM Sekolah Vokasi IPB University",
    role: "Anggota — Tim Kajian Dept. Kajian & Aksi Strategis (Kastrat)",
    period: "2022 – 2023",
    points: [
      "Aktif dalam kajian dan diskusi isu kemahasiswaan serta kebijakan kampus.",
      "Menulis dan menyusun kajian isu nasional maupun kampus sebagai fungsi advokasi.",
    ],
  },
  {
    org: "Demisioner BEM Sekolah Vokasi IPB",
    role: "Wakil Ketua Divisi Logistik",
    period: "2022",
    points: [
      "Membantu perencanaan dan pelaksanaan kegiatan bersama Ketua Pelaksana.",
      "Melaksanakan usaha dana (danusan) serta mengelola hasilnya.",
      "Mengarahkan dan memotivasi anggota divisi; menyusun listing dan memastikan kesiapan barang logistik.",
    ],
  },
  {
    org: "Gaul Seru Politik (GASPOL) 2023",
    role: "Ketua Divisi Acara",
    period: "2023",
    points: [
      "Memimpin tim acara dalam perencanaan dan pelaksanaan rangkaian kegiatan.",
      'Menyelenggarakan seminar "Politik yang Berdampak pada Pertanian".',
      "Mengoordinasikan perlombaan debat, orasi, dan media propaganda dari konsep hingga teknis lapangan.",
    ],
  },
  {
    org: "Bersuara Bareng Papi (BERAPI) 2023",
    role: "Sekretaris",
    period: "2023",
    points: [
      "Menyusun undangan, surat peminjaman ruangan, notulensi, dan dokumentasi dialog terbuka mahasiswa–dekanat.",
      "Mengelola administrasi kegiatan sebagai wadah aspirasi mahasiswa terkait kebijakan kampus.",
    ],
  },
  {
    org: "Mahasiswa Antikorupsi (MASAKSI) 2023",
    role: "Bendahara",
    period: "2023",
    points: [
      'Mengelola arus keuangan seminar online "Pentingnya Gerakan Anti Gratifikasi" bersama ICW.',
      "Menyusun laporan pertanggungjawaban keuangan secara transparan dan tepat waktu.",
    ],
  },
];

export const publications = [
  {
    type: "Jurnal",
    year: "2025",
    title: "Pendekatan logika fuzzy dalam produksi minyak sawit menggunakan metode mamdani",
    source: "Journal of Applied Science, Technology and Humanities",
    link: "https://doi.org/10.62535/yzempr96",
    linkLabel: "doi: 10.62535/yzempr96",
    authors: "Nugroho BA, Rahma AF, Zahra DNA, Dhieva HA, Rohmawati IN, Fatimah NS, Sari SD, dkk.",
  },
  {
    type: "Buku",
    year: "2025",
    title: "Perempuan Berdaya Membangun Generasi Digdaya",
    source: "Bogor: IPB Press",
    link: null,
    linkLabel: null,
    authors: "Noorchaliza F, Shakila PR, Hanifa AR, Riputri AS, Atikah A, Trisyulianti AE, Syifa E, Sari SD, dkk.",
  },
];

export const skillGroups = [
  {
    title: "Soft Skills",
    items: [
      "Kerja tim & kolaborasi",
      "Disiplin, teliti, terorganisir",
      "Kepemimpinan & inisiatif tinggi",
      "Cepat mempelajari hal baru",
      "Komunikasi persuasif",
      "Advokasi & penulisan kajian",
      "Manajemen waktu & multitasking",
    ],
  },
  {
    title: "Manajemen & Organisasi",
    items: [
      "Manajemen acara & event organizing",
      "Manajemen keuangan & pelaporan kegiatan",
      "Koordinasi tim & logistik",
      "Kesekretariatan & administrasi kegiatan",
    ],
  },
];

export const certifications = [
  {
    title: "Sertifikasi BNSP — HACCP",
    detail: "Hazard Analysis Critical Control Point · 2026",
  },
];

export const tools = ["Microsoft Excel", "SPSS", "Adobe Illustrator", "Thunkable", "Scratch"];
