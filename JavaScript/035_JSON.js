// JSON(JavaScript Object Notation)은 자바스크립트에서 객체를 표현하는 형식으로 데이터를 표현한것입니다. 다른 방식에 비해 가볍고 자바스크립트와 호환성이 높아 널리 사용됩니다. 쉽게 말해 텍스트로 표현된 정보의 덩어리라고 생각하시면 됩니다.

// - JSON.parse(): JSON문자열을 자바스크립트 객체로 변환합니다.
// - JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환합니다.

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj);

const json = "[1, 2, 3]";
const obj = JSON.parse(json);
console.log(obj);

const json = { result: true, count: 42 };
const s = JSON.stringify(json);
s;

// JSON을 이용한 깊은 복사
let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l));
a[0] = 1000;

console.log(l);
