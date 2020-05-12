//find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.
//filter()는 전체 배열에서 맞는 모든값을 반환하지만 find는 만족하는 첫번째 요소만을 반환한다.

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

//함수사용
const result = inventory.find(function k(fruit){
    return fruit.name === 'cherries';
});

//화살표함수 사용
const result1 = inventory.find(fruit => fruit.name === 'cherries');

//함수를 const변수에 저장하고 처리
const k = element => element.name === 'cherries';
const result2 = inventory.find(k);

console.log(result) // { name: 'cherries', quantity: 5 }
console.log(result1);
console.log(result2);