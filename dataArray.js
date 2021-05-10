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
  for (let i = 0; i < data.length; i++) {
    if(Array.isArray(data[i])){
      for (let j = 0; j < data[i].length; j++){
        if(Array.isArray(data[i][j])){
          for (let k = 0; k < data[i][j].length; k++) {
            // console.log(data[i][j][k]);
    }
          }else {
            
            console.log(`Divisi : ${data[i][j]}`);
          }
        }
      }else{ 
        console.log(`Perusahaan : ${data [i]}`);
     
  }
  
  }
  
}

let data = [
  "duskiTeam", ["bhagas", 20, true], ["adhit", 19, false], ["puka", 23, false],
  "fosanAcademy", ["rian", 21, false], ["rama", 23, true], ["rijal", 22, false],
];

console.log(dataKaryawan(data));
