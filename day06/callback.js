//두 수를 더해서 출력 하기

// const add = (num1, num2,callback) => {
//   callback(num1+num2)
// }

// const print = (value) =>{
//   console.log(value);
// }

// add(10,20,print)

// 성과 이름을 받아서 연결하고 출력해주는 함수

// const getFullName = (lastName,firstName,callback) =>{
//   callback(lastName+firstName);
// }

// const print = (value) =>{
//   console.log(value);
// }
// getFullName("임","성수",print);

// 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력

// const add = (num1,num2,callback) =>{
//   callback(num1+num2);
// }

// const isEven = (num1,callback) => {
//   let result = num1 % 2 == 0 ? "짝수" : "홀수"
//   callback(result);
// }

// const print =(result) =>{
//     console.log(result);
// }

// add(2,4,(result)=>{
//   isEven(result,print)
// });


// 두 정수의 덧셈 결과를 출력

// const addSum = (num1,num2,callback) =>{
//   callback(num1+num2);
// }

// const print = (value) =>{
//   console.log(value);
// }

// addSum(3,4,print);

// 두 정수의 곱셉 결과를 출력

// const multiNum = (num1,num2,callback) =>{
//   callback(num1*num2);
// }

// const print = (value) =>{
//   console.log(value);
// }

// multiNum(3,4,print);


// 성과 이름을 전달받아서 "000님 환영합니다"를 출력

// const getfullNames = (lastName, firstName, callback) => {
//   callback(lastName+firstName);
// }

// const print = (value) => {
//     console.log(`${value}님 환영합니다.`);
// }

// getfullNames("임","성수",print);

// --------------------------------------
// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력

// const multiNum = (num1,num2,callback) =>{
//     callback(num1*num2);
// }

// const multiNum2 = (num1,callback) => {
//     callback(num1*2);
// }

// const print = (value) => {
//   console.log(value);
// }

// multiNum(2,4,(result) => {
//   multiNum2(result,print)
// });


// 두 정수의 값 중 작은 값을 반환하여 출력

// const minMaxValue = (num1,num2,callback) =>{
//       let num = num1 > num2 ? num2 : num1;
//       callback(num);
// }

// const print = (value) => {
//   console.log(value);
// }

// minMaxValue(2,3,print);

// 결제 상품 이름과, 결제 상태를 전달 받아서 결제 상태가 ture일 경우 결제완료 false 일 경우 결제 취소 출력

// const nameState = (name,state,callback) => {
    
//     let val = state == true ? "결제완료" : "결제취소"
//     callback(name,val)
// }

// const print = (result,value) =>{
//   console.log(`결제상품의 이름은 ${result}이고 상태값은 ${value} 입니다.`);
// }

// nameState("포도",false,print)


// 문자열을 받아서 순서를 반대로 바꾼 후 출력

// const reverse = (val, callback) => {
    
//     let reverseVal = "";
//     for(let i=0; i<val.length; i++){
//       reverseVal += val[val.length-1-i]
//     }

//     callback(reverseVal)
// }

// const print = (result) =>{
//     console.log(result);
// }

// reverse("안녕하세요",print)

// 사용자가 입력한 값까지 누적합 후 5의 배수인지 확인 후 출력

// const sumAll = (num1,num2,num3,callback) => {
//      callback(num1+num2+num3)
// }

// const multi = (num, callback) => {
//   let multiVal = num % 5 == 0 ? "5의 배수" : "5의 배수 아님";
//   callback(multiVal)
// }

// const print = (value) => {
//   console.log(value);
// }

// sumAll(5,4,6,(result)=>{
//   multi(result,print);
// });


// 1 ~ 100까지 짝수만 더한 후 결과 값의 2를 곱한 후 출력

// const evenSum = (num, callback) => {
//     let total = 0;
//     for(let i=0; i<=num; i++){
//         if(i % 2 == 0) {
//           total += i;
//         }
//     }

//     callback(total);
// }

// const multiTwo = (num,callback) => {
//     callback(num*2);
// }

// const print = (value) => {
//   console.log(value);
// }

// evenSum(10,(result)=>{
//   multiTwo(result,print);
// })

// 2개의 정수 중 최소 값과 최대 값을 비교 후 큰 값에 2를 곱해서 출력

// const minMaxVal = (num1,num2,callback) => {
//     let values = num1 > num2 ? num1 : num2;
//     callback(values);
// }

// const multiTwo = (value,callback) => {
//     callback(value*2);
// }

// const print = (value) => {
//     console.log(value);
// }

// minMaxVal(7,6,(result)=> {
//   multiTwo(result,print);
// })