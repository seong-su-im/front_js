//이름을 1번 출력해주는 함수
// function printName(){
//   console.log("임성수");
// }

// printName();

// 100이라는 값을 주는 함수
// function get100(){
//   return 100;
// }

// console.log(get100());

// 두 수를 합쳐서 결과값을 주는 함수
// function add(num1,num2){
//   return num1+num2;
// }

// console.log(add(3,4));

// 성과 이름을 받아서 붙여주는 함수
function getName(lName,fName){
    return lName+fName;
}

// 이름을 출력해주는 함수
console.log(getName("임","성수"));

// 이름을 10번 반복해주는 함수
function repet10(){
  for(let i=0; i<10; i++){
    console.log(getName("임","성수"))
  }
}
repet10();

// 숫자 5개를 받아서 모두 더해주는 함수
// 매개변수, 파라미터, 파람, 인자
// 디폴트 파라미터
function addNumber(num1 = 0,num2 = 0,num3 = 0,num4 = 0,num5 = 0){
  return num1+num2+num3+num4+num5;
}
console.log(addNumber(4,7,5));

function return10(){
  return 10;
}

// 숫자 3개를 받아서 모두 곱해주는 함수
function multiNumber(num1,num2,num3, num4 = return10()){
  return num1*num2*num3*num4;
}
console.log(multiNumber(4,7,5));

// 숫자 2개를 받아서 더하고 출력해주는 함수
function twoAddNumber(num1,num2){
  return num1+num2;
}
console.log(twoAddNumber(4,7));

//  즉시 사용함수 ()() 1회성 함수

(
  function(){
  console.log("선언과 동시에 사용")
  }
)();

// 화살표 함수 () => {} (ES6)
function addPrintNum(num1, num2){

};
const addPrintNum2 = (num1,num2) => {
  
};