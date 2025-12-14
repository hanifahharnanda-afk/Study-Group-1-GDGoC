const input = require('prompt-sync')({sigint: true});

const Nama = input("Masukkan nama: ");
const Umur = Number(input("Masukkan umur: "));

if (Umur < 21) {
    console.log(`Maaf ${Nama}, umur kamu kurang ${21 - Umur} tahun lagi`);
} else {
   const Uang = Number(input("Masukkan jumlah uang: "));
}