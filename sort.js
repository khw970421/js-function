//sort... 일단 이해한대로 정리해보자 기본적으로 배열에 적용되며 문자인 배열들에도 적용되고 숫자에도 적용

//숫자의경우
let a=[10,11,13,1,2,5];
console.log(a.sort())   //정상적 출력 안됌
console.log(a.sort((a,b)=>a-b));    //이래야 정상출력이된다.
console.log(a.sort(function(a,b){
    console.log(a-b)
    return a-b;
}))

/*
대충 원리를 보면 b가 제일 작은값을 찾고 a가 그다음 값을 찾아
2,1을 찾고 그후 둘중 큰값인 2를 내비두고 다음으로 큰값인 5를 찾고 이를 반복한다.

2 1
5 2
10 5
11 10
13 11
 */

console.log(a.sort(function(a,b){
    if(a-b>0)       //작은값 b와 a를 비교해서 a가 더 크다면
        return 1;
    else
        return -1;
}))

//문자의 경우
let q=['q','f','d','e','b','h']
console.log(q.sort())   //이것도 가능은 하지만

console.log(q.sort(function(a,b){
    return (a>b)?1:-1;          //오름차순정렬
}))

console.log(q.sort((a,b)=>(a>b)?1:-1))

console.log(q.sort(function(a,b){
    return (a>b)?-1:1;          //내림차순정렬
}))

console.log(q.sort((a,b)=>(a>b)?-1:1))

//주의 해야할것
console.log('A'>'B'); //true false 구분가능
console.log('A'-'B'); //문자계산으로 빼는건 불가능

console.log('cce'>'ce')
console.log('cce'>'cca')    //이럴경우 한글자씩 비교하는듯
