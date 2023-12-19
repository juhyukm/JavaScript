/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10); // 나머지
console.log(10 % 3);

console.log('---------------');

console.log(10 * (10+10));

/**
 * 증가와 감소
 */
let number = 1;

number ++;
console.log(number);

number --;
console.log(number);
console.log('---------------');

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++; // =이 먼저 실행
console.log(result, number); // 1 2

result = number --;
console.log(result, number); // 2 1

result = ++ number; // number 먼저 증가 후 result에 값 저장
console.log(result, number); // 2 2

result = -- number;
console.log(result, number); // 1 1

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */
let sample = '99'; // string으로 선언 
console.log(+sample); // 99
console.log(typeof +sample); // number 
// 스트링에 넘버 값이 될 수 있는 값이 들어 있으면
// + 붙였을 때 넘버 타입으로 변환 가능

console.log(sample);
console.log(typeof sample); // string 원래 타입이 변경된 것은 아님

sample = true;
console.log(+sample); // 1
console.log(typeof +sample); // number

sample = false;
console.log(+sample); // 0
console.log(typeof +sample); // number

sample = '원빈'; 
// NaN -> Not a Number
console.log(+sample); // NaN 

sample = '99';
console.log(-sample); // -99
console.log(typeof -sample); // number

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10; // 10이 number에 더해지고 결과가 number 변수에 저장됨
console.log(number); // 110

number -= 10;
console.log(number); // 100

number *= 10;
console.log(number); // 1000

number /= 10;
console.log(number); // 100

number %= 10;
console.log(number); // 0 

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5'); // true
console.log(0 == ''); // true
console.log(true == 1); // true
console.log(false == 0); // true
console.log(true == '1'); // true

console.log(5 === 5); // true 
console.log(5 === '5'); // false 타입까지 비교
console.log(0 === ''); // false
console.log(true === 1); 
console.log(false === 0); 
console.log(true === '1'); 
console.log('-------');

console.log(5 != 5); // false
console.log(5 != '5'); 
console.log(0 != ''); 
console.log(true != 1);  
console.log(false != 0);  
console.log(true != '1'); 

console.log('-------');

console.log(5 !== 5); // false
console.log(5 !== '5'); // true
console.log(0 !== ''); 
console.log(true !== 1);  
console.log(false !== 0);  
console.log(true !== '1'); 

// ===, !== 주로 사용
console.log('-------');

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다': '10이 0보다 작다'); // 조건 ? true : false

/**
 * 논리 연산자
 * 
 * 1) && (and)
 * 2) || (or)
 */

// && 조건은 모두 true여야 true를 반환
console.log(true && true);
console.log(true && false);
console.log(false && true); // false
console.log(false && false); // false

console.log('-----')

// ||는 하나만 true여도 true를 반환
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false); // false
console.log('-----')

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2); // false
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2); // true
console.log(10 < 1 || 20 < 2); // false
console.log('-----')

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */
console.log(true || '헬로'); // true
console.log(false || '헬로'); // 헬로
console.log(false && '헬로'); // false
console.log(true && '헬로'); // 헬로

console.log(true && true && '안녕'); // 안녕
console.log(true && false && '안녕'); // false

/**
 * 지수 연산자
 */
console.log(2 ** 2);
console.log(10 ** 3); // 1000

/**
 * null 연산자
 */
let name; 
console.log(name); // undefined

name = name ?? '코드팩토리'; // 좌측이 null, undefined일 때 우측 반환
console.log(name); // 코드팩토리

name = name ?? '헬로';
console.log(name); // 코드팩토리

let name2;
name2 ??= '코드팩토리';
console.log(name2);
