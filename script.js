'use strict';

document.documentElement.classList.add('js-enabled');

const ABQORECYCLE = (() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const pollutionTopics = [
    {
      id: 'karhutla', number: '01', category: 'KEBAKARAN HUTAN & LAHAN', icon: '🔥', title: 'Karhutla dan kabut asap',
      summary: 'Kebakaran lahan dapat merusak habitat dan menghasilkan asap yang mengganggu kesehatan.',
      what: 'Karhutla adalah kebakaran hutan dan lahan. Api dapat menyebar ketika vegetasi kering dan kondisi cuaca mendukung pembakaran. Asap mengandung partikel halus dan bahan lain yang dapat menurunkan kualitas udara.',
      why: 'Dampak dapat menjalar melampaui lokasi api: habitat rusak, aktivitas warga terganggu, dan orang dengan kondisi rentan dapat mengalami dampak kesehatan. Laporan Reuters pada 16 Oktober 2026 membahas kesiapan Indonesia menilai tawaran bantuan dalam penanganan kebakaran. BMKG pada 17 Oktober menjelaskan asap yang sempat terpantau di Jabodetabek mulai menjauh.',
      actions: ['Jangan membakar sampah atau membuka lahan dengan api.', 'Jangan mendekati titik api; laporkan melalui kanal resmi dan ikuti arahan petugas.', 'Saat udara berasap, periksa informasi kualitas udara dan ikuti anjuran kesehatan dari otoritas.'],
      source: [{ label: 'Reuters — Penanganan karhutla dan bantuan, 16 Oktober 2026', url: 'https://www.reuters.com/business/environment/indonesias-president-ready-accept-foreign-assistance-combat-fires-foreign-2026-10-16/' }, { label: 'BMKG — Pemantauan asap di Jabodetabek, 17 Oktober 2026', url: 'https://www.bmkg.go.id/berita/utama/bmkg-asap-sempat-terpantau-sesaat-di-jabodetabek-kini-sudah-menjauh' }]
    },
    {
      id: 'sampah', number: '02', category: 'SAMPAH & TPA', icon: '♻️', title: 'Darurat kapasitas sampah',
      summary: 'TPA bukan ruang tanpa batas; sampah perlu dikurangi dan dikelola sejak dari sumbernya.',
      what: 'TPA Sarimukti di Jawa Barat menampung sampah dari wilayah Bandung Raya. Dalam laporan ANTARA pada 6 Oktober 2026, pengelola memperkirakan Zona 5 dapat mencapai kapasitas penuh pada November 2026 jika pola sampah masuk dan kondisi operasional saat itu berlanjut.',
      why: 'Perkiraan kapasitas adalah peringatan untuk mengurangi timbulan, bukan kepastian bahwa tempat itu sudah penuh. Ketika sampah tidak dikelola dengan baik, dampaknya dapat mencakup bau, lindi, gangguan sekitar, dan kebutuhan lahan tambahan.',
      actions: ['Kurangi barang sekali pakai bila ada pilihan yang layak.', 'Ambil makanan secukupnya dan manfaatkan sisa yang masih aman.', 'Pilah sampah sesuai fasilitas nyata di lingkunganmu; tidak semua kemasan diterima semua tempat daur ulang.'],
      source: [{ label: 'ANTARA — Perkiraan kapasitas Zona 5 TPA Sarimukti, 6 Oktober 2026', url: 'https://jabar.antaranews.com/amp/berita/711032/uptd-tpa-sarimukti-memperkirakan-kapasitas-zona-5-penuh-november-2026' }, { label: 'SIPSN — Sistem Informasi Pengelolaan Sampah Nasional', url: 'https://sipsn.menlhk.go.id/sipsn/' }]
    },
    {
      id: 'banjir', number: '03', category: 'BANJIR & LONGSOR', icon: '🌧️', title: 'Banjir, longsor, dan kesiapsiagaan',
      summary: 'Hujan lebat dapat memicu banjir atau longsor, sementara kondisi setempat memengaruhi risikonya.',
      what: 'BNPB dalam laporan 11 Oktober 2026 merangkum kejadian banjir dan longsor di sejumlah wilayah, termasuk Gayo Lues dan Aceh Tenggara, serta banjir yang masih berdampak di beberapa wilayah Kota Padang pada periode laporan tersebut.',
      why: 'Bencana memiliki banyak faktor: intensitas hujan, kondisi lereng dan sungai, tata ruang, tutupan lahan, drainase, serta kesiapan warga. Tidak tepat menyimpulkan satu penyebab tunggal hanya dari sebuah foto atau kejadian.',
      actions: ['Kenali jalur evakuasi dan ikuti peringatan resmi.', 'Jangan menerobos arus banjir atau mendekati lereng yang terlihat tidak stabil.', 'Jaga saluran air dan kurangi sampah yang bisa menyumbat drainase, sambil mendukung perbaikan infrastruktur oleh pihak berwenang.'],
      source: [{ label: 'BNPB — Situasi dan penanganan bencana, 11 Oktober 2026', url: 'https://ppid.bnpb.go.id/berita/perkembangan-situasi-dan-penanganan-bencana-di-tanah-air-11-oktober-2026-nLgP' }, { label: 'BMKG — Portal informasi cuaca ekstrem', url: 'https://pikacu.bmkg.go.id/' }]
    },
    {
      id: 'air', number: '04', category: 'KEKERINGAN & KETAHANAN AIR', icon: '💧', title: 'Air bersih saat musim kering',
      summary: 'Kekurangan air dan banjir bisa muncul pada waktu berbeda dalam sistem air yang sama.',
      what: 'Prakiraan BMKG yang diterbitkan 15 Oktober 2026 menyebut kondisi panas dan kering masih berlanjut di sebagian wilayah pada periode 16–22 Oktober, meskipun hujan lokal tetap berpeluang terjadi. Risiko dan prakiraan berbeda menurut daerah, sehingga informasi untuk lokasi tertentu tetap penting.',
      why: 'Ketersediaan air dipengaruhi hujan, cadangan air tanah, tutupan lahan, kualitas air, dan kebutuhan masyarakat. Menghemat air membantu, tetapi krisis air juga perlu pengelolaan sumber daya air dan infrastruktur yang baik.',
      actions: ['Gunakan air seperlunya tanpa mengabaikan kebutuhan kebersihan dan kesehatan.', 'Ikuti informasi resmi setempat jika ada pembatasan atau gangguan pasokan.', 'Lindungi daerah resapan dan jangan membuang limbah ke badan air.'],
      source: [{ label: 'BMKG — Prakiraan cuaca 16–22 Oktober, 15 Oktober 2026', url: 'https://www.bmkg.go.id/cuaca/potensi-hujan-sepekan/prakiraan-cuaca-indonesia-sepekan-periode-16-22-oktober-2026-panas-dan-kering-di-sebagian-wilayah-indonesia-hujan-lokal-masih-berpeluang-terjadi' }, { label: 'Kementerian Lingkungan Hidup — Strategi adaptasi krisis air, 1 Oktober 2026', url: 'https://kemenlh.go.id/news/detail/jangan-tunggu-kran-mati-strategi-adaptasi-mitigasi-krisis-air-bersih-di-rumah' }]
    }
  ];
  const articles = [
    {
      id: 'karhutla-update', category: 'KARHUTLA · 16 OKTOBER 2026', icon: '🔥', title: 'Karhutla: penanganan dan pemulihan perlu berjalan bersama',
      summary: 'Laporan terbaru membahas rencana Indonesia mengevaluasi tawaran bantuan dalam penanganan kebakaran hutan dan lahan.',
      detail: 'Reuters melaporkan pada 16 Oktober 2026 bahwa Indonesia bersedia menerima bantuan asing untuk menangani kebakaran, sementara lembaga terkait menilai tawaran yang dapat ditindaklanjuti. Kebakaran lahan gambut dan kondisi kering menjadi bagian dari persoalan yang dibahas. Perkembangan operasional dapat berubah, sehingga tanggal dan konteks sumber penting diperiksa.',
      take: 'Jangan membakar sampah atau lahan. Jika melihat asap atau api, jaga jarak, beri tahu orang dewasa atau petugas, dan ikuti panduan resmi. Pemadaman bukan tugas untuk dicoba sendiri.',
      sources: [{ label: 'Reuters — Indonesia siap menerima bantuan penanganan kebakaran, 16 Oktober 2026', url: 'https://www.reuters.com/business/environment/indonesias-president-ready-accept-foreign-assistance-combat-fires-foreign-2026-10-16/' }, { label: 'BMKG — Pemantauan sebaran asap di Jabodetabek, 17 Oktober 2026', url: 'https://www.bmkg.go.id/berita/utama/bmkg-asap-sempat-terpantau-sesaat-di-jabodetabek-kini-sudah-menjauh' }]
    },
    {
      id: 'sarimukti', category: 'KRISIS SAMPAH · 6 OKTOBER 2026', icon: '🗑️', title: 'TPA Sarimukti mendekati batas kapasitas',
      summary: 'Pengelola memperkirakan Zona 5 dapat penuh pada November 2026 jika pola saat itu berlanjut.',
      detail: 'ANTARA Jawa Barat pada 6 Oktober 2026 mengutip UPTD TPA Sarimukti yang memperkirakan Zona 5 akan penuh pada November 2026, lebih cepat daripada masa layanan berdasarkan desain yang disebutkan dalam laporan. Ini adalah perkiraan saat laporan terbit, bukan pernyataan bahwa lokasi itu pasti sudah penuh. Volume sampah masuk dan kondisi operasional memengaruhi proyeksi.',
      take: 'Kurangi sampah dari sumbernya, gunakan ulang barang yang masih layak, kelola sisa makanan, dan pilah bahan hanya sesuai fasilitas yang benar-benar tersedia.',
      sources: [{ label: 'ANTARA Jawa Barat — Perkiraan kapasitas TPA Sarimukti', url: 'https://jabar.antaranews.com/amp/berita/711032/uptd-tpa-sarimukti-memperkirakan-kapasitas-zona-5-penuh-november-2026' }, { label: 'SIPSN — Data pengelolaan sampah nasional', url: 'https://sipsn.menlhk.go.id/sipsn/' }]
    },
    {
      id: 'el-nino', category: 'PRAKIRAAN CUACA · 15 OKTOBER 2026', icon: '☀️', title: 'Panas dan kering, tetapi hujan lokal masih mungkin',
      summary: 'BMKG memperkirakan sebagian wilayah tetap panas dan kering pada 16–22 Oktober, sedangkan hujan lokal masih berpeluang terjadi.',
      detail: 'Prakiraan BMKG yang diterbitkan 15 Oktober 2026 menyebut El Niño masih sangat kuat dan kondisi panas serta kering berlanjut di sebagian wilayah pada periode 16–22 Oktober. BMKG juga menjelaskan bahwa hujan lokal tetap dapat terjadi. Keadaan berbeda menurut daerah, jadi prakiraan umum tidak menggantikan informasi cuaca untuk kota dan tanggal tertentu.',
      take: 'Hemat air secara wajar, tetap penuhi kebutuhan kebersihan dan kesehatan, serta periksa prakiraan BMKG untuk wilayahmu. Jangan menyimpulkan bahwa semua daerah mengalami cuaca yang sama.',
      sources: [{ label: 'BMKG — Prakiraan cuaca 16–22 Oktober 2026, 15 Oktober 2026', url: 'https://www.bmkg.go.id/cuaca/potensi-hujan-sepekan/prakiraan-cuaca-indonesia-sepekan-periode-16-22-oktober-2026-panas-dan-kering-di-sebagian-wilayah-indonesia-hujan-lokal-masih-berpeluang-terjadi' }, { label: 'Kementerian Lingkungan Hidup — Strategi krisis air di rumah', url: 'https://kemenlh.go.id/news/detail/jangan-tunggu-kran-mati-strategi-adaptasi-mitigasi-krisis-air-bersih-di-rumah' }]
    },
    {
      id: 'floods', category: 'BANJIR & LONGSOR · 11 OKTOBER 2026', icon: '🌧️', title: 'Bencana perlu dibaca lewat data setempat',
      summary: 'Laporan BNPB merangkum banjir, longsor, dan karhutla di beberapa wilayah.',
      detail: 'BNPB menerbitkan pembaruan situasi pada 11 Oktober 2026 yang melaporkan banjir dan tanah longsor di Kabupaten Gayo Lues dan Aceh Tenggara, karhutla di Kabupaten Merauke, serta dampak banjir di beberapa wilayah Kota Padang pada periode laporan. Kondisi setiap lokasi dapat berubah setelah laporan diterbitkan.',
      take: 'Kenali peringatan dan jalur evakuasi setempat. Jangan menerobos banjir atau mendekati lereng tidak stabil. Untuk kabar terkini, cek BNPB/BPBD dan informasi cuaca BMKG.',
      sources: [{ label: 'BNPB — Perkembangan situasi dan penanganan bencana, 11 Oktober 2026', url: 'https://ppid.bnpb.go.id/berita/perkembangan-situasi-dan-penanganan-bencana-di-tanah-air-11-oktober-2026-nLgP' }, { label: 'BMKG — Portal informasi cuaca ekstrem', url: 'https://pikacu.bmkg.go.id/' }]
    },
    {
      id: 'pantura', category: 'PESISIR · 9 OKTOBER 2026', icon: '🌊', title: 'Pantura: rob, penurunan tanah, dan ekosistem',
      summary: 'Kementerian Lingkungan Hidup menyoroti risiko pesisir yang saling berkaitan.',
      detail: 'Artikel Kementerian Lingkungan Hidup pada 9 Oktober 2026 membahas kerentanan sebagian kawasan Pantai Utara Jawa terhadap banjir rob, penurunan muka tanah, dan kenaikan muka laut relatif. Artikel itu juga menjelaskan bahwa tanggul saja tidak menyelesaikan semua akar masalah; pengelolaan air tanah, tata ruang berbasis risiko, dan perlindungan ekosistem pesisir perlu dipertimbangkan bersama. Kondisi tiap kota tidak sama.',
      take: 'Pelajari peran mangrove dan ekosistem pesisir tanpa menganggap penanaman di sembarang lokasi sebagai solusi tunggal. Ikuti rencana dan panduan pemulihan dari ahli serta pemerintah setempat.',
      sources: [{ label: 'Kementerian Lingkungan Hidup — Sabuk Pesisir yang Tenggelam, 9 Oktober 2026', url: 'https://kemenlh.go.id/news/detail/sabuk-pesisir-yang-tenggelam-paradoks-tanggul-dan-ilusi-perlindungan-pantura' }]
    },
    {
      id: 'air-jawa', category: 'KETAHANAN AIR · 2 OKTOBER 2026', icon: '🚰', title: 'Air melimpah saat banjir, tetapi belum tentu tersedia',
      summary: 'Ketersediaan, kualitas, dan akses air adalah persoalan yang berbeda.',
      detail: 'Dalam artikel 2 Oktober 2026, Kementerian Lingkungan Hidup menjelaskan paradoks pengelolaan air di Jawa: banjir pada suatu waktu tidak menghilangkan kekhawatiran kekurangan air pada waktu atau wilayah lain. Artikel itu menekankan peran daerah resapan, pengisian ulang air tanah, kualitas air, penghematan, dan data lokal. Istilah “Day Zero” dalam artikel dipakai sebagai peringatan, bukan ramalan bahwa seluruh Jawa akan kehabisan air pada hari tertentu.',
      take: 'Perlakukan air sebagai sistem dari hulu ke hilir. Gunakan air secara bijak, lindungi daerah resapan, dan cari informasi berdasarkan wilayah—bukan judul sensasional saja.',
      sources: [{ label: 'Kementerian Lingkungan Hidup — Menuju Day Zero, 2 Oktober 2026', url: 'https://kemenlh.go.id/news/detail/menuju-day-zero-jawa-kehabisan-air-di-tengah-luapan-bencana-banjir' }]
    }
  ];
  const indonesiaIssues = [
    { id: 'jabodetabek-smoke', label: '17 OKTOBER 2026 · BMKG', icon: '🌫️', title: 'Asap sempat terpantau di Jabodetabek', summary: 'BMKG menyebut sebaran asap karhutla mulai menjauh dari Jawa bagian barat; pemantauan saat itu tidak menunjukkan dampak pada kualitas udara permukaan.', tone: 'blue', sourceLabel: 'Baca penjelasan BMKG', url: 'https://www.bmkg.go.id/berita/utama/bmkg-asap-sempat-terpantau-sesaat-di-jabodetabek-kini-sudah-menjauh' },
    { id: 'wildfire-update', label: '16 OKTOBER 2026 · REUTERS', icon: '🔥', title: 'Penanganan karhutla menjadi perhatian besar', summary: 'Laporan Reuters membahas rencana Indonesia menilai tawaran bantuan dari negara tetangga dalam menangani kebakaran hutan dan lahan.', tone: 'peach', sourceLabel: 'Baca laporan Reuters', url: 'https://www.reuters.com/business/environment/indonesias-president-ready-accept-foreign-assistance-combat-fires-foreign-2026-10-16/' },
    { id: 'dry-weather', label: '15 OKTOBER 2026 · BMKG', icon: '☀️', title: 'Cuaca panas dan kering di sejumlah wilayah', summary: 'Prakiraan BMKG untuk 16–22 Oktober menyebut kondisi panas dan kering di sebagian daerah, sementara hujan lokal tetap mungkin terjadi.', tone: 'cream', sourceLabel: 'Baca prakiraan BMKG', url: 'https://www.bmkg.go.id/cuaca/potensi-hujan-sepekan/prakiraan-cuaca-indonesia-sepekan-periode-16-22-oktober-2026-panas-dan-kering-di-sebagian-wilayah-indonesia-hujan-lokal-masih-berpeluang-terjadi' },
    { id: 'waste', label: '6 OKTOBER 2026 · ANTARA', icon: '♻️', title: 'Kapasitas TPA Sarimukti', summary: 'Pengelola memperkirakan Zona 5 bisa penuh pada November 2026 bila pola sampah masuk dan kondisi operasional saat laporan berlanjut.', tone: 'sage', sourceLabel: 'Baca laporan ANTARA', url: 'https://jabar.antaranews.com/amp/berita/711032/uptd-tpa-sarimukti-memperkirakan-kapasitas-zona-5-penuh-november-2026' },
    { id: 'flood', label: '11 OKTOBER 2026 · BNPB', icon: '🌧️', title: 'Banjir dan longsor di sejumlah wilayah', summary: 'BNPB merangkum kejadian di beberapa daerah, termasuk Gayo Lues, Aceh Tenggara, dan Padang. Kondisi dapat berubah setelah laporan terbit.', tone: 'blue', sourceLabel: 'Baca pembaruan BNPB', url: 'https://ppid.bnpb.go.id/berita/perkembangan-situasi-dan-penanganan-bencana-di-tanah-air-11-oktober-2026-nLgP' },
    { id: 'coast', label: '9 OKTOBER 2026 · KLH/BPLH', icon: '🌊', title: 'Risiko kawasan pesisir Pantura', summary: 'Penurunan muka tanah, rob, tata ruang, dan ekosistem pesisir saling terkait di sejumlah kawasan; risiko tiap lokasi tidak sama.', tone: 'lavender', sourceLabel: 'Baca artikel KLH', url: 'https://kemenlh.go.id/news/detail/sabuk-pesisir-yang-tenggelam-paradoks-tanggul-dan-ilusi-perlindungan-pantura' }
  ];
  const ecoIcons = ['🍃', '💧', '☀️', '🌼', '🌳', '☁️', '🌱', '🐦', '🌊', '🦋', '♻️', '🌎', '⛰️', '🌬️', '🐚', '🌰', '🌅', '💚', '🌻'];
  const memberColors = ['#dce9d2', '#d9edf2', '#f2d9c8', '#eadff0', '#c9ddbd', '#fff0c6', '#d5e5ed', '#f7dfd5', '#e4e8cd', '#e6def1', '#d4e8dd', '#f4e7c9', '#d8e9d2', '#e3eff2', '#f1d7c3', '#dbe6c6', '#dce2f2', '#f5e4d0', '#d5e8e3'];
  // EDIT DATA PROFIL DI SINI. Ikon dan warna disesuaikan otomatis berdasarkan urutan anggota.
  const memberProfiles = [
    { name: "Atikah Qonita Prihastono", nickname: "Qonita" },
    { name: "Afiqah Ramadhani", nickname: "Afiqah" },
    { name: "Aisyah Muthmainnah Azzahra", nickname: "Aisyah" },
    { name: "Aisyah Naura Hafidzah", nickname: "Naura" },
    { name: "Annisha Aliyah Amirza", nickname: "Aliyah" },
    { name: "Annora Thalesa Firzanasari", nickname: "Nora" },
    { name: "Aqila Khairina Nareswari", nickname: "Aqila" },
    { name: "Arzanela Shatara Batrisyasari", nickname: "Nela" },
    { name: "Danish Aisyah Zafarani", nickname: "Danish" },
    { name: "Davina Ayra Elshandy", nickname: "Ayra" },
    { name: "Faiqa Ulima Fandy", nickname: "Faiqa" },
    { name: "Faiza Azkadina Zahra", nickname: "Faiza" },
    { name: "Hasna Husnul Khotimah", nickname: "Hasna" },
    { name: "Kayyisah Ayuma Ghaisani", nickname: "Kayyisah" },
    { name: "Khalisa Shafiyya Salsabila", nickname: "Khalisa" },
    { name: "Nadyne Alesha Widiananda", nickname: "Nadyne" },
    { name: "Qin Kaynuna Najma Arthono", nickname: "Qin" },
    { name: "Safa Alya Adriana", nickname: "Safa" },
    { name: "Safa Nayyara Azkadina", nickname: "Nayyara" }
  ];
  const members = memberProfiles.map((profile, index) => ({
    ...profile,
    id: index + 1,
    icon: ecoIcons[index],
    accentColor: memberColors[index]
  }));

  const detectiveCases = [
    {
      code: '001', title: 'KABUT ASAP DI MUSIM KERING', icon: '🔥', question: 'Kamu melihat asap dari kejauhan di area lahan kering. Apa langkah paling aman?',
      options: [
        { text: 'Mendekati titik api agar bisa merekam video dari dekat.', correct: false, feedback: 'Jangan mendekati api atau masuk ke area berbahaya. Jaga jarak dan laporkan informasi kepada orang dewasa atau petugas melalui kanal resmi.' },
        { text: 'Menjauh dari area, memberi tahu orang dewasa/petugas, dan mengikuti informasi resmi.', correct: true, feedback: 'Tepat. Keselamatan didahulukan. Hindari menyebarkan dugaan sebagai kepastian dan ikuti instruksi dari petugas.' },
        { text: 'Membakar sampah di tempat lain agar cepat selesai sebelum angin berubah.', correct: false, feedback: 'Pembakaran terbuka dapat menambah asap dan meningkatkan risiko kebakaran. Hindari membakar sampah atau lahan.' }
      ]
    },
    {
      code: '002', title: 'HUJAN DERAS DAN JALAN TERTUTUP AIR', icon: '🌧️', question: 'Saluran di dekat rumah meluap saat hujan dan air mulai menutupi jalan. Apa pilihan yang lebih aman?',
      options: [
        { text: 'Menerobos genangan untuk memperkirakan seberapa dalam airnya.', correct: false, feedback: 'Kedalaman, arus, lubang, dan kabel berbahaya mungkin tidak terlihat. Jangan menerobos banjir; ikuti arahan dan gunakan rute aman.' },
        { text: 'Mengikuti peringatan resmi, menjauhi arus, dan memberi tahu orang dewasa/pihak setempat.', correct: true, feedback: 'Benar. Kesiapsiagaan mengutamakan informasi resmi dan menghindari paparan bahaya.' },
        { text: 'Mengangkat penutup saluran yang sedang deras sendirian.', correct: false, feedback: 'Itu berbahaya dan dapat membuat orang terseret atau terperosok. Jangan masuk ke saluran; laporkan masalah kepada petugas.' }
      ]
    },
    {
      code: '003', title: 'SAMPAH MENDEKATI BATAS TPA', icon: '♻️', question: 'Ada laporan kapasitas TPA diperkirakan segera penuh. Hal paling masuk akal untuk dilakukan di rumah atau sekolah adalah…',
      options: [
        { text: 'Membuang seluruh sampah ke sungai agar tidak menambah TPA.', correct: false, feedback: 'Sampah di sungai menimbulkan masalah baru dan dapat menyumbat aliran. Sampah harus dikelola melalui sistem yang tepat.' },
        { text: 'Mengurangi sampah dari sumbernya dan memilah sesuai fasilitas yang benar-benar tersedia.', correct: true, feedback: 'Tepat. Pengurangan timbulan dan pemilahan yang sesuai dapat membantu, sementara pengelolaan skala besar tetap membutuhkan kebijakan dan fasilitas.' },
        { text: 'Menganggap semua jenis plastik pasti bisa didaur ulang di mana saja.', correct: false, feedback: 'Tidak semua plastik diterima setiap fasilitas. Periksa panduan bank sampah atau pengelola lokal sebelum memilah.' }
      ]
    }
  ];
  const guardianQuestions = [
    {
      question: 'Saat mendengar kabar lingkungan yang ramai dibicarakan, apa yang paling ingin kamu lakukan?',
      options: [
        { icon: '🔎', text: 'Mengecek sumber dan tanggal laporannya.', score: 'water' },
        { icon: '🌱', text: 'Mencari tahu bagaimana habitat bisa dijaga.', score: 'green' },
        { icon: '♻️', text: 'Memikirkan cara mengurangi sampah di sekitar.', score: 'waste' },
        { icon: '☀️', text: 'Mencari langkah sederhana untuk hemat sumber daya.', score: 'energy' }
      ]
    },
    {
      question: 'Kegiatan proyek kelompok mana yang paling menarik buatmu?',
      options: [
        { icon: '💧', text: 'Mengamati kualitas air dan sungai.', score: 'water' },
        { icon: '🦋', text: 'Membuat sudut hijau yang ramah makhluk hidup.', score: 'green' },
        { icon: '🧺', text: 'Menyusun sistem pemilahan barang bekas.', score: 'waste' },
        { icon: '🔌', text: 'Mencari cara mengurangi pemakaian listrik.', score: 'energy' }
      ]
    },
    {
      question: 'Kamu menemukan masalah di lingkungan sekolah. Kamu akan mulai dari…',
      options: [
        { icon: '📝', text: 'Mencatat apa yang terlihat dan meminta arahan guru.', score: 'water' },
        { icon: '🌳', text: 'Memeriksa apakah ruang hijau bisa dirawat bersama.', score: 'green' },
        { icon: '🗑️', text: 'Menelusuri jenis sampah dan tempat asalnya.', score: 'waste' },
        { icon: '💡', text: 'Mengamati kebiasaan penggunaan listrik dan air.', score: 'energy' }
      ]
    },
    {
      question: 'Kalimat mana yang paling dekat dengan prinsipmu?',
      options: [
        { icon: '🌊', text: '“Air bersih perlu dijaga dari hulu sampai hilir.”', score: 'water' },
        { icon: '🌼', text: '“Ruang hidup makhluk lain juga penting.”', score: 'green' },
        { icon: '🔁', text: '“Pikirkan ulang sebelum membuang sesuatu.”', score: 'waste' },
        { icon: '⚡', text: '“Sumber daya jangan dipakai sia-sia.”', score: 'energy' }
      ]
    }
  ];
  const guardianResults = {
    water: { icon: '💧', title: 'Water Protector', description: 'Kamu tertarik pada hubungan antara air bersih, sungai, dan kehidupan sehari-hari. Rasa ingin tahumu bisa dimulai dari kebiasaan mengamati dan memeriksa informasi.', action: 'Catat cara penggunaan air di rumah atau sekolah, lalu diskusikan satu perubahan kecil yang realistis.' },
    green: { icon: '🌿', title: 'Green Grower', description: 'Kamu tertarik pada ruang hijau, habitat, dan cara manusia hidup berdampingan dengan makhluk lain.', action: 'Rawat tanaman yang sudah ada atau cari tahu tanaman lokal yang sesuai dengan lingkunganmu.' },
    waste: { icon: '♻️', title: 'Waste Warrior', description: 'Kamu suka mencari cara mengurangi sampah dan membuat barang digunakan lebih bijak.', action: 'Amati jenis sampah yang paling sering muncul dalam satu kegiatan, lalu usulkan cara menguranginya.' },
    energy: { icon: '☀️', title: 'Resource Saver', description: 'Kamu tertarik pada penggunaan energi, air, dan sumber daya secara lebih efisien.', action: 'Pilih satu kebiasaan hemat sumber daya yang aman, praktis, dan bisa dipertahankan.' }
  };
  const dialog = $('#detail-dialog');
  const dialogTitle = $('#dialog-title');
  const dialogEyebrow = $('#dialog-eyebrow');
  const dialogVisual = $('#dialog-visual');
  const dialogContent = $('#dialog-content');
  const closeDialogButton = $('.dialog-close');
  const toast = $('#site-toast');
  let lastFocus = null;
  let toastTimer = null;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2800);
  }

  function openDialog({ title, eyebrow = 'BACA LEBIH LANJUT', icon = '✳', color = 'var(--sage)', content }) {
    lastFocus = document.activeElement;
    dialogTitle.textContent = title;
    dialogEyebrow.textContent = eyebrow;
    dialogVisual.textContent = icon;
    dialogVisual.style.background = color;
    dialogContent.innerHTML = content;
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
      document.body.classList.add('dialog-open');
    }
    closeDialogButton.focus();
  }

  function closeDialog() {
    if (typeof dialog.close === 'function' && dialog.open) dialog.close();
    else {
      dialog.removeAttribute('open');
      document.body.classList.remove('dialog-open');
    }
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  function sourceLinks(sources) {
    if (!sources || !sources.length) return '';
    return `<h3>Sumber bacaan</h3><div class="source-list">${sources.map(source => `<a class="source-link" href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}<span aria-hidden="true">↗</span></a>`).join('')}</div>`;
  }

  function initializeNavigation() {
    const toggle = $('.menu-toggle');
    const links = $('#nav-links');
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Buka menu navigasi' : 'Tutup menu navigasi');
      links.classList.toggle('is-open', !isOpen);
    });
    $$('a', links).forEach(link => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Buka menu navigasi');
      links.classList.remove('is-open');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && links.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Buka menu navigasi');
        links.classList.remove('is-open');
      }
    });

    const sections = ['discover', 'eco-crew', 'take-action'].map(id => document.getElementById(id)).filter(Boolean);
    if ('IntersectionObserver' in window) {
      const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const destination = entry.target.id;
          $$('.nav-links a').forEach(link => {
            if (link.getAttribute('href') === `#${destination}`) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        });
      }, { rootMargin: '-35% 0px -55% 0px' });
      sections.forEach(section => navObserver.observe(section));
    }
  }

  function initializeRiverSlider() {
    const range = $('#river-range');
    const stage = $('#river-stage');
    const divider = $('.river-divider', stage);
    const dirtyScene = $('.river-dirty', stage);
    function update() {
      const value = Number(range.value);
      stage.style.setProperty('--split', `${value}%`);
      range.setAttribute('aria-valuetext', `${value} persen ilustrasi sungai tercemar ditampilkan`);
      range.setAttribute('aria-label', 'Atur perbandingan: persentase ilustrasi sungai tercemar yang terlihat');
      dirtyScene.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
      divider.style.left = `${value}%`;
    }
    range.addEventListener('input', update);
    update();
  }

  function openPollutionDetail(topic) {
    const content = `<p>${topic.summary}</p><h3>Apa yang terjadi?</h3><p>${topic.what}</p><h3>Mengapa penting?</h3><p>${topic.why}</p><h3>Apa yang bisa dilakukan?</h3><ul>${topic.actions.map(item => `<li>${item}</li>`).join('')}</ul>${sourceLinks(topic.source)}`;
    openDialog({ title: topic.title, eyebrow: topic.category, icon: topic.icon, color: topic.id === 'karhutla' ? 'var(--peach)' : topic.id === 'sampah' ? 'var(--sage)' : topic.id === 'banjir' ? 'var(--sky)' : 'var(--lavender)', content });
  }

  function renderIndonesiaIssues() {
    const grid = $('#indonesia-issue-grid');
    if (!grid) return;
    grid.innerHTML = indonesiaIssues.map((issue, index) => `
      <article class="issue-card tone-${issue.tone}">
        <div class="issue-card-top"><span>${issue.label}</span><span class="issue-index">0${index + 1}</span></div>
        <div class="issue-icon" aria-hidden="true">${issue.icon}</div>
        <h3>${issue.title}</h3><p>${issue.summary}</p>
        <a class="issue-link" href="${issue.url}" target="_blank" rel="noopener noreferrer">${issue.sourceLabel} <span aria-hidden="true">↗</span></a>
      </article>`).join('');
  }

  function renderPollutionCards() {
    const grid = $('#pollution-grid');
    grid.innerHTML = pollutionTopics.map(topic => `
      <article class="pollution-card">
        <div class="card-topline"><span>${topic.category}</span><span class="card-index">${topic.number} / 04</span></div>
        <div class="pollution-illustration" aria-hidden="true">${topic.icon}</div>
        <h3>${topic.title}</h3><p>${topic.summary}</p>
        <button class="card-action" type="button" data-pollution-id="${topic.id}" aria-label="Pelajari ${topic.title}"><span>PELAJARI TOPIK</span><span aria-hidden="true">↗</span></button>
      </article>`).join('');
    grid.addEventListener('click', event => {
      const button = event.target.closest('[data-pollution-id]');
      if (!button) return;
      const topic = pollutionTopics.find(item => item.id === button.dataset.pollutionId);
      if (topic) openPollutionDetail(topic);
    });
  }

  function openArticle(article) {
    const content = `<p>${article.detail}</p><h3>Langkah yang bisa dipikirkan</h3><p>${article.take}</p><p class="profile-prompt">Ringkasan ini adalah pengantar, bukan pengganti sumber asli atau arahan resmi sesuai wilayah.</p>${sourceLinks(article.sources)}`;
    openDialog({ title: article.title, eyebrow: article.category, icon: article.icon, color: article.id === 'karhutla-update' ? 'var(--peach)' : article.id === 'sarimukti' ? 'var(--sage)' : article.id === 'el-nino' || article.id === 'air-jawa' ? 'var(--sky)' : article.id === 'floods' ? 'var(--meadow)' : article.id === 'pantura' ? 'var(--lavender)' : 'var(--peach)', content });
  }

  function renderArticles() {
    const grid = $('#article-grid');
    grid.innerHTML = articles.map((article, index) => `
      <article class="article-card">
        <div class="article-top"><span>${article.category}</span><span>CATATAN ${String(index + 1).padStart(2, '0')}</span></div>
        <div class="article-icon" aria-hidden="true">${article.icon}</div>
        <h3>${article.title}</h3><p>${article.summary}</p>
        <button class="card-action" type="button" data-article-id="${article.id}" aria-label="Baca ringkasan: ${article.title}"><span>BACA RINGKASAN</span><span aria-hidden="true">↗</span></button>
      </article>`).join('');
    grid.addEventListener('click', event => {
      const button = event.target.closest('[data-article-id]');
      if (!button) return;
      const article = articles.find(item => item.id === button.dataset.articleId);
      if (article) openArticle(article);
    });
  }

  function openMemberProfile(member) {
    const content = `<p>Nama lengkap anggota Eco Crew ini adalah <strong>${member.name}</strong>.</p><p>Bagian dari Eco Crew ABQORECYCLE 9B Abqoriyyah 2026/2027.</p>`;
    openDialog({ title: member.name, eyebrow: `ECO CREW / ANGGOTA ${String(member.id).padStart(2, '0')}`, icon: member.icon, color: member.accentColor, content });
  }

  function renderMembers() {
    const grid = $('#member-grid');
    grid.innerHTML = members.map(member => `
      <button class="member-card" type="button" data-member-id="${member.id}" style="--member-color:${member.accentColor};--tilt:${member.id % 2 ? '-4deg' : '4deg'}" aria-label="Buka profil ${member.nickname}">
        <span class="member-number">ANGGOTA ${String(member.id).padStart(2, '0')}</span>
        <span class="member-symbol" aria-hidden="true">${member.icon}</span>
        <span class="member-name">${member.nickname}</span>
        <span class="member-nickname">Eco Crew</span><span class="member-open" aria-hidden="true">↗</span>
      </button>`).join('');
    $('#member-count').textContent = `${members.length} profil · ketuk untuk membuka`;
    grid.addEventListener('click', event => {
      const button = event.target.closest('[data-member-id]');
      if (!button) return;
      const member = members.find(item => item.id === Number(button.dataset.memberId));
      if (member) openMemberProfile(member);
    });
  }

  function initializeDetective() {
    const state = { index: 0, score: 0, answered: false, finished: false };
    const number = $('#case-number');
    const progressLabel = $('#case-progress-label');
    const progressBar = $('#case-progress-bar');
    const art = $('#case-art');
    const kicker = $('#case-kicker');
    const question = $('#case-question');
    const options = $('#case-options');
    const feedback = $('#case-feedback');
    const score = $('#case-score');
    const next = $('#next-case');
    const consoleTop = $('.console-top');
    const progress = $('.case-progress');

    function renderCase() {
      state.answered = false;
      state.finished = false;
      const item = detectiveCases[state.index];
      number.textContent = item.code;
      progressLabel.textContent = `KASUS ${state.index + 1} DARI ${detectiveCases.length}`;
      progressBar.style.width = `${((state.index + 1) / detectiveCases.length) * 100}%`;
      art.textContent = item.icon;
      art.style.background = state.index === 1 ? 'var(--meadow)' : state.index === 2 ? 'var(--peach)' : 'var(--sky)';
      kicker.textContent = item.title;
      question.textContent = item.question;
      options.innerHTML = item.options.map((option, index) => `<button class="case-option" type="button" data-option-index="${index}"><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option.text}</span></button>`).join('');
      feedback.hidden = true;
      feedback.innerHTML = '';
      score.textContent = `KASUS TERPECAHKAN: ${state.score}`;
      next.disabled = true;
      next.innerHTML = state.index === detectiveCases.length - 1 ? 'Lihat hasil <span aria-hidden="true">→</span>' : 'Kasus berikutnya <span aria-hidden="true">→</span>';
    }

    function renderFinal() {
      state.finished = true;
      number.textContent = 'SELESAI';
      progressLabel.textContent = 'INVESTIGASI SELESAI';
      progressBar.style.width = '100%';
      art.textContent = state.score === detectiveCases.length ? '🏆' : '🕵️';
      art.style.background = 'var(--meadow)';
      kicker.textContent = 'RINGKASAN KASUS';
      question.textContent = `Kamu menyelesaikan ${state.score} dari ${detectiveCases.length} kasus pada percobaan pertama.`;
      options.innerHTML = '';
      feedback.hidden = false;
      feedback.innerHTML = `<strong>${state.score === 3 ? 'Penyelidikan yang teliti!' : state.score >= 2 ? 'Catatan lapangan yang bagus!' : 'Setiap petunjuk adalah kesempatan belajar.'}</strong>${state.score === 3 ? 'Kamu memilih langkah yang berhati-hati dan berdasarkan bukti pada ketiga kasus.' : 'Baca penjelasan dan ingat bahwa persoalan lingkungan nyata perlu data yang cukup, arahan setempat, serta penilaian pihak yang kompeten.'}`;
      score.textContent = '3 KASUS TELAH DITINJAU';
      next.disabled = false;
      next.innerHTML = 'Ulangi kasus <span aria-hidden="true">↻</span>';
    }

    options.addEventListener('click', event => {
      const button = event.target.closest('[data-option-index]');
      if (!button || state.answered || state.finished) return;
      state.answered = true;
      const item = detectiveCases[state.index];
      const selectedIndex = Number(button.dataset.optionIndex);
      const selected = item.options[selectedIndex];
      if (selected.correct) state.score += 1;
      $$('.case-option', options).forEach((optionButton, index) => {
        optionButton.disabled = true;
        if (item.options[index].correct) optionButton.classList.add('is-correct');
        else if (index === selectedIndex) optionButton.classList.add('is-wrong');
      });
      feedback.hidden = false;
      feedback.innerHTML = `<strong>${selected.correct ? 'Tepat! ✓' : 'Belum tepat—coba pahami petunjuknya.'}</strong> ${selected.feedback}`;
      score.textContent = `KASUS TERPECAHKAN: ${state.score}`;
      next.disabled = false;
    });

    next.addEventListener('click', () => {
      if (state.finished) {
        state.index = 0;
        state.score = 0;
        renderCase();
      } else if (state.index < detectiveCases.length - 1) {
        state.index += 1;
        renderCase();
      } else {
        renderFinal();
      }
    });
    renderCase();
  }

  function initializeInteractiveGames() {
    const tabButtons = $$('.mission-tab');
    const panels = $$('.mission-panel');
    tabButtons.forEach(button => button.addEventListener('click', () => {
      tabButtons.forEach(tab => {
        const active = tab === button;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
      });
      panels.forEach(panel => {
        const active = panel.id === button.getAttribute('aria-controls');
        panel.classList.toggle('is-active', active);
        panel.hidden = !active;
      });
    }));

    // Game 1: waste sorting, usable by tap/click and drag-and-drop.
    const sortItems = [
      { icon: '🍌', name: 'Kulit pisang', bin: 'organik', why: 'Sisa tumbuhan dan makanan dapat masuk alur organik jika fasilitas setempat menerima dan mengolahnya.' },
      { icon: '🧴', name: 'Botol plastik bersih', bin: 'daur-ulang', why: 'Botol tertentu bisa diterima bank sampah atau fasilitas daur ulang. Pastikan jenis plastik dan kondisinya sesuai aturan lokal.' },
      { icon: '🔋', name: 'Baterai bekas', bin: 'khusus', why: 'Baterai perlu penanganan khusus karena dapat mengandung bahan yang berbahaya bila bocor atau diproses keliru.' },
      { icon: '🍱', name: 'Bungkus makanan sachet', bin: 'residu', why: 'Kemasan berlapis seperti sachet tidak diterima oleh semua fasilitas. Ikuti panduan lokal dan kurangi penggunaannya bila ada alternatif.' },
      { icon: '📦', name: 'Kardus bersih dan kering', bin: 'daur-ulang', why: 'Kardus bersih dan kering umumnya dapat disalurkan ke pengumpulan kertas bila diterima oleh fasilitas setempat.' },
      { icon: '🥬', name: 'Sisa sayuran', bin: 'organik', why: 'Sisa sayuran dapat masuk pengolahan organik atau kompos jika ada fasilitas yang sesuai.' },
      { icon: '💡', name: 'Lampu tertentu yang sudah rusak', bin: 'khusus', why: 'Sebagian jenis lampu perlu dipisahkan dan ditangani secara khusus. Jangan pecahkan atau campur sembarangan; ikuti petunjuk lokal.' },
      { icon: '🧻', name: 'Tisu kotor', bin: 'residu', why: 'Tisu yang sudah kotor biasanya tidak masuk alur daur ulang kertas; pemilahan akhir tetap mengikuti sistem setempat.' }
    ];
    let sortIndex = 0;
    let sortScore = 0;
    let sortCorrect = false;
    const sortObject = $('#sort-object');
    const sortIcon = $('#sort-object-icon');
    const sortName = $('#sort-object-name');
    const sortProgress = $('#sort-progress');
    const sortScoreLabel = $('#sort-score');
    const sortFeedback = $('#sort-feedback');
    const sortNext = $('#sort-next');
    const sortResults = $('#sort-results');
    const sortBins = $$('.sort-bin');
    function renderSortItem() {
      const item = sortItems[sortIndex];
      sortCorrect = false;
      sortObject.disabled = false;
      sortObject.classList.remove('is-sorted');
      sortObject.draggable = true;
      sortIcon.textContent = item.icon;
      sortName.textContent = item.name;
      sortProgress.textContent = `Benda ${sortIndex + 1} dari ${sortItems.length}`;
      sortScoreLabel.textContent = `Poin: ${sortScore}`;
      sortFeedback.textContent = 'Pilih kategori yang menurutmu tepat.';
      sortFeedback.className = 'sort-feedback';
      sortNext.disabled = true;
      sortNext.hidden = false;
      sortResults.hidden = true;
      sortBins.forEach(bin => { bin.classList.remove('is-correct', 'is-wrong', 'is-target'); bin.disabled = false; });
    }
    function placeSortItem(binName) {
      if (sortCorrect || sortIndex >= sortItems.length) return;
      const item = sortItems[sortIndex];
      const picked = sortBins.find(bin => bin.dataset.sortBin === binName);
      if (!picked) return;
      sortBins.forEach(bin => bin.classList.remove('is-correct', 'is-wrong', 'is-target'));
      if (binName === item.bin) {
        sortCorrect = true;
        sortScore += 10;
        picked.classList.add('is-correct');
        sortObject.classList.add('is-sorted');
        sortObject.draggable = false;
        sortNext.disabled = false;
        sortScoreLabel.textContent = `Poin: ${sortScore}`;
        sortFeedback.textContent = `Tepat! ${item.why}`;
        sortFeedback.classList.add('is-good');
        sortBins.forEach(bin => { bin.disabled = true; });
      } else {
        picked.classList.add('is-wrong');
        sortFeedback.textContent = `Belum tepat. ${item.why} Coba kategori lain.`;
        sortFeedback.classList.add('is-try-again');
      }
    }
    sortBins.forEach(bin => {
      bin.addEventListener('click', () => placeSortItem(bin.dataset.sortBin));
      bin.addEventListener('dragover', event => { if (!sortCorrect) { event.preventDefault(); bin.classList.add('is-target'); } });
      bin.addEventListener('dragleave', () => bin.classList.remove('is-target'));
      bin.addEventListener('drop', event => { event.preventDefault(); bin.classList.remove('is-target'); placeSortItem(bin.dataset.sortBin); });
    });
    sortObject.addEventListener('dragstart', event => {
      if (!sortCorrect) event.dataTransfer.setData('text/plain', sortItems[sortIndex].bin === 'none' ? '' : 'sort-item');
    });
    sortNext.addEventListener('click', () => {
      if (!sortCorrect) return;
      if (sortIndex < sortItems.length - 1) { sortIndex += 1; renderSortItem(); }
      else {
        sortObject.disabled = true;
        sortNext.hidden = true;
        sortProgress.textContent = 'Semua benda selesai';
        sortFeedback.textContent = 'Misi selesai! Ingat, aturan pemilahan mengikuti fasilitas yang tersedia di daerahmu.';
        sortResults.hidden = false;
        sortResults.innerHTML = `<strong>Skor akhir: ${sortScore} / ${sortItems.length * 10}</strong><p>${sortScore === sortItems.length * 10 ? 'Pemilahanmu rapi sekali!' : 'Kamu sudah menyelesaikan seluruh benda. Coba ulangi untuk mengingat kategorinya.'}</p><button type="button" class="button button-dark" id="sort-play-again">Main lagi ↻</button>`;
        $('#sort-play-again', sortResults).addEventListener('click', resetSort);
      }
    });
    function resetSort() { sortIndex = 0; sortScore = 0; renderSortItem(); }
    $('#sort-restart').addEventListener('click', resetSort);
    renderSortItem();

    // Game 2: budget and resilience planning. This score is a game mechanic, not a real flood model.
    const floodCards = $$('.flood-action');
    const floodBudget = $('#flood-budget');
    const floodScore = $('#flood-score');
    const floodFill = $('#flood-meter-fill');
    const floodFeedback = $('#flood-feedback');
    const floodCaption = $('#flood-scene-caption');
    const neighbourhoodScene = $('#neighbourhood-scene');
    const totalBudget = 10;
    function selectedFloodCards() { return floodCards.filter(card => card.classList.contains('is-selected')); }
    function updateFlood() {
      const chosen = selectedFloodCards();
      const cost = chosen.reduce((sum, card) => sum + Number(card.dataset.cost), 0);
      const impact = chosen.reduce((sum, card) => sum + Number(card.dataset.impact), 0);
      const remaining = totalBudget - cost;
      floodBudget.textContent = `Sisa: ${remaining} koin`;
      floodBudget.classList.toggle('is-low', remaining < 0);
      floodScore.textContent = String(impact);
      floodFill.style.width = `${Math.min(100, impact / 10 * 100)}%`;
      floodCards.forEach(card => {
        const nextCost = Number(card.dataset.cost);
        card.disabled = !card.classList.contains('is-selected') && nextCost > remaining;
      });
      return { chosen, cost, impact, remaining };
    }
    floodCards.forEach(card => card.addEventListener('click', () => {
      const currentlySelected = card.classList.contains('is-selected');
      if (!currentlySelected) {
        const currentCost = selectedFloodCards().reduce((sum, item) => sum + Number(item.dataset.cost), 0);
        if (currentCost + Number(card.dataset.cost) > totalBudget) {
          floodFeedback.hidden = false;
          floodFeedback.textContent = 'Koin aksimu belum cukup untuk strategi itu. Lepaskan strategi lain atau pilih tindakan yang lebih hemat.';
          return;
        }
      }
      card.classList.toggle('is-selected');
      floodFeedback.hidden = true;
      neighbourhoodScene.classList.toggle('has-plan', selectedFloodCards().length > 0);
      floodCaption.textContent = selectedFloodCards().length ? `${selectedFloodCards().length} strategi dipilih — rencanamu mulai terbentuk.` : 'Kampung menunggu rencanamu.';
      updateFlood();
    }));
    $('#flood-evaluate').addEventListener('click', () => {
      const result = updateFlood();
      floodFeedback.hidden = false;
      if (!result.chosen.length) {
        floodFeedback.textContent = 'Pilih setidaknya satu strategi. Kesiapsiagaan butuh perencanaan, informasi, dan kerja bersama.';
        return;
      }
      const message = result.impact >= 8 ? 'Rencana seimbang! Kamu menggabungkan beberapa upaya kesiapsiagaan. Di dunia nyata, pelaksanaan perlu koordinasi warga dan pemerintah setempat.' : result.impact >= 5 ? 'Awal yang baik. Pertimbangkan apakah rencana juga mencakup informasi evakuasi dan perawatan lingkungan.' : 'Kamu sudah memulai, tetapi rencanamu masih terbatas. Coba gabungkan beberapa langkah sesuai anggaran permainan.';
      floodFeedback.innerHTML = `<strong>Nilai strategi: ${result.impact}</strong><p>${message}</p><p class="mini-caveat">Nilai ini hanya mekanik permainan. Risiko banjir nyata ditentukan banyak faktor dan memerlukan data lokal.</p>`;
      floodCaption.textContent = result.impact >= 8 ? 'Rencana kesiapsiagaanmu sudah beragam!' : 'Masih ada ruang untuk memperkuat rencana.';
    });
    function resetFlood() {
      floodCards.forEach(card => { card.classList.remove('is-selected'); card.disabled = false; });
      floodFeedback.hidden = true;
      floodFeedback.textContent = '';
      neighbourhoodScene.classList.remove('has-plan');
      floodCaption.textContent = 'Kampung menunggu rencanamu.';
      updateFlood();
    }
    $('#flood-reset').addEventListener('click', resetFlood);
    updateFlood();

    // Game 3: choose several safe fire-prevention actions and avoid risky responses.
    const fireChoices = $$('.fire-choice');
    const fireSelectedCount = $('#fire-selected-count');
    const fireFeedback = $('#fire-feedback');
    let fireEvaluated = false;
    function updateFireCount() {
      const selected = fireChoices.filter(button => button.classList.contains('is-selected')).length;
      fireSelectedCount.textContent = `${selected} tindakan dipilih`;
    }
    fireChoices.forEach(button => button.addEventListener('click', () => {
      if (fireEvaluated) return;
      button.classList.toggle('is-selected');
      updateFireCount();
      fireFeedback.hidden = true;
    }));
    $('#fire-evaluate').addEventListener('click', () => {
      const selected = fireChoices.filter(button => button.classList.contains('is-selected'));
      if (!selected.length) {
        fireFeedback.hidden = false;
        fireFeedback.textContent = 'Pilih tindakan yang ingin kamu masukkan ke dalam rencana terlebih dahulu.';
        return;
      }
      const safeSelected = selected.filter(button => button.dataset.fireSafe === 'true').length;
      const riskySelected = selected.filter(button => button.dataset.fireSafe !== 'true').length;
      const safeOmitted = fireChoices.filter(button => button.dataset.fireSafe === 'true' && !button.classList.contains('is-selected')).length;
      const score = Math.max(0, safeSelected * 2 - riskySelected - safeOmitted);
      fireEvaluated = true;
      fireChoices.forEach(button => {
        button.disabled = true;
        if (button.dataset.fireSafe === 'true') button.classList.add('is-safe-answer');
        else if (button.classList.contains('is-selected')) button.classList.add('is-risky-answer');
      });
      fireFeedback.hidden = false;
      const grade = score >= 5 && riskySelected === 0 ? 'Rencana aman dan terarah.' : score >= 2 ? 'Ada langkah baik, tetapi beberapa pilihan perlu diperbaiki.' : 'Mari susun ulang rencananya dengan mengutamakan keselamatan.';
      fireFeedback.innerHTML = `<strong>${grade}</strong><p>${safeSelected} tindakan aman dipilih, ${riskySelected} tindakan berisiko dipilih, dan ${safeOmitted} tindakan aman belum masuk rencana.</p><p>Prinsip penting: jangan membakar sampah/lahan, jangan mendekati titik api, periksa informasi resmi, dan ikuti arahan petugas.</p>`;
      $('#fire-evaluate').textContent = 'Strategi dinilai ✓';
    });
    $('#fire-reset').addEventListener('click', () => {
      fireEvaluated = false;
      fireChoices.forEach(button => { button.disabled = false; button.classList.remove('is-selected', 'is-safe-answer', 'is-risky-answer'); });
      fireFeedback.hidden = true;
      fireFeedback.textContent = '';
      $('#fire-evaluate').innerHTML = 'Nilai strategi <span aria-hidden="true">↗</span>';
      updateFireCount();
    });
  }

  function initializeGuardianQuiz() {
    const state = { index: 0, answers: [] };
    const stepLabel = $('#guardian-step-label');
    const percent = $('#guardian-percent');
    const progress = $('#guardian-progress-bar');
    const questionEl = $('#guardian-question');
    const optionsEl = $('#guardian-options');
    const backButton = $('#guardian-back');
    const card = $('#guardian-card');

    function renderQuestion() {
      const item = guardianQuestions[state.index];
      const progressValue = ((state.index + 1) / guardianQuestions.length) * 100;
      stepLabel.textContent = `PERTANYAAN ${String(state.index + 1).padStart(2, '0')} / ${String(guardianQuestions.length).padStart(2, '0')}`;
      percent.textContent = `${progressValue}%`;
      progress.style.width = `${progressValue}%`;
      questionEl.textContent = item.question;
      optionsEl.innerHTML = item.options.map((option, index) => `<button class="guardian-option" type="button" data-guardian-option="${index}"><span aria-hidden="true">${option.icon}</span><span>${option.text}</span></button>`).join('');
      backButton.hidden = state.index === 0;
    }

    function renderResult() {
      const tally = { water: 0, green: 0, waste: 0, energy: 0 };
      state.answers.forEach(answer => { tally[answer] += 1; });
      // Stable tie-break: category order follows the fixed keys below.
      const stableOrder = ['water', 'green', 'waste', 'energy'];
      const winner = stableOrder.reduce((best, key) => tally[key] > tally[best] ? key : best, stableOrder[0]);
      const result = guardianResults[winner];
      stepLabel.textContent = 'HASIL GAYA AKSIMU';
      percent.textContent = '100%';
      progress.style.width = '100%';
      questionEl.hidden = true;
      optionsEl.innerHTML = `<div class="guardian-result"><div class="guardian-result-icon" style="background:${winner === 'water' ? 'var(--sky)' : winner === 'green' ? 'var(--sage)' : winner === 'waste' ? 'var(--lavender)' : 'var(--peach)'}" aria-hidden="true">${result.icon}</div><p class="eyebrow">HASILMU</p><h3>${result.title}</h3><p>${result.description}</p><div class="result-action"><strong>Langkah kecil berikutnya:</strong><br>${result.action}</div><button class="button button-dark" type="button" id="restart-guardian">Coba lagi <span aria-hidden="true">↻</span></button></div>`;
      backButton.hidden = true;
      $('#restart-guardian', optionsEl).addEventListener('click', reset);
    }

    function reset() {
      state.index = 0;
      state.answers = [];
      questionEl.hidden = false;
      renderQuestion();
    }

    optionsEl.addEventListener('click', event => {
      const button = event.target.closest('[data-guardian-option]');
      if (!button) return;
      const optionIndex = Number(button.dataset.guardianOption);
      const answer = guardianQuestions[state.index].options[optionIndex];
      state.answers[state.index] = answer.score;
      if (state.index < guardianQuestions.length - 1) {
        state.index += 1;
        renderQuestion();
      } else {
        renderResult();
      }
    });

    backButton.addEventListener('click', () => {
      if (state.index > 0) {
        state.index -= 1;
        state.answers = state.answers.slice(0, state.index);
        renderQuestion();
      }
    });
    renderQuestion();
  }

  function initializeGreenChallenge() {
    const checkboxes = $$('#promise-list input[type="checkbox"]');
    const count = $('#promise-count');
    const growth = $('#growth-illustration');
    const growthLevel = $('#growth-level');
    const growthSpeech = $('#growth-speech');
    const growthMessage = $('#growth-message');
    const copyButton = $('#copy-promise');
    const copyFeedback = $('#copy-feedback');
    const levels = [
      ['BENIH · 0/5', 'Setiap hutan berawal dari benih.', 'Pilih satu aksi kecil untuk menanam gagasan pertamamu.'],
      ['TUNAS · 1/5', 'Tunas kecil mulai tumbuh.', 'Satu gagasan adalah awal. Pilih aksi yang cocok dengan keseharianmu.'],
      ['DAUN BARU · 2/5', 'Lihat, daun baru tumbuh!', 'Pilihan kecil lebih mudah dilakukan saat jelas dan realistis.'],
      ['BERTUMBUH · 3/5', 'Tumbuh dengan ritmemu sendiri.', 'Buat komitmen yang praktis dan sesuaikan dengan fasilitas di sekitarmu.'],
      ['SUBUR · 4/5', 'Sedikit lebih hijau setiap hari.', 'Kamu sudah memilih beberapa ide. Utamakan menjalankannya, bukan sekadar mencentang.'],
      ['MEKAR · 5/5', 'Lihat sejauh apa ide ini tumbuh!', 'Lima pengingat terpilih. Perubahan hadir dari tindakan nyata yang dilakukan berulang.']
    ];

    function selectedValues() { return checkboxes.filter(input => input.checked).map(input => input.value); }
    function update() {
      const chosen = selectedValues();
      const amount = chosen.length;
      count.textContent = `${amount} komitmen dipilih`;
      growth.dataset.growth = String(amount);
      growth.setAttribute('aria-label', `Ilustrasi tanaman pada tahap pertumbuhan ${amount} dari 5`);
      growthLevel.textContent = levels[amount][0];
      growthSpeech.textContent = levels[amount][1];
      growthMessage.textContent = levels[amount][2];
      copyFeedback.textContent = '';
    }

    checkboxes.forEach(input => input.addEventListener('change', update));
    copyButton.addEventListener('click', async () => {
      const chosen = selectedValues();
      const promiseText = chosen.length
        ? `Janji hijau ABQORECYCLE:\n${chosen.map(value => `• ${value}`).join('\n')}\n\nIni adalah niat yang ingin kujalankan, bukan klaim bahwa semuanya sudah kulakukan.`
        : 'Janji hijau ABQORECYCLE: aku akan memilih satu cara realistis untuk menjaga lingkungan.';
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(promiseText);
          copyFeedback.textContent = 'Berhasil disalin. Janjimu siap ditempel.';
          showToast('Janji hijau berhasil disalin.');
        } else {
          const temporary = document.createElement('textarea');
          temporary.value = promiseText;
          temporary.setAttribute('readonly', '');
          temporary.style.position = 'fixed';
          temporary.style.opacity = '0';
          temporary.style.pointerEvents = 'none';
          document.body.appendChild(temporary);
          temporary.select();
          const copied = document.execCommand('copy');
          temporary.remove();
          if (!copied) throw new Error('Clipboard fallback unavailable');
          copyFeedback.textContent = 'Berhasil disalin. Janjimu siap ditempel.';
          showToast('Janji hijau berhasil disalin.');
        }
      } catch (error) {
        copyFeedback.textContent = 'Penyalinan otomatis diblokir. Salin teks secara manual dari panel berikut.';
        openDialog({ title: 'Janji hijaumu', eyebrow: 'SIAP DISALIN', icon: '🌱', color: 'var(--sage)', content: `<p>Salin teks ini secara manual:</p><div class="profile-prompt" style="white-space:pre-wrap;user-select:text">${promiseText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>` });
      }
    });
    update();
  }

  function initializeScrollAnimations() {
    const revealItems = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach(item => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -25px 0px' });
    revealItems.forEach(item => observer.observe(item));
  }

  function initializeDialogControls() {
    closeDialogButton.addEventListener('click', closeDialog);
    dialog.addEventListener('click', event => {
      if (event.target === dialog) closeDialog();
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('dialog-open');
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    });
  }

  function initializeSoundControls() {
    const nature = $('#nature-audio');
    const click = $('#click-audio');
    const toggle = $('#sound-toggle');
    if (!nature || !click || !toggle) return;
    let soundOn = false;
    toggle.addEventListener('click', async () => {
      soundOn = !soundOn;
      toggle.setAttribute('aria-pressed', String(soundOn));
      toggle.setAttribute('aria-label', soundOn ? 'Matikan suara alam' : 'Nyalakan suara alam');
      const label = $('span', toggle);
      if (label) label.textContent = soundOn ? 'nature sound: on' : 'nature sound: off';
      if (soundOn) {
        try { nature.volume = 0.22; await nature.play(); }
        catch (error) { soundOn = false; toggle.setAttribute('aria-pressed', 'false'); if (label) label.textContent = 'Suara alam: gagal diputar'; }
      } else { nature.pause(); nature.currentTime = 0; }
    });
    // Efek klik hanya diputar setelah interaksi pengguna dan tidak menghentikan suara alam.
    document.addEventListener('click', event => {
      const target = event.target.closest('button, a, input[type="checkbox"], [role="button"], [data-sort-bin]');
      if (!target || target.disabled || target.id === 'sound-toggle') return;
      try {
        click.currentTime = 0;
        click.volume = 0.35;
        const playback = click.play();
        if (playback && typeof playback.catch === 'function') playback.catch(() => {});
      } catch (error) { /* Efek suara opsional; interaksi utama tetap berjalan. */ }
    }, true);
  }

  function initialize() {
    initializeNavigation();
    initializeRiverSlider();
    renderIndonesiaIssues();
    renderPollutionCards();
    renderArticles();
    renderMembers();
    initializeInteractiveGames();
    initializeDetective();
    initializeGuardianQuiz();
    initializeGreenChallenge();
    initializeScrollAnimations();
    initializeDialogControls();
    initializeSoundControls();
  }

  return { initialize };
})();

document.addEventListener('DOMContentLoaded', ABQORECYCLE.initialize, { once: true });
