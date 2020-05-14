//reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
//리듀서 함수는 네 개의 인자를 가집니다.
//
// 누산기accumulator (acc)
// 현재 값 (cur)
// 현재 인덱스 (idx)
// 원본 배열 (src)

//콜백의 최초 호출 때 accumulator와 currentValue는 다음 두 가지 값 중 하나를 가질 수 있습니다.
// 만약 reduce() 함수 호출에서 initialValue를 제공한 경우, accumulator는 initialValue와 같고 currentValue는 배열의 첫 번째 값과 같습니다.
// initialValue를 제공하지 않았다면, accumulator는 배열의 첫 번째 값과 같고 currentValue는 두 번째와 같습니다.

([0, 1, 2, 3, 4].reduce(function(accumulator, currentValue) {
    console.log(accumulator,currentValue);
    return accumulator + currentValue;
}));
//4번의 콜백을 통해  accumulator => 0(배열의 첫번째)-1-3-6순으로 변하고 currentValue => 1(배열의 두번째)-2-3-4 순으로 되어 결국 둘을 더하면 전체 합이된다.

[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    console.log(accumulator,currentValue);
    return accumulator + currentValue;
}, 10);
//두번째인수(initialValue)로 10을 줄경우 5번의 콜백으로 바뀐다. accumulator => 10(두번째인수)-10-11-13-16  currentValue =>0(배열의첫번째값)-1-2-3-4 이렇게 바뀐다.


//case1 reduce vs map
var data = [1, 2, 3];

var initialValue = [];
var reducer = function(accumulator, value) {
    accumulator.push(value * 2);
    return accumulator;
};
var result = data.reduce(reducer, initialValue);
console.log(result); // [2, 4, 6]

var result2 = data.map(x => x * 2);
console.log(result2); // [2, 4, 6]

//case2 reduce vs filter
var data = [1, 2, 3, 4, 5, 6];

var initialValue = [];
var reducer = function(accumulator, value) {
    if (value % 2 != 0) {
        accumulator.push(value);
    }
    return accumulator;
};
var result1 = data.reduce(reducer, initialValue);       //배열인 intialValue가 있어야한다.
console.log(result1); // [1, 3, 5]

var result2 = data.filter(x => x % 2 != 0);
console.log(result2); // [1, 3, 5]

//case3 reduce(배열1번순회) vs. filter+map(배열2번순회)
var data = [1, 2, 3, 4, 5, 6];

var initialValue = [];
var reducer = function(accumulator, value) {
    if (value % 2 != 0) {
        accumulator.push(value * 2);
    }
    console.log(accumulator,value);
    return accumulator;
}  //처음 initialValue로 인해 기본값이 []인 형태로 accumulator 첫번째가 []에서 1이 성립하므로 [2]가 되고 반복해서 [2,6,10]이 된다.
//    [ 2 ]         1
//    [ 2 ]         2
//    [ 2, 6 ]      3
//    [ 2, 6 ]      4
//    [ 2, 6, 10 ]  5
//    [ 2, 6, 10 ]  6
var result1 = data.reduce(reducer, initialValue);
console.log(result1); // [2, 6, 10]

var result2 = data.filter(x => x % 2 != 0).map(x => x * 2);
console.log(result2); // [2, 6, 10]