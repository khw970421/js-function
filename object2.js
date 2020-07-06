

function solution(A) {
//배열과 Array함수 비교
//1. 그냥 배열잡아 생성하기

    let k = [1, 2, 3];

    k.push(10);

    console.log(k);

//2. Array함수 이용해 배열생성하기

    var bbb = new Array(1, 2, 3);

    bbb.push(10);

    console.log(bbb);
}
//객체와 배열 비교  객체로 생성할때는 별게 다 가능하더라 그리고 별 참조가 다있다.

    var arr = ['zero', 'one'];

    var obj = {

        p:'zero',

        '1':'two',

        q:['a','b','c']

    }



    console.log(arr);

    console.log(obj);



    console.log(arr[0]);

    console.log(obj.p[0]);

    console.log(obj.q[0]);





//객체에 배열을 넣기

    var p={

        'animal' :['pew','miaung','woof']

    }

    console.log(p.animal);

    console.log(p.animal[0]);



//메소드 생성자를 이용

    function Person(firstName, lastName) {

        this.firstName = firstName;

        this.lastName = lastName;

    }



    const member = new Person("Lydia", "Hallie");

    console.log(member.firstName,member.lastName);



//객체의 생성방법 2가지

//1. 객체 리터럴

    var person = {

        firstName:"John",

        lastName:"Doe",

        age:50,

        eyeColor:"blue"

    };



//2. new 키워드

    var person1 = new Object();

    person1.firstName = "John";

    person1.lastName = "Doe";

    person1.age = 49;

    person1.eyeColor = "blue";



    console.log(person);

    console.log(person1);



//즉 new Array도 가능 new Object도 가능 new 함수이름도 가능하다.