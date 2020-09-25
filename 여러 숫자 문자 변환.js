//1) 문자를 배열에 한글자씩 분리하기
let s = 'string'
console.log([...s]);
console.log(s.split(''));

//2) 배열에 각각의 문자를 합치기
let p = ['s','t','r','i','n','g'];
console.log(p.join(''));

//3) 서로다른 배열을 연결하기
let a=['a','b','c'];
let b=['d','e','f'];
console.log(a.concat(b));

//4) 배열끼리 내용 하나하나 비교하는 방법
//4.1) 완전 순서도 같은 배열
let c=['a','b','c'];
let count=0;
for(let i=0;i<a.length;i++)
    if(a[i].includes(c[i]))         //a[i]의 같은 위치에 c[i]가 똑같은게 존재할때
        count++;
if(count==a.length)
    console.log('같다');

//4.2) 순서는 다르나 전부 존재할때
let d=['b','c','a']
count=0;
for(let i=0;i<a.length;i++)
    if(a.includes(d[i]))            //a 배열의 전체에 d[i]가 똑같은게 존재할때
        count++;
if(count==a.length)
    console.log('같다.')

//5)문자열을 숫자로 바꾸는 방법
let w=[100,'100'];
console.log(parseInt(w[1])===100)

//6) 문자끼리는 그냥 비교가능함
console.log('a'<'b');
