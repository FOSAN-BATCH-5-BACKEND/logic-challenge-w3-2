// let array = [ [2, 6], [5, 4, [7, 8]] ];

// console.log(array[0]);
// let p=0;
// for(let i =0; i<array.length; i++){
//     // console.log(array[i])
//     for(let a=0; a< array[i].length; a++){
//         if(Array.isArray(array[i][a])){
//             for(let x =0; x < array[i][a].length; x++){
//                 console.log(array[i][a][x]);
//             }
//         }else{
//             console.log(array[i][a]);
//         }
//     }
// }

// array[3] = 'c';
// let apa = array.shift()
// let tampung =array.slice(1, 3);
// let tampung = array.splice(0, 0);
// console.log(tampung);
// console.log(array);
// array.forEach(function(item, index){
//     console.log(item);
// })

// let array = [1,2,3];

// let array2 = [...array, 5,3,2];

// console.log(array2);

/*
Terdapat sebuah array yang berisi berbagai macam data.
Isikanlah function dataKaryawan yang akan mengembalikan data tersebut menjadi sebuah biodata perusahaan sederhana.

contoh:
Input: [
    "duskiTeam",
    [
        "MIBLabs",
        ["bhagas", 20, true]
        ["adhit", 19, false],
        ["puka", 23, false],
    ],
    [
        "fosanAcademy",
        ["rian", 21, false],
        ["rama", 23, true],
    ],
]
Output: "Perusahaan: duskiTeam 
*/

let data = [
  "duskiTeam",
  ["MIBLabs", ["bhagas", 20, true], ["adhit", 19, false], ["puka", 23, false]],
  ["fosanAcademy", ["rian", 21, false], ["rama", 23, true], ["rijal", 22, false]],
];

for (let i = 0; i < data.length; i++) {
  // console.log(data[i])
  if (Array.isArray(data[i])) {
    for (let a = 0; a < data[i].length; a++) {
      if (Array.isArray(data[i][a])) {
        for (let x = 0; x < data[i][a].length; x++) {
          console.log(data[i][a][x]);
        }
      } else {
        console.log(`Divisi: ${data[i][a]}`);
      }
    }
  } else { 
    console.log(`Perusahaan: ${data[i]}`);
  }
}
