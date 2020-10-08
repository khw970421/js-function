function solution(n) {
    let sum=0;
    return [ ...Array(n).keys() ]
        .map(i => i + 1)
        .filter(i => n % i == 0)
        .reduce((sum, i) => sum + i);
}

/*
Array(n)은 n개의 배열을 생성
Array(n).keys()는 배열의 key값에 대한 iterator(반복을 위해 설계된, 특별한 인터페이스를 가진 객체)를 만든다.
[ ...Array(n).keys() ] : n개의 배열의 키값에 대한 배열을 만든다.

즉 [...Array(5).keys()] 는 [0,1,2,3,4]가 된다.

결과적으로
[...Array(n).keys()]는 0부터 n까지의 배열을 생성

.map(i=>i+1)을 통해 그다음으로 return하는것은 1부터 n까지로 알 수 있고
.filter(i=>n%i==0)을 통해 n이라는 값으로
map에서 return 한 값들이 나누어지면 true이므로 .reduce로 가고
false이면 .reduce로 가지않는다.
마지막으로 .reduce에서는 나누어떨어지는 값들이 온 것을 첫번째인자인 누산기 sum에다가 더해주는것을 반복하고 전부 끝나면 return한다.




 */
function solution(n) {
// 배열의 숫자를 더하기
    const h =Array(3).keys();
    const h1 = [0,1,2];
    console.log(h);
    console.log(h1);
    for (const s of h)
    {
        console.log(s);
    }
    for (const s1 of h1)
    {
        console.log(s1);
    }
}

/* 결과
Object [Array Iterator] {}
[ 0, 1, 2 ]
0
1
2
0
1
2
 */
