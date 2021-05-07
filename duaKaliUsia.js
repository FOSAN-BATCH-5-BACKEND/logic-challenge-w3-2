/* di ketahui usia ayah dan anak saat ini
 buatlah sebuah fungsi untuk menghitung  berapa tahun yang lalu kah usia ayah 2x usia anaknya

*/

function duaKaliUsia(ayah, anak) {
    //1. mencari selisih perbandingan usia anak dan ayah pada saat usia ayah 2x dari usia anaknya
    //2. umur anak 1 : 2 dari umur ayah
    //3. cari selisih tahun dari perbandingan dari umur sekarang dengan umur beberapa tahun yang lalu
    //4. misalnya umur anak sekarang 30 thn dan anak 55 tahun & perbandingan 1 : 2
    //5. umur anak ayah dan umur anak diibandingkan 1 : 2 dengan perkalian terbalik untuk mengetahuiselisih tahun nya
    //6. 30 / 55 = 1/2  => 30 * 2 - 55 * 1 => 60 - 55 = sehingga selisihnya adalah 5 tahun

  let selisih = [];
  let umur = [];
  // for (let i = 0; i < ayah.length; i++) {
  //   for (let j = 0; j < anak[i].length; j++) {
      // umurAnak += anak([i][j] * 2);
      selisih = (anak * 2) - ayah;
      umur.push(selisih);
    return umur;
}


console.log(duaKaliUsia(55,30)) //5 => 5 tahun yang lalu usia anak 25 tahun dan usia ayahnya 50 tahun
console.log(duaKaliUsia(27,17)) //7 
console.log(duaKaliUsia(90,50)) //10
console.log(duaKaliUsia(65,40)) //15
console.log(duaKaliUsia(108,76)) //44
