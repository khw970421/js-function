/* var, let, const 전부 호이스팅은 한다. 단지 var는 undefined로 let 과 const 는 referenced error를 만든다
이는 TDZ(temporal dead zone)과 관련이 있는데
TDZ는 어휘적 바인딩이 실행되기 전까지 액세스 할수 없는 현상으로
let/const는 어휘적으로 바인딩이 실행되기 전까지 access 불가능하다.
즉 선언전에 변수에 접근하는 것을 금지한다.
 */

function v() {
    console.log(x); // undefined
    var x = 'inner scope';
};


function l() {
    console.log(y); // undefined
    let y = 'inner scope';
};

console.log(v());           //undefined 발생
console.log(l());           //referenceError 발생

/*따라서 let/const선언 변수는 호이스팅되지 않는 것이 아니다.
스코프에 진입할 때 변수가 만들어지고 TDZ(Temporal Dead Zone)가 생성되지만,
코드 실행이 변수가 실제 있는 위치에 도달할 때까지 액세스할 수 없는 것이다.
let/const변수가 선언된 시점에서 제어흐름은 TDZ를 떠난 상태가 되며, 변수를 사용할 수 있게 된다.
출처 : https://medium.com/korbit-engineering/let%EA%B3%BC-const%EB%8A%94-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EB%90%A0%EA%B9%8C-72fcf2fac365
 */

