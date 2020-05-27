function solution(p)
{
    var answer = 0;
    let h = [];                                                     //중복된 값 없애는 배열생성
    let count=0;
    for(let i=p+1;;i++){
        let a = [...i.toString(10)];                                //숫자를 분리한다
        h=a.filter((item, index) => a.indexOf(item) === index);     //중복된 값을 제거한 값들을 h에 넣는다
        //중복되면 배열처음부터 찾은 indexOf내용과 index가 다르므로 , 다르지않는 것들만 filter로 걸러낸 a배열의 값들을 h에 넣는다.
        if(h.length!=a.length)                                         //h와 a에서의 크기와 같지않으면 count증가
            count++;
        else                                                        //중복되는 숫자가 하나도 없이 같을경우 break실행
            break;
    }
    return p+count+1;                                               //원래 날짜에 증가한 count와 +1을한다 i의 시작을 p+1로 했기때문에 count 반복횟수를 추가더하기

}

console.log(solution(1987)==2013); //아름다운 숫자 1987다음 1988의 경우 8이 2개이므로 제외... 2013에서 아름다운숫자