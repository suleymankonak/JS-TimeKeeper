# ⏱️ Zaman Araçları

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Day.js](https://img.shields.io/badge/Day.js-FF5F4C?style=for-the-badge&logo=javascript&logoColor=white)

**Kronometre · Zamanlayıcı · Alarm** — tek bir şık arayüzde.

[🚀 Canlıya Bak](#) &nbsp;|&nbsp; [📁 Klasör Yapısı](#-klasör-yapısı) &nbsp;|&nbsp; [⚙️ Kurulum](#️-kurulum)

</div>

---

## ✨ Özellikler

| Modül | Özellik |
|---|---|
| ⏱ **Kronometre** | Başlat / Durdur / Sıfırla, milisaniye hassasiyeti |
| ⏳ **Zamanlayıcı** | Saat·Dakika·Saniye girişi, geri sayım, zil bildirimi |
| 🔔 **Alarm** | Birden fazla alarm kurma, sıralı liste, çalıştığında görsel bildirim |
| 🎨 **UI / UX** | Glassmorphism kart, smooth animasyonlar, tam responsive |
| 🔊 **Ses & Modal** | Alarm çalınca titreyen popup + sesi susturma butonu |

---

## 📁 Klasör Yapısı

```
Sure-Sayaci/
│
├── index.html          # Ana HTML, tüm sekme yapısı burada
├── style.css           # Tasarım: dark theme, glassmorphism, animasyonlar
│
└── js/
    ├── navigation.js   # Sekme (tab) geçiş mantığı
    ├── audio.js        # Ses çalma & alarm modal bildirimi
    ├── stopwatch.js    # Kronometre — dayjs.duration ile hesaplama
    ├── timer.js        # Geri sayım zamanlayıcısı — dayjs.duration ile
    └── alarm.js        # Alarm kurma, listeleme ve kontrol — dayjs ile
```

> Her JS dosyası **tek bir sorumluluğa** sahip olacak şekilde tasarlandı  
> (Single Responsibility Principle).

---

## 🧩 Modül Açıklamaları

### `js/navigation.js`
Üst sağdaki sekme butonlarını dinler. Aktif sekmeyi `.active-tab` class'ı ile gösterir, diğerlerini gizler.

### `js/audio.js`
`playRingtone(msg)` fonksiyonunu tanımlar. Alarm sesi döngüsünü başlatır ve bildirim modalını açar. "Sustur" butonu her yerden sesi keser.

### `js/stopwatch.js`
`dayjs.duration()` kullanarak `Date.now()` farkından saat / dakika / saniye / ms türetir. Duraklatıldığında geçen süre biriktirilir, devam edildiğinde üstüne eklenir.

### `js/timer.js`
Kullanıcının girdiği değerleri `dayjs.duration({ hours, minutes, seconds }).asSeconds()` ile toplam saniyeye çevirir. Her saniye `tick()` ile azaltır, sıfırlandığında `playRingtone()` çağırır.

### `js/alarm.js`
`dayjs()` ile anlık saati `HH:mm` formatında alır. Her saniye alarm listesini tarar; eşleşme bulursa `playRingtone()` tetikler ve alarmı "çaldı" olarak işaretler.

---

## ⚙️ Kurulum

Projeyi klonla ve tarayıcıda aç — herhangi bir build adımı gerekmez!

```bash
git clone https://github.com/suleymankonak/Sure-Sayaci.git
cd Sure-Sayaci
# index.html dosyasını çift tıkla ya da bir canlı sunucu kullan
```

> **Live Server** (VS Code) önerilir; tarayıcı doğrudan açıldığında ses otomatik oynatma kısıtlamalarına takılabilir.

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Kullanım Amacı |
|---|---|
| **HTML5** | Semantik yapı, zaman & ses elementleri |
| **CSS3** | Glassmorphism, keyframe animasyonlar, CSS değişkenleri |
| **Vanilla JS (ES6+)** | Modüler mantık, DOM yönetimi |
| **[Day.js](https://day.js.org/)** | Hafif (2 kB), hızlı tarih/süre kütüphanesi — `duration` eklentisi ile |
| **Hesaplamalar ve Renk Fontları Yapay Zeka Yardımı İle Kodlandı** |Kapsamlı karmaşık yapılardan kaçınmak ve döneme uygun bir tasarım hazırlamak amacıyla|
---

## 📸 Ekran Görüntüleri

> *(Ekran görüntüleri eklemek için `assets/` klasörüne görselleri ekleyin)*

---

## 📄 Lisans

MIT — dilediğiniz gibi kullanabilir, değiştirebilirsiniz.

---

<div align="center">
  <sub>Made with ❤️ by <a href="https://github.com/suleymankonak">suleymankonak</a></sub>
</div>
