// 여러 array가 있는데 이를 비교하는 방법을 배우자

let change = [3,8,9];
let reduced = [7,6];

console.log([change,reduced]);
console.log([...change]);
console.log([...reduced]);
console.log([...change,...reduced]);        //concat 기능

//결과
// [ [ 3, 8, 9 ], [ 7, 6 ] ]
// [ 3, 8, 9 ]
// [ 7, 6 ]
// [ 3, 8, 9, 7, 6 ]

