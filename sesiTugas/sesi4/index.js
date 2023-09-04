let name = "Yabsir";
let age = 20;
let money = 600000;
let total;

if (!name) {
    console.log("Anda Tidak Boleh Masuk");
} else {
    console.log("Hai " + name);
}

let harga, minuman;
if (age < 17) {
    console.log("Anda hanya bisa memesan Juice");
    minuman = "Juice";
    harga = 50000;
} else {
    console.log("Anda bisa memesan Anggur");
    minuman = "Anggur";
    harga = 300000;
}

if (money < harga) {
    console.log("Uang anda tidak cukup...");
}
    total = money - harga;
    console.log("Sisa Uang Anda " + total);