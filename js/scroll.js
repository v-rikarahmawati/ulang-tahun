/* Auto-scroll halus mengikuti tulisan yang sedang diketik */
let auto = true, goal = 0, pos = 0;
const autoBtn = $('#auto');

function setAuto(on) {
  auto = on;
  autoBtn.classList.toggle('off', !on);
  if (on) pos = scrollY;
}
autoBtn.onclick = () => {
  setAuto(!auto);
  toast(auto ? 'Auto-scroll on ⇣' : 'Auto-scroll off — scroll sendiri ya ✨');
};

// kalau pengunjung scroll sendiri, auto-scroll berhenti
['wheel', 'touchstart', 'keydown'].forEach(ev => addEventListener(ev, () => {
  if (auto && $('#main').classList.contains('show')) {
    setAuto(false);
    toast('Kamu scroll sendiri 💫 ketuk ⇣ untuk auto-scroll lagi');
  }
}, { passive: true }));

(function loop() {
  if (auto) {
    const d = goal - scrollY;
    if (d > 1) { pos = scrollY + Math.max(.6, d * .04); scrollTo(0, pos); }
  }
  requestAnimationFrame(loop);
})();

// arahkan scroll agar elemen berada di sekitar posisi k dari tinggi layar
function follow(el, k = .68) {
  goal = Math.max(0, el.getBoundingClientRect().bottom + scrollY - innerHeight * k);
}
