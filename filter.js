    // filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다

function isBigEnough(value)
{ return value >= 10; }
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);

    //JSON에서 무효한 항목 거르기 다음 예는 0이 아닌, 숫자 id인 모든 요소의 걸러진 json을 만들기 위해 filter()를 사용합니다.

    var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 5


    //배열 내용 검색
    //다음 예는 배열 내용을 조건에 따라 검색하기 위해 filter() 를 사용합니다.

        var fruits1 = ['apple', 'banana', 'grapes', 'mango', 'orange'];

    /**
     * 검색 조건에 따른 배열 필터링(쿼리)
     */
    function filterItems1(query) {
        return fruits1.filter(function(el) {
            return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
    }

    console.log(filterItems1('ap')); // ['apple', 'grapes']
    console.log(filterItems1('an')); // ['banana', 'mango', 'orange']

    // ES2015로 구현

    const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

    /**
     * 검색 조건에 따른 배열 필터링(쿼리)
     */
    const filterItems2 = (query) => {
        return fruits.filter((el) =>
            el.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    }

    console.log(filterItems2('ap')); // ['apple', 'grapes']
    console.log(filterItems2('an')); // ['banana', 'mango', 'orange']























