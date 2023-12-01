// Inputkan untuk No Handphone/WhatsApp
const noPospay = document.getElementById("no_pospay");
// Menambahkan event listener untuk memvalidasi input
noPospay.addEventListener("input", function() {
  // Menghapus karakter selain angka dari input
  const sanitizedInput = noPospay.value.replace(/[^0-9]/g, '');
  // Membatasi panjang input menjadi maksimal 13 angka
  if (sanitizedInput.length > 13) {
    noPospay.value = sanitizedInput.slice(0, 13);
  } else {
    noPospay.value = sanitizedInput;
  }
});