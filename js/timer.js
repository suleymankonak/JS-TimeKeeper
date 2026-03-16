/**
 * timer.js
 * Geri sayım zamanlayıcısı modülü.
 * dayjs.duration ile kalan süre kolayca yapılandırılır.
 */

let tInterval = null;
let tRunning = false;
let tTotalSecs = 0;   // Kalan saniye sayısı

/* DOM Elemanları */
const tInpHours = document.getElementById('t-input-hours');
const tInpMins = document.getElementById('t-input-minutes');
const tInpSecs = document.getElementById('t-input-seconds');
const tSetupDiv = document.getElementById('timer-setup');
const tRunDiv = document.getElementById('timer-running');
const tHours = document.getElementById('t-hours');
const tMinutes = document.getElementById('t-minutes');
const tSeconds = document.getElementById('t-seconds');
const tStartBtn = document.getElementById('t-startBtn');
const tStopBtn = document.getElementById('t-stopBtn');
const tResetBtn = document.getElementById('t-resetBtn');

/** Kalan süreyi ekrana yazar */
function renderTimer(totalSecs) {
    const dur = dayjs.duration(totalSecs, 'seconds');
    tHours.innerText = String(Math.floor(dur.asHours())).padStart(2, '0');
    tMinutes.innerText = String(dur.minutes()).padStart(2, '0');
    tSeconds.innerText = String(dur.seconds()).padStart(2, '0');
}

/** Her saniye çalışır; süre bitince zil çalar */
function tick() {
    if (tTotalSecs > 0) {
        tTotalSecs--;
        renderTimer(tTotalSecs);
    } else {
        clearInterval(tInterval);
        tRunning = false;
        tRunDiv.classList.add('paused');
        tStartBtn.classList.remove('hidden');
        tStopBtn.classList.add('hidden');
        tStartBtn.innerText = 'SÜRE BİTTİ';
        tStartBtn.disabled = true;
        playRingtone('Süre doldu!');
    }
}

tStartBtn.addEventListener('click', () => {
    if (tRunning) return;

    if (tTotalSecs === 0) {
        const h = parseInt(tInpHours.value) || 0;
        const m = parseInt(tInpMins.value) || 0;
        const s = parseInt(tInpSecs.value) || 0;
        tTotalSecs = dayjs.duration({ hours: h, minutes: m, seconds: s }).asSeconds();
    }

    if (tTotalSecs > 0) {
        tSetupDiv.classList.add('hidden');
        tRunDiv.classList.remove('hidden', 'paused');
        renderTimer(tTotalSecs);
        tInterval = setInterval(tick, 1000);
        tRunning = true;
        tStartBtn.classList.add('hidden');
        tStopBtn.classList.remove('hidden');
    }
});

tStopBtn.addEventListener('click', () => {
    if (!tRunning) return;
    clearInterval(tInterval);
    tRunning = false;
    tRunDiv.classList.add('paused');
    tStartBtn.classList.remove('hidden');
    tStartBtn.innerText = 'Kaldığı Yerden Devam Et';
    tStopBtn.classList.add('hidden');
});

tResetBtn.addEventListener('click', () => {
    clearInterval(tInterval);
    tRunning = false;
    tTotalSecs = 0;
    tSetupDiv.classList.remove('hidden');
    tRunDiv.classList.add('hidden', 'paused');
    tStartBtn.classList.remove('hidden');
    tStartBtn.innerText = 'Başlat';
    tStartBtn.disabled = false;
    tStopBtn.classList.add('hidden');
});
