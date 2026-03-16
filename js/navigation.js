/**
 * navigation.js
 * Tab geçişi mantığını yönetir.
 * Aktif butonu ve gösterilen kartı günceller.
 */

const navBtns = document.querySelectorAll('.nav-btn');
const timerCards = document.querySelectorAll('.timer-card');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        timerCards.forEach(c => c.classList.remove('active-tab'));

        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active-tab');
    });
});
