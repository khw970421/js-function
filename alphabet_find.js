function solution4(){
    let  a="YMJHFJXFWHNUMJWNXTSJTKYMJJFWQNJXYPSTBSFSIXNRUQJXYHNUMJWX";
    let b=[];       //각 알파벳을 아스키코드로 변환한 숫자
    let c=[];       //아스키 코드로 변한 숫자를 일정값을 더해 암호문 찾기
    let d=[];       //그냥 각각의 값들을 배열에 넣은것

    for (let i = 0; i < a.length; i++) {
        let p=a.charCodeAt(i)+21;
        b.push((p) > 90 ? (p) - 26 : (p));
        d.push(a[i]);
    }

    for(let j=0;j<a.length;j++) {
        c.push(String.fromCharCode(b[j]));
    }
    console.log(b);
    console.log(c);
    console.log(d);
}

console.log(solution4());

//[
//   84, 72, 69, 67, 65, 69, 83, 65, 82, 67, 73, 80,
//   72, 69, 82, 73, 83, 79, 78, 69, 79, 70, 84, 72,
//   69, 69, 65, 82, 76, 73, 69, 83, 84, 75, 78, 79,
//   87, 78, 65, 78, 68, 83, 73, 77, 80, 76, 69, 83,
//   84, 67, 73, 80, 72, 69, 82, 83
// ]

// [
//   'T', 'H', 'E', 'C', 'A', 'E', 'S', 'A',
//   'R', 'C', 'I', 'P', 'H', 'E', 'R', 'I',
//   'S', 'O', 'N', 'E', 'O', 'F', 'T', 'H',
//   'E', 'E', 'A', 'R', 'L', 'I', 'E', 'S',
//   'T', 'K', 'N', 'O', 'W', 'N', 'A', 'N',
//   'D', 'S', 'I', 'M', 'P', 'L', 'E', 'S',
//   'T', 'C', 'I', 'P', 'H', 'E', 'R', 'S'
// ]

// [
//   'Y', 'M', 'J', 'H', 'F', 'J', 'X', 'F',
//   'W', 'H', 'N', 'U', 'M', 'J', 'W', 'N',
//   'X', 'T', 'S', 'J', 'T', 'K', 'Y', 'M',
//   'J', 'J', 'F', 'W', 'Q', 'N', 'J', 'X',
//   'Y', 'P', 'S', 'T', 'B', 'S', 'F', 'S',
//   'I', 'X', 'N', 'R', 'U', 'Q', 'J', 'X',
//   'Y', 'H', 'N', 'U', 'M', 'J', 'W', 'X'
// ]