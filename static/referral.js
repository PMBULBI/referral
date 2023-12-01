const userId = document.getElementById('userid');
const namaLengkap = document.getElementById('nama_lengkap');
const email = document.getElementById('email');
const nomorRekPospay = document.getElementById('no_pospay');

// Fungsi untuk validasi email regex
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}