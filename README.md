# 🌙 Birthday Website untuk Siti Aisyah

## Struktur
```
siti-aisyah-birthday/
├── index.html          ← kerangka halaman (isi/struktur)
├── css/
│   └── style.css       ← semua tampilan: warna, animasi, ukuran
├── js/
│   ├── config.js       ← ✏️ EDIT INI: nama file foto/lagu + semua tulisan ucapan
│   ├── utils.js        ← fungsi bantu kecil
│   ├── effects.js      ← bintang, awan, confetti, hati melayang
│   ├── media.js        ← logika foto & musik
│   ├── scroll.js       ← auto-scroll halus
│   └── story.js        ← alur: buka amplop → ketik ucapan → gallery → penutup
└── assets/
    ├── images/         ← 📷 taruh foto di sini
    └── audio/          ← 🎵 taruh lagu di sini
```

## Cara isi
1. Foto → `assets/images/` dengan nama: `foto-utama.jpg`, `galeri-1.jpg` … `galeri-4.jpg`
2. Lagu → `assets/audio/not-a-lot-just-forever.mp3`
3. Mau ganti nama file atau isi ucapan? Buka `js/config.js`.
4. Buka `index.html` di browser (klik dua kali), atau upload seluruh folder ke Netlify / GitHub Pages / hosting lain.

Foto atau lagu belum ada? Tidak apa-apa: frame foto menampilkan "tap to add photo" dan tombol 🎵 akan meminta file lagu.
