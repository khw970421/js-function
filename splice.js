//splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다
//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
//start는 시작하는 번지수 2번이면 2번위치에서 원래있던걸 삭제하든 그대로 내비두고 그위치에 다른걸 넣는한다.
// deleteCount는 0이하는 삭제를 하지않는다. 그외에는 삭제를 한다.
// item은 바꾸는거나 삽입하는 내용들이다.

//removed는 splice함수를 통해 제거된 배열들을 저장해놓는 공간이다.

//방법1 하나도 제거하지 않고, 2번 인덱스에 "drum" 추가
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed



//방법2.1 하나도 제거하지 않고, 2번 인덱스에 "drum"과 "guitar" 추가
 var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
 var removed = myFish.splice(2, 0, 'drum', 'guitar');
 // myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed

//방법2.2 하나를 제거하고 , 2번 인덱스에 "drum"과 "guitar" 추가
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 1, 'drum', 'guitar');
// myFish is ["angel", "clown", "drum", "guitar", "sturgeon"]

//방법2.3 2개를 제거하고 , 2번 인덱스에 "drum"과 "guitar" 추가
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 2, 'drum', 'guitar');
// myFish is ["angel", "clown", "drum", "guitar"]



//방법3 3번 인덱스에서 한 개 요소 제거
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]

//방법4 2번 인덱스에서 한 개 요소 제거하고 "trumpet" 추가
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, 'trumpet');

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

//방법5 0번 인덱스에서 두 개 요소 제거하고 "parrot", "anemone", "blue" 추가
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]

//방법6 2번 인덱스에서 두 개 요소 제거
var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]

//방법7 -2번 인덱스에서 한 개 요소 제거
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]

//방법8 2번 인덱스를 포함해서 이후의 모든 요소 제거
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]