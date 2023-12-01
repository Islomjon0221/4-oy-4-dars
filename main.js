let pul = 1000000//+prompt("Pulni kiriting...");
let dollar;
let euro;
let xarajat;
let javob;

dollar = 750 * 11000.34;
euro = 120 * 12354.03;

xarajat = pul-(dollar + euro);

if (xarajat > 0) {
    javob = `Oq yo'l, Alisher`;
} else {
    javob = `Alisher, ozgina sabr qilish kerak bo'lar ekan`;
}
console.log(javob);