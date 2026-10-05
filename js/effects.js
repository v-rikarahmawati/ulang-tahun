/* Efek visual: bintang, awan, confetti, hati melayang */
const sky = $('#sky'), fx = $('#fx');

function stars(n, box = sky) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement('i');
    s.className = 'star';
    const z = Math.random() * 2.4 + .8;
    s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${z}px;height:${z}px;--d:${2+Math.random()*3}s;--l:${Math.random()*4}s`;
    box.appendChild(s);
  }
}

function makeClouds() {
  // [posisi atas %, lebar, tinggi, durasi detik, jeda detik]
  [[8,260,70,95,0],[34,320,80,130,-40],[58,220,60,110,-70],[76,280,70,150,-20]].forEach(([t,w,h,s,d]) => {
    const c = document.createElement('div');
    c.className = 'cloud';
    c.style.cssText = `top:${t}%;--w:${w}px;--h:${h}px;--s:${s}s;--dl:${d}s`;
    sky.appendChild(c);
  });
}

function confetti(n = 30, emojis = ['✨','💗','🎉','⭐','🌸','💜']) {
  for (let i = 0; i < n; i++) {
    const c = document.createElement('span');
    c.className = 'conf';
    c.textContent = emojis[i % emojis.length];
    c.style.cssText = `left:${Math.random()*100}%;--z:${10+Math.random()*12}px;--t:${3+Math.random()*3}s;--x:${(Math.random()-.5)*120}px;--r:${Math.random()*720}deg;animation-delay:${Math.random()*.8}s`;
    fx.appendChild(c);
    setTimeout(() => c.remove(), 7500);
  }
}

let heartsOn = false;
function startHearts() { heartsOn = true; hearts(); }
function hearts() {
  if (!heartsOn) return;
  const h = document.createElement('span');
  h.className = 'heart';
  h.textContent = ['💗','💜','🤍'][Math.random() * 3 | 0];
  h.style.cssText = `left:${Math.random()*100}%;font-size:${10+Math.random()*10}px;--t:${8+Math.random()*5}s;--x:${(Math.random()-.5)*80}px`;
  fx.appendChild(h);
  setTimeout(() => h.remove(), 13000);
  setTimeout(hearts, 1800);
}

// jalankan saat halaman dibuka
stars(70);
makeClouds();
