let skor = 0;

function tendang(arahPemain) {
    // Arah kiper secara acak
    const pilihanArah = ['kiri', 'tengah', 'kanan'];
    const arahKiper = pilihanArah[Math.floor(Math.random() * pilihanArah.length)];

    const gawangEl = document.getElementById('gawang');
    const statusEl = document.getElementById('status');
    const skorEl = document.getElementById('skor');

    // Menampilkan posisi kiper melompat dengan emoji
    if (arahKiper === 'kiri') {
        gawangEl.innerText = '🧤 🥅';
    } else if (arahKiper === 'kanan') {
        gawangEl.innerText = '🥅 🧤';
    } else {
        gawangEl.innerText = '🥅 🧤 🥅';
    }

    // Cek apakah tendangan masuk atau ditepis
    if (arahPemain !== arahKiper) {
        skor++;
        skorEl.innerText = skor;
        statusEl.innerText = `GOALLL! 🎉 (Kiper lompat ke ${arahKiper})`;
        statusEl.style.color = '#74c69d';
    } else {
        statusEl.innerText = `TETEPIS! ❌ (Kiper juga ke ${arahKiper})`;
        statusEl.style.color = '#ff4d4d';
    }
}