//indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2 배열에서 0부터 생각 camel부터 찾기 시작
console.log(beasts.indexOf('bison',2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1