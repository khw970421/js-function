//기본적으로 사용방법은 문자형태여야한다.

// 1) String
// 2) 배열
// 3) 숫자

function k()
{
    let a ='12345';
    let b = ['12345'];
    let c = 12345;

    console.log(a.split(''));
    console.log(b[0].split(''));
    console.log(c.toString().split(''));

}

k()
