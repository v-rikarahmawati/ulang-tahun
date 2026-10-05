/* Alur cerita: buka amplop → ketik ucapan → gallery → penutup */

async function typeInto(host, text, cls, speed = CONFIG.typingSpeed) {
  const p = document.createElement('p');
  if (cls) p.className = cls;
  host.appendChild(p);
  p.classList.add('typing');
  let buf = '';
  for (const ch of text) {
    if (window.SKIP) { p.textContent = text; break; }
    buf += ch;
    p.textContent = buf;
    follow(p);
    await sleep(/[.,!?…—]/.test(ch) ? speed * 6 : speed);   // jeda lebih lama di tanda baca
  }
  p.classList.remove('typing');
  await sleep(700);
  return p;
}

function reveal(el) {
  el.classList.add('in');
  follow(el, .3);
  return sleep(1800);
}

async function story() {
  await sleep(2200);

  // reset skip flag and show skip button
  window.SKIP = false;
  const skipBtn = $('#skipTyping');
  if (skipBtn) skipBtn.onclick = () => { window.SKIP = true; };

  const letter = $('#L');
  for (const t of CONFIG.letter) await typeInto(letter, t);

  // hanging author in letter
  if (CONFIG.author) {
    const a = document.createElement('div');
    a.className = 'credit-hang';
    a.textContent = CONFIG.author;
    letter.appendChild(a);
    await reveal(a);
  }

  await sleep(600);
  await reveal($('#noteS'));
  const note = $('#N');
  for (const t of CONFIG.note) await typeInto(note, t);
  confetti(40);

  await sleep(900);
  await reveal($('#galS'));
  await sleep(3500);

  // penutup
  stars(60);
  const end = $('#endS');
  end.classList.add('in');
  follow(end, .5);
  await sleep(1200);

  const title = $('#E1');
  title.classList.add('typing');
  let buf = '';
  for (const ch of CONFIG.endingTitle) {
    if (window.SKIP) { title.textContent = CONFIG.endingTitle; break; }
    buf += ch; title.textContent = buf; follow(title, .55); await sleep(80);
  }
  title.classList.remove('typing');
  confetti(50);
  stars(120);

  for (const t of CONFIG.endingLines) await typeInto($('#E2'), t, '', 45);
  // hanging author in ending area
  if (CONFIG.author) {
    const a2 = document.createElement('div');
    a2.className = 'credit-hang';
    a2.textContent = CONFIG.author;
    $('#E2').appendChild(a2);
    await reveal(a2);
  }
  confetti(60);

  // hide skip button after story ends
  const skipBtn2 = $('#skipTyping');
  if (skipBtn2) skipBtn2.style.display = 'none';
}

// tombol "Open Me"
$('#openBtn').onclick = async () => {
  $('#openBtn').disabled = true;
  const intro = $('#intro');
  intro.classList.add('open');
  if (audio.getAttribute('src')) audio.play().catch(() => {});
  confetti(26);
  await sleep(1300);
  confetti(30);
  await sleep(900);

  intro.classList.add('out');
  $('#main').classList.add('show');
  $('#ctrls').classList.add('show');
  setAuto(true);
  document.body.classList.remove('lock');
  scrollTo(0, 0);
  startHearts();

  if (!audio.getAttribute('src')) {
    setTimeout(() => toast('Ketuk 🎵 untuk memilih lagu "Not a Lot, Just Forever"'), 3500);
  }
  await sleep(1600);
  intro.style.display = 'none';
  story();
};
