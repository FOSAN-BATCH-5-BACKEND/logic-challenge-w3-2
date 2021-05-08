/* Anda adalah seorang sopir bus. Anda menurunkan dan menerima penumpang pada setiap halte.Di asumsikan dalam sebuah array, berisi beberapa halte, dan pada setiap halte berisi 2 angka, angka yang pertama adalah jumlah penumpang masuk, angka kedua adalah jumlah penumpang yang turun. buatlah sebuah fungsi untuk menghitung sisa penumpang yang ada di dalam bus.
 */

let jumlah = function (halte) {
  // Good Luck!
  let arrayTotal = [];
  for (let i = 0; i < halte.length; i++) {
    let hasil = 0;
    for (let j = 0; j < halte[i].length; j++) {
      hasil = halte[i][0] - halte[i][1];
    }
    arrayTotal.push(hasil);
  }
  let total = 0;
  for (let k = 0; k < arrayTotal.length; k++) {
    total += arrayTotal[k];
  }
  return total;
};

console.log(
  jumlah([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); //5
console.log(
  jumlah([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
); //17
console.log(
  jumlah([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
); //21
