// Mock data for TK PEMBANGUNAN school website

export const schoolInfo = {
  name: "TK PEMBANGUNAN",
  motto: "Membangun Generasi Cerdas dan Berakhlak Mulia",
  vision: "Menjadi lembaga pendidikan anak usia dini terdepan yang mengembangkan potensi anak secara optimal",
  mission: [
    "Memberikan pendidikan berkualitas dengan pendekatan pembelajaran yang menyenangkan",
    "Mengembangkan kreativitas dan karakter anak melalui berbagai kegiatan edukatif",
    "Menciptakan lingkungan belajar yang aman, nyaman, dan ramah anak",
    "Menjalin kerjasama yang baik dengan orang tua dalam mendidik anak"
  ]
};

export const programs = [
  {
    id: 1,
    name: "Program PAUD",
    description: "Program pembelajaran untuk anak usia 3-4 tahun dengan fokus pada pengembangan motorik dan sosial",
    age: "3-4 tahun",
    duration: "3 jam/hari"
  },
  {
    id: 2,
    name: "Kelas Kreatif",
    description: "Program pengembangan kreativitas melalui seni, musik, dan eksplorasi",
    age: "4-5 tahun", 
    duration: "4 jam/hari"
  },
  {
    id: 3,
    name: "Seni & Musik",
    description: "Program khusus untuk mengembangkan bakat seni dan musik anak",
    age: "3-6 tahun",
    duration: "2 jam/hari"
  }
];

export const staff = [
  {
    id: 1,
    name: "Ibu Siti Nurhasanah, S.Pd",
    position: "Kepala Sekolah", 
    experience: "15 tahun",
    education: "S1 Pendidikan Anak Usia Dini"
  },
  {
    id: 2,
    name: "Ibu Maya Sari, S.Pd",
    position: "Guru Kelas A",
    experience: "8 tahun",
    education: "S1 Pendidikan Guru PAUD"
  },
  {
    id: 3,
    name: "Ibu Rina Wati, S.Pd", 
    position: "Guru Kelas B",
    experience: "6 tahun",
    education: "S1 Psikologi Anak"
  }
];

export const news = [
  {
    id: 1,
    title: "Perayaan Hari Kartini 2024",
    date: "2024-04-21",
    summary: "Siswa-siswi TK Pembangunan merayakan Hari Kartini dengan berbagai kegiatan edukatif dan mengenakan pakaian adat.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400",
    content: "Dalam rangka memperingati Hari Kartini, TK Pembangunan mengadakan berbagai kegiatan menarik..."
  },
  {
    id: 2,
    title: "Kunjungan ke Kebun Binatang",
    date: "2024-03-15",
    summary: "Siswa diajak berkunjung ke kebun binatang untuk mengenal berbagai jenis hewan dan habitatnya.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
    content: "Field trip ke kebun binatang menjadi momen pembelajaran yang sangat berharga..."
  },
  {
    id: 3,
    title: "Lomba Mewarnai Tingkat Kecamatan",
    date: "2024-02-28",
    summary: "3 siswa TK Pembangunan meraih juara dalam lomba mewarnai tingkat kecamatan.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
    content: "Prestasi membanggakan diraih siswa-siswi TK Pembangunan dalam lomba mewarnai..."
  }
];

export const gallery = [
  {
    id: 1,
    title: "Kegiatan Pembelajaran",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600"
  },
  {
    id: 2, 
    title: "Bermain di Playground",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600"
  },
  {
    id: 3,
    title: "Kegiatan Seni dan Kreativitas", 
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600"
  },
  {
    id: 4,
    title: "Upacara Bendera",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600"
  },
  {
    id: 5,
    title: "Kegiatan Olahraga",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600"
  },
  {
    id: 6,
    title: "Pembelajaran di Kelas",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Bapak Ahmad Rizki",
    child: "Aira (5 tahun)",
    text: "TK Pembangunan sangat membantu perkembangan anak saya. Guru-gurunya sabar dan metode pembelajaran yang menyenangkan.",
    rating: 5
  },
  {
    id: 2,
    name: "Ibu Sari Dewi",
    child: "Farhan (4 tahun)", 
    text: "Anak saya jadi lebih percaya diri dan mandiri setelah bersekolah di TK Pembangunan. Recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Bapak Joko Susilo",
    child: "Kania (6 tahun)",
    text: "Fasilitas lengkap dan lingkungan yang aman membuat saya tenang menitipkan anak di sini.",
    rating: 5
  }
];

export const contact = {
  address: "Jl. Pembangunan No. 123, Kelurahan Sejahtera, Jakarta Selatan 12345",
  phone: "(021) 7654-3210",
  email: "info@tkpembangunan.sch.id",
  website: "www.tkpembangunan.sch.id",
  hours: {
    weekdays: "07:00 - 16:00 WIB",
    saturday: "07:00 - 12:00 WIB", 
    sunday: "Tutup"
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
};