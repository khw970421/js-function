const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']; /** * 검색 조건에 따른 배열 필터링(쿼리) */

//part1 화살표함수를 쓰지않은 함수
function filterItems(query) {
    return fruits.filter(function filter(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}
//part2 화살표함수를 사용한 함수
function filterItems(query) {
    return fruits.filter((el) =>
        el.toLowerCase().indexOf(query.toLowerCase()) > -1
    )
}
//part3 화살표함수를 사용하면서 변수에 함수를 저장하여 사용하는 것
const filterItems = (query) => {
    return fruits.filter((el) =>
        el.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
}

console.log(filterItems('ap'));
// ['apple', 'grapes'] console.log(filterItems('an')); // ['banana', 'mango', 'orange']