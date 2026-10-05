/* Foto & musik. Nama file diatur di js/config.js */

// ---------- FOTO ----------
const fileImg = $('#fImg');
let pickTarget = null;

function showPhoto(el, src) {
  el.style.backgroundImage = `url("${src}")`;
  el.classList.add('has');
}
// Pasang foto hanya kalau file-nya benar-benar ada
function loadPhoto(els, src) {
  if (!src) return;
  const img = new Image();
  img.onload = () => els.forEach(el => showPhoto(el, src));
  img.src = src;
}

loadPhoto($$('.ph[data-main]'), CONFIG.mainPhoto);
$$('.gal .pol').forEach((pol, i) => {
  const item = CONFIG.gallery[i];
  if (!item) return;
  pol.dataset.c = item.caption || '';
  loadPhoto([pol.querySelector('.ph')], item.src);
});

// Cadangan: ketuk frame untuk memilih foto dari perangkat
$$('.ph').forEach(el => el.addEventListener('click', e => {
  e.stopPropagation();
  pickTarget = el;
  fileImg.click();
}));
fileImg.onchange = () => {
  const f = fileImg.files[0];
  if (!f || !pickTarget) return;
  const r = new FileReader();
  r.onload = () => {
    const els = pickTarget.hasAttribute('data-main') ? $$('.ph[data-main]') : [pickTarget];
    els.forEach(x => showPhoto(x, r.result));
  };
  r.readAsDataURL(f);
  fileImg.value = '';
};

// ---------- MUSIK ----------
const audio = $('#audio'), musicBtn = $('#music');
if (CONFIG.music) audio.src = CONFIG.music;
// kalau file lagu tidak ditemukan, kosongkan supaya tombol 🎵 menawarkan pilih file
audio.onerror = () => { audio.removeAttribute('src'); audio.load(); };
audio.onplay = audio.onpause = () => musicBtn.classList.toggle('playing', !audio.paused);

musicBtn.onclick = () => {
  if (!audio.getAttribute('src')) { $('#fAud').click(); return; }
  audio.paused ? audio.play().catch(() => {}) : audio.pause();
};
$('#fAud').onchange = e => {
  const f = e.target.files[0];
  if (!f) return;
  audio.src = URL.createObjectURL(f);
  audio.play().catch(() => {});
};
