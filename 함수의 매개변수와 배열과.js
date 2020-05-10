
//ex1
var filtered = [12, 5, 8, 130, 44].filter(function isBigEnough(value)
{ return value >= 10; });
console.log(filtered+'?');

// 배열.filter(funtion 함수이름(매개변수){ return 매개변수 >=10;}); 는 배열안에 있는 변수들을 하나씩 다 참조하는 역할을 한다.

//ex2
let a = [12,5,8,130,44];
var find = a.find(function isSmallEnough(value1){return value1 < 10;});
console.log(find);

//배열.find(funtion 함수이름(매개변수){return 매개변수 <10;}); 는 배열안에 있는 변수들중 차례로 10보다 작은게 있으면 찾아 한번 출력