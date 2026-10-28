import umkmThumb from "../assets/umkm_tegal_waru.jpg";
import xCoffeeThumb from "../assets/x_coffee.png";
import blockchainThumb from "../assets/blockchain_ijazah.png";
import kantinwebThumb from "../assets/kantinweb.png";
import kantinmobThumb from "../assets/kantinmob.png";
import rakinfoThumb from "../assets/rakinfo.png";
import tiketkuThumb from "../assets/tiketku.png";

export const projectCategories = [
  { id: "all", label: "Semua Proyek" },
  { id: "frontend", label: "Front-End Dev" },
  { id: "uiux", label: "UI/UX Design" },
  { id: "qa", label: "Quality Assurance" },
  { id: "mobile", label: "Mobile Dev" },
];

export const projectsData = [
  {
    id: "umkm-tegal-waru",
    title: "Peta Digital Persebaran UMKM Desa Tegal Waru",
    shortTitle: "Peta Digital Persebaran UMKM Desa Tegal Waru",
    year: "2026",
    role: "Front-End Developer",
    category: "frontend",
    categoryLabel: "Front-End & GIS",
    color: "#38bdf8",
    badge: "KKN Project",
    thumbnail: umkmThumb,
    description: "Mengembangkan web landing page untuk menampilkan peta interaktif persebaran UMKM Desa Tegal Waru yang responsif dan mudah diakses melalui perangkat mobile, serta mengintegrasikan QR Code sebagai akses menuju platform digital pemetaan UMKM.",
    technologies: ["React.js", "Tailwind CSS", "Interactive Map", "QR Code Integration", "Mobile Responsive"],
    demo: "https://potensi-desa-tegal-waru.vercel.app",
    featured: true,
    highlights: [
      "Peta interaktif titik persebaran UMKM lokal Desa Tegal Waru berbasis koordinat",
      "Integrasi QR Code fisik untuk akses instan via scan kamera smartphone warga & wisatawan",
      "Antarmuka responsif dan ramah perangkat mobile (mobile-first design)",
      "Katalog detail profil usaha, produk unggulan, dan kontak pelaku UMKM"
    ]
  },
  {
    id: "x-coffee",
    title: "Website Sistem Informasi Distribusi X Coffee",
    shortTitle: "Website Sistem Informasi Distribusi X Coffee",
    year: "2026",
    role: "Front-End Developer",
    category: "frontend",
    categoryLabel: "Front-End Web",
    color: "#fb923c",
    badge: "Kerja Praktik",
    thumbnail: xCoffeeThumb,
    description: "Mengembangkan antarmuka web berbasis React.js untuk sistem distribusi dan penjualan kopi dengan tiga role pengguna (Admin Outlet, Canvassing, dan Mitra). Berkolaborasi menggunakan GitHub, mengimplementasikan tampilan responsif dengan Bootstrap, serta membangun UI sebelum integrasi dengan backend.",
    technologies: ["React.js", "Bootstrap", "JavaScript", "GitHub", "REST API", "Responsive UI"],
    featured: true,
    highlights: [
      "Arsitektur antarmuka modular 3 role aktor: Admin Outlet, Canvassing Lapangan, dan Mitra Toko",
      "Penerapan responsive grid system Bootstrap terintegrasi React state",
      "Kolaborasi tim rapi menggunakan Git version control & pull requests di GitHub",
      "Slicing komponen visual dan alur pesanan sebelum integrasi backend endpoint"
    ]
  },
  {
    id: "blockchain-ijazah",
    title: "Sistem Informasi Penerbitan Ijazah & Transkrip Digital Berbasis Blockchain",
    shortTitle: "Sistem Informasi Penerbitan Ijazah & Transkrip Digital Berbasis Blockchain",
    year: "2026",
    role: "Quality Assurance",
    category: "qa",
    categoryLabel: "Quality Assurance",
    color: "#4ade80",
    badge: "Team Project",
    thumbnail: blockchainThumb,
    description: "Melakukan pengujian API menggunakan Postman dengan autentikasi JWT, menyusun test case, serta menjalankan unit, integration, dan system testing. Selain itu, mendokumentasikan hasil pengujian dan bug report untuk mendukung proses pengembangan sistem.",
    technologies: ["Postman", "JWT Auth", "API Testing", "Bug Reporting", "Test Cases", "Blockchain Verification"],
    featured: true,
    highlights: [
      "Pengujian menyeluruh koleksi API endpoint menggunakan Postman dengan autentikasi JWT Token",
      "Penyusunan dokumen Test Case komprehensif (Unit, Integration, dan System Testing)",
      "Pencatatan bug report detail dan tracking status resolusi isu kepada tim developer",
      "Validasi alur integritas verifikasi hash dokumen akademik digital"
    ]
  },
  {
    id: "kantin-digital-web",
    title: "Website Sistem Kantin Digital UIKA",
    shortTitle: "Website Sistem Kantin Digital UIKA",
    year: "2026",
    role: "Front-End Developer",
    category: "frontend",
    categoryLabel: "Front-End Web",
    color: "#38bdf8",
    badge: "Team Project",
    thumbnail: kantinwebThumb,
    description: "Mengembangkan website sistem kantin digital untuk mendukung proses pemesanan makanan dan pengelolaan kantin di lingkungan kampus. Membangun antarmuka yang responsif dengan React.js dan Tailwind CSS.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Order System", "Responsive Layout"],
    demo: "https://kekantin.vercel.app/",
    featured: true,
    highlights: [
      "Antarmuka pemesanan menu makanan & minuman kantin kampus yang efisien dan interaktif",
      "Tampilan dashboard pengelola stan kantin untuk manajemen ketersediaan menu",
      "Styling utility-first modern dan responsif menggunakan Tailwind CSS",
      "Alur pemesanan tanpa antre bagi civitas akademika Universitas Ibn Khaldun"
    ]
  },
  {
    id: "kantin-digital-mobile",
    title: "Aplikasi Mobile Kantin Digital UIKA",
    shortTitle: "Aplikasi Mobile Kantin Digital UIKA",
    year: "2026",
    role: "Mobile Developer",
    category: "mobile",
    categoryLabel: "Mobile App",
    color: "#c084fc",
    badge: "Android Studio",
    thumbnail: kantinmobThumb,
    description: "Mengembangkan aplikasi mobile kantin digital menggunakan Android Studio dengan fitur pemesanan makanan dan pengelolaan pesanan. Mengimplementasikan tampilan antarmuka berdasarkan rancangan UI yang telah dibuat.",
    technologies: ["Android Studio", "Java / Kotlin", "XML Layout", "Mobile UI", "Order Tracking"],
    featured: false,
    highlights: [
      "Pembuatan layout antarmuka aplikasi Android native presisi sesuai rancangan Figma",
      "Fitur pemilihan menu, keranjang pesanan, dan konfirmasi checkout pemesan",
      "Pengelolaan status antrean pesanan makanan secara visual",
      "Optimasi navigasi layar dan performa aplikasi di perangkat smartphone Android"
    ]
  },
  {
    id: "perpustakaan-digital",
    title: "UI/UX Perpustakaan Digital Teknik Informatika UIKA",
    shortTitle: "UI/UX Perpustakaan Digital Teknik Informatika UIKA",
    year: "2025",
    role: "UI/UX Designer",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    color: "#c084fc",
    badge: "Figma Prototype",
    thumbnail: rakinfoThumb,
    description: "Merancang tampilan website perpustakaan digital khusus mahasiswa Teknik Informatika UIKA, termasuk halaman pencarian buku, informasi koleksi, serta fitur peminjaman buku dengan mempertimbangkan kebutuhan pengguna.",
    technologies: ["Figma", "User Flow", "Design System", "Wireframing", "Interactive Prototype"],
    demo: "https://www.figma.com/proto/NGuwqhJv2oQa3hxGTWvYCz/RakInformatika?node-id=3-2&starting-point-node-id=3%3A2",
    featured: false,
    highlights: [
      "Riset kebutuhan mahasiswa dalam mencari referensi buku dan jurnal Teknik Informatika",
      "Perancangan user flow pencarian buku cepat dengan filter kategori & status ketersediaan",
      "Desain antarmuka peminjaman dan riwayat pengembalian buku yang intuitif",
      "Pembuatan high-fidelity prototype interaktif lengkap dengan design token terstandar"
    ]
  },
  {
    id: "tiket-event-festival",
    title: "UI/UX Aplikasi Pemesanan Tiket Event & Festival",
    shortTitle: "UI/UX Aplikasi Pemesanan Tiket Event & Festival",
    year: "2025",
    role: "UI/UX Designer",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    color: "#fb7185",
    badge: "Figma Mobile",
    thumbnail: tiketkuThumb,
    description: "Merancang tampilan dan user flow aplikasi mobile untuk pemesanan tiket event dan festival konser menggunakan Figma, dengan fokus pada kemudahan navigasi dan pengalaman pengguna.",
    technologies: ["Figma", "Mobile UI", "User Flow", "Prototyping", "Design System"],
    demo: "https://www.figma.com/proto/smjhsbtn5uxUdWXxJw9OlK/Tiket.Ku-_E-Commerce?node-id=29-254&starting-point-node-id=1%3A4",
    featured: false,
    highlights: [
      "Perancangan antarmuka eksplorasi festival musik & konser dengan visual yang estetik dan energik",
      "Alur pemesanan tiket ringkas: pemilihan kategori tiket, seating/section, dan metode pembayaran",
      "Penerapan micro-interactions dan feedback status e-ticket berbasis QR Code",
      "User testing untuk memastikan navigasi satu tangan yang nyaman di layar mobile"
    ]
  }
];
