/* Fungsi bantu kecil yang dipakai file lain */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const sleep = ms => new Promise(r => setTimeout(r, ms));

function toast(text) {
  const e = $('#toast');
  e.textContent = text;
  e.classList.add('on');
  setTimeout(() => e.classList.remove('on'), 3200);
}
