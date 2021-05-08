/* di ketahui usia ayah dan anak saat ini
 buatlah sebuah fungsi untuk menghitung  berapa tahun yang lalu kah usia ayah 2x usia anaknya

 x tahun yang lalu , usia ayah 2x usia anaknya , jika usia ayah saat ini a tahun , dan usia anak saat ini b tahun
 ayah - x tahun = 2 anak
55 - xtahun = 2 x 3o
55 - xtahun = 60
- x tahun = 60 - 55
-xtahun = 5

90 - x tahun = 2 x 50
90 - x tahun = 100
- x tahun = 100 - 90 
- x tahun = 10
*/

function duaKaliUsia(ayah, anak) {
  // your code here
  let numberAge = 0;
  return (numberAge = 2 * anak - ayah);
}

console.log(duaKaliUsia(55, 30)); //5
console.log(duaKaliUsia(27, 17)); //7
console.log(duaKaliUsia(90, 50)); //10
console.log(duaKaliUsia(65, 40)); //15
console.log(duaKaliUsia(108, 76)); //44
