//forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
const arr = [10,20,30];
const arr1 = [];
arr.forEach(element => console.log(element));
//하나씩 값으로 출력
//10
//20
//30

arr.forEach(element=>arr1.push(element));
console.log(arr1);
//배열에 만족하는 값들을 arr1에 넣어 출력
// [10,20,30]

console.log(arr.filter(element=>element>0));
//배열에 있는 값을 한번에 출력
// [10,20,30]


//for 문을 forEach 문으로
const items = ['item1', 'item2', 'item3'];
const copy = [],copy1=[],copy2=[];

// for문 사용
for (let i=0; i<items.length; i++) {
    copy.push(items[i]);
}
console.log(copy);

// forEach문 사용
items.forEach((item)=>copy1.push(item));
console.log(copy1);

// forEach문에 화살표함수 사용
items.forEach(function(item){
    copy2.push(item);
});
console.log(copy2);