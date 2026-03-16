/**
 * alarm.js
 * Alarm modülü.
 * dayjs ile anlık saat güncellenir ve alarm eşleşmesi kontrol edilir.
 */

const currTimeDisplay = document.getElementById('current-time');
const alarmTimeInput = document.getElementById('alarm-time-input');
const alarmAddBtn = document.getElementById('alarm-addBtn');
const alarmListUl = document.getElementById('alarm-list');

let alarms = []; // [{ time: "HH:MM", active: true }]

/** Ekrandaki saati günceller ve alarm kontrolü yapar */
function updateClock() {
    const now = dayjs();
    const timeStr = now.format('HH:mm:ss');
    const hmStr = now.format('HH:mm');
    currTimeDisplay.innerText = timeStr;

    // Saniye 00'da alarm eşleşmesini kontrol et
    if (now.second() === 0) {
        alarms.forEach(alarm => {
            if (alarm.active && alarm.time === hmStr) {
                alarm.active = false;
                playRingtone(`Saat ${alarm.time}!`);
                renderAlarms();
            }
        });
    }
}

/** Alarm listesini DOM'a yazar */
function renderAlarms() {
    alarmListUl.innerHTML = '';

    if (alarms.length === 0) {
        alarmListUl.innerHTML = '<li class="empty-list">Henüz alarm kurulmadı.</li>';
        return;
    }

    // Saate göre sırala
    alarms.sort((a, b) => a.time.localeCompare(b.time));

    alarms.forEach((alarm, i) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>⏰ ${alarm.time} ${alarm.active ? '' : '<em style="opacity:.5;font-size:.8em">(Çaldı)</em>'}</span>
            <button class="delete-alarm" onclick="deleteAlarm(${i})">Sil</button>
        `;
        alarmListUl.appendChild(li);
    });
}

/** Belirtilen indexteki alarmı siler */
function deleteAlarm(index) {
    alarms.splice(index, 1);
    renderAlarms();
}

alarmAddBtn.addEventListener('click', () => {
    const v = alarmTimeInput.value;
    if (!v) { alert('Lütfen bir saat seçin.'); return; }

    if (alarms.some(a => a.time === v && a.active)) {
        alert('Bu saate zaten bir alarm kurulu.');
        return;
    }

    alarms.push({ time: v, active: true });
    renderAlarms();
    alarmTimeInput.value = '';
});

/* Saati başlat */
setInterval(updateClock, 1000);
updateClock();
