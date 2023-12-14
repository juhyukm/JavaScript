/*
    
    Variable 선언하기 (변수선언)

    1) var - 더이상 쓰지 않는다.
    2) let
    3) const
    
*/

var name = '코드팩토리';
console.log(name);

// var age = '31';
var age = 32;

let world = '월드';
console.log(world);

/*
    let과 var로 선언하면
    값을 추후 변경할 수 있다.
*/
world = '세계';
console.log(world);

const dogCat = '강아지고양이';
console.log(dogCat);

// dogCat = '코드팩토리'; // TypeError: Assignment to constant variable

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것
 * 2) 할당
 */
// var name; // 이 자체가 선언
// var name = '코드팩토리'; // 값을 정해주는게 할당
var name2;
console.log(name2);

let myFriend; // 선언만 하고 할당 X
console.log(myFriend); // undefined 선언만 하고 할당 안할 시

// const myFriend2; // 값 변경 불가능하니까 undefined로 할당 불가

/**
 * 변수 선언(declaration)
 * : 변수를 생성
 */
let xmas; // 선언

/**
 * 변수 초기화(initialization)
 * : 메모리에 변수 저장을 위해 공간 확보, 기본값 undefined
 */

let xmas2; // 선언 -> 초기화
console.log(xmas2); // undefined

/**
 * 값 할당(assignment)
 * : 할당 연산자(=)를 사용해 값 할당
 * undefined로 초기화된 변수에 실제 값 할당
 */
xmas = 1225;
console.log(xmas);
 