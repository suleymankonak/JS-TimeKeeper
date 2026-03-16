/**
 * audio.js
 * Alarm zil sesini ve modal bildirimi yönetir.
 * playRingtone(msg) → diğer modüller tarafından çağrılabilir.
 */

const alarmSound = document.getElementById('alarmSound');
const alarmModal = document.getElementById('alarm-modal');
const alarmMsgText = document.getElementById('alarm-msg');
const alarmStopBtn = document.getElementById('alarm-stopSoundBtn');

/**
 * Zil sesini çalar ve bildirimi gösterir.
 * @param {string} msg - Modalda gösterilecek mesaj
 */
function playRingtone(msg = 'Süre doldu!') {
    alarmSound.loop = true;
    alarmSound.play().catch(err => console.warn('Ses çalınamadı:', err));
    alarmMsgText.innerText = msg;
    alarmModal.classList.remove('hidden');
}

alarmStopBtn.addEventListener('click', () => {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmModal.classList.add('hidden');
});
