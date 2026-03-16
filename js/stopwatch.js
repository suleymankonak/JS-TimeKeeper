/**
 * stopwatch.js
 * Kronometre modülü.
 * dayjs + duration eklentisi kullanarak saat/dakika/saniye/millisaniye hesaplar.
 */

let swInterval = null;
let swRunning = false;
let swElapsed = 0;       // ms cinsinden geçen süre
let swStartedAt = 0;      // Date.now() anlık başlangıç

/* DOM Elemanları */
const swHours = document.getElementById('sw-hours');
const swMinutes = document.getElementById('sw-minutes');
const swSeconds = document.getElementById('sw-seconds');
const swMs = document.getElementById('sw-milliseconds');
const swDisplay = document.querySelector('#stopwatch-tab .time-display');
const swStartBtn = document.getElementById('sw-startBtn');
const swStopBtn = document.getElementById('sw-stopBtn');
const swResetBtn = document.getElementById('sw-resetBtn');

/** Ekranı günceller */
function renderStopwatch() {
    const dur = dayjs.duration(Date.now() - swStartedAt + swElapsed);
    swHours.innerText = String(Math.floor(dur.asHours())).padStart(2, '0');
    swMinutes.innerText = String(dur.minutes()).padStart(2, '0');
    swSeconds.innerText = String(dur.seconds()).padStart(2, '0');
    swMs.innerText = '.' + String(Math.floor(dur.milliseconds() / 10)).padStart(2, '0');
}

swStartBtn.addEventListener('click', () => {
    if (swRunning) return;
    swStartedAt = Date.now();
    swInterval = setInterval(renderStopwatch, 10);
    swRunning = true;
    swDisplay.classList.remove('paused');
    swStartBtn.innerText = 'Devam Et';
    swStartBtn.style.opacity = '0.5';
    swStopBtn.disabled = false;
    swStopBtn.style.opacity = '1';
});

swStopBtn.addEventListener('click', () => {
    if (!swRunning) return;
    clearInterval(swInterval);
    swElapsed += Date.now() - swStartedAt;
    swRunning = false;
    swDisplay.classList.add('paused');
    swStartBtn.style.opacity = '1';
});

swResetBtn.addEventListener('click', () => {
    clearInterval(swInterval);
    swRunning = false;
    swElapsed = 0;
    swHours.innerText = '00';
    swMinutes.innerText = '00';
    swSeconds.innerText = '00';
    swMs.innerText = '.00';
    swDisplay.classList.add('paused');
    swStartBtn.innerText = 'Başlat';
    swStartBtn.style.opacity = '1';
});

/* Başlangıçta duraklı görünüm */
swDisplay.classList.add('paused');
