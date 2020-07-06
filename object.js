function n1(){
    let c = { greeting: "Hey!" };
    let d; d = c; c.greeting = "Hello";
    console.log(d.greeting);
}

/*결과 : Hello
객체가 바뀌지 않았으므로 같은 참조형태를 띈다.
 */

function n2(){
    let person = { name: "Lydia" };
    const members = [person];
    person = null;
    console.log(members);
}

/*결과 : [{ name: "Lydia" }]
객체가 바뀌었으므로 서로 다른 참조 형태를 띈다.
person -> null
members -> [{ name: "Lydia" }]
 */

function getInfo(member, year) {
member.name = "Lydia"; year = "1998";
}

const person = { name: "Sarah" };
const birthYear = "1997";
getInfo(person, birthYear);
console.log(person, birthYear);


/*결과 : A: { name: "Lydia" }, "1997"
인수들의 값이 객체가 아닌 한 값 에 의해 전달돼요. 그 후 참조 에 의해 전달돼요.
birthYear는 객체가 아니라 문자열이기 때문에 값에 의해 전달돼요. 값으로 전달하면 값의 복사본 이 만들어져요(질문 46을 보세요).
변수 birthYear는 "1997"값에 대한 참조를 가져요. 인수 year 또한 "1997"에 대한 참조를 가지지만,
birthYear가 가진 참조 값과는 달라요. year에 "1998"을 대입하여 year의 값을 업데이트할 때, year의 값만 업데이트해요.
birthYear는 여전히 "1997"이에요.
person의 값은 객체예요. 인수 member는 같은 객체의 (복사된) 참조 값을 가져요. member객체의 속성이 갖는 참조를 변경하면,
두 개 모두 같은 객체를 참조 값을 가지고 있기 때문에, person의 값 또한 변경돼요. 이제 person'의 name 속성은값 "Lydia"에요.(객체의 속성변경 -> 같은 참조)
즉 getinfo를 통해 원래도 Lydia 가르키는데 person도 Sarah에서 같은 Lydia를 가르키게 바뀌게 된다.
즉 => person은 객체이므로 복사가 일어나고 birthYear는 객체가 아니므로 값이 변경된다

정리 : 객체의 속성을 바꾸면 같은 참조가 되고 그외의 값을 바꾸면 새로운 복사가 일어나 값이 자체가 바꾸게 된다.
 */