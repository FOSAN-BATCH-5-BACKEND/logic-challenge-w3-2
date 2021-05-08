/*
INSTRUKSI
=========
Terdapat sebuah array yang berisi berbagai macam data.
Isikanlah function dataKaryawan yang akan mengembalikan data tersebut menjadi sebuah biodata perusahaan sederhana.
Level Pertama untuk nama Perusahaan
Level Kedua untuk nama Divisi
Level Ketiga untuk data Karyawan seperti nama, umur dan status
Untuk status apabila true maka "menikah" apabila false berarti "single"

contoh:
Input: [
    ["MIBLabs", ["bhagas", 20, true], ["adhit", 19, false], ["puka", 23, false], "duskiTeam", ["rian", 21, false], ["rama", 23, true], ["rijal", 22, false]],
]
Output: "Divisi: duskiTeam
        Nama: bhagas
        Umur: 20
        Status: menikah
        Nama: adhit
        Umur: 19
        Status: single
        Nama: puka
        Umur: 23
        Status: single

        Divisi: fosanAcademy
        Nama: rian
        Umur: 21
        Status: single
        Nama: rama
        Umur: 23
        Status: menikah
        Nama: rijal
        Umur: 22
        Status: single"

*/

function dataKaryawan(parameterData) {
  // buatlah kodemu disini
  console.log(`Divisi : ${parameterData[0]}`);
  for (let i = 1; i <= 3; i++) {
    console.log(`Nama   : ${parameterData[i][0]}`);
    console.log(`Umur   : ${parameterData[i][1]}`);
    console.log(
      `Status : ${parameterData[i][2] == true ? "Menikah" : "Single"}`
    );
  }
  console.log(`\n`);
  console.log(`Divisi : ${parameterData[4]}`);
  for (let i = 5; i <= 7; i++) {
    console.log(`Nama   : ${parameterData[i][0]}`);
    console.log(`Umur   : ${parameterData[i][1]}`);
    console.log(
      `Status : ${parameterData[i][2] == true ? "Menikah" : "Single"}`
    );
  }
}

let data = [
  "duskiTeam",
  ["bhagas", 20, true],
  ["adhit", 19, false],
  ["puka", 23, false],
  "fosanAcademy",
  ["rian", 21, false],
  ["rama", 23, true],
  ["rijal", 22, false],
];

let Input = [
  ["MIBLabs", ["bhagas", 20, true], ["adhit", 19, false], ["puka", 23, false]],
  ["duskiTeam", ["rian", 21, false], ["rama", 23, true], ["rijal", 22, false]],
];

console.log(dataKaryawan(data));
