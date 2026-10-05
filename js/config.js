/* =====================================================================
   ✏️  FILE INI YANG PERLU KAMU EDIT  (foto, lagu, dan isi tulisan)
   Taruh file aset di folder:
     assets/images/  → foto
     assets/audio/   → lagu
   Lalu pastikan namanya sama dengan yang tertulis di bawah.
   ===================================================================== */
const CONFIG = {

  // 🎵 Lagu "Not a Lot, Just Forever"
  music: "assets/audio/not-a-lot-just-forever.mp3",

  // 📷 Foto utama (muncul di amplop & halaman utama)
  mainPhoto: "assets/images/foto-utama.jpg",

  // 📸 Gallery polaroid (4 foto + tulisan kecil di bawahnya)
  gallery: [
    { src: "assets/images/galeri-1.jpg", caption: "always smiling" },
    { src: "assets/images/galeri-2.jpg", caption: "so pretty" },
    { src: "assets/images/galeri-3.jpg", caption: "my favorite" },
    { src: "assets/images/galeri-4.jpg", caption: "forever ✨" }
  ],

  // 💌 Ucapan panjang (diketik satu per satu, tiap baris = 1 paragraf)
  letter: [
    "Tonight, the stars are shining a little brighter just for you…",
    "Hari ini langit seolah ikut merayakan, karena hari ini adalah hari lahir seseorang yang sangat spesial: kamu, Siti Aisyah.",
    "Terima kasih sudah hadir di dunia ini. Kehadiranmu membawa banyak hal indah — senyum yang menenangkan, tawa yang menular, dan kebaikan hati yang selalu terasa, bahkan di hari-hari yang paling biasa.",
    "Semoga di umur yang baru ini kamu selalu dikelilingi orang-orang yang menyayangimu, diberi kesehatan, rezeki yang lancar, dan hati yang selalu tenang.",
    "Semoga setiap doa yang diam-diam kamu bisikkan pada langit malam, satu per satu menemukan jalannya untuk menjadi nyata. 🌙"
  ],

  // 💗 Bagian "A Little Message For You"
  note: [
    "Aku tahu kadang kamu lelah, dan kadang merasa tidak cukup. Tapi percayalah, kamu jauh lebih berharga dan lebih kuat dari yang kamu kira.",
    "Kamu pantas bahagia, pantas dicintai, dan pantas mendapatkan semua hal baik. Jangan lupa istirahat, jangan lupa tersenyum, dan jangan lupa bahwa ada yang selalu bangga padamu. 💗",
    "Selamat ulang tahun, ya. Semoga hari ini selembut cahaya bulan. 🎂"
  ],

  // 🌙 Penutup
  endingTitle: "Happy Birthday, Siti Aisyah 🌙💗",
  endingLines: [
    "May your days always be as beautiful as this night sky.",
    "May all your dreams come true.",
    "Keep smiling, stay happy, and always remember how special you are. ✨"
  ],

  // ⏱️ Kecepatan mengetik (milidetik per huruf; makin besar makin lambat)
  typingSpeed: 48
  ,
  // ✍️ Penulis / kredit yang akan muncul menggantung di surat dan penutup
  author: "by Rika Rahmawati"
};
