// Mengambil elemen HTML berdasarkan ID
const judul = document.getElementById('judul');
const pesan = document.getElementById('pesan');
const tombolUbah = document.getElementById('tombolUbah');

// Menambahkan event listener saat tombol diklik
tombolUbah.addEventListener('click', () => {
    judul.innerText = 'Berhasil Diubah!';
    pesan.innerText = 'File JavaScript Anda telah bekerja dengan baik.';
    tombolUbah.style.backgroundColor = '#28a745';
    tombolUbah.innerText = 'Selesai';
});