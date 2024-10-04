// 1) 입력받은 3개 중 홀수만 모두 더해주는 함수

// const oddSum = (num1,num2,num3) => {
//   let result = 0;
//   if(num1 % 2 == 1){result += num1;}
//   if(num2 % 2 == 1){result += num2;}
//   if(num3 % 2 == 1){result += num3;}
//   return result;
// }

// let result = oddSum(3,5,6);
// console.log(result);

// 2) 입력받은 수까지 반복 후 짝수의 합을 모두 더해주는 함수

// const evenSum = (num) => {
//     let result = 0;
//     for(let i =0; i<num; i++){
//         if(i % 2 == 0){
//           result += i;
//         }
//     }

//     return result;
// }

// let result = evenSum(9);
// console.log(result);

// 3) 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바" -> "가나다라마바"

// const removalA = (content) => {
//     let result = "";
  
//       for(let i =0; i<content.length; i++){
//           if(content[i] != 'a'){
//               result += content[i];
//           }
//       }

//     return result;
// }

// let result = removalA("가a나a다a라a마a바");
// console.log(result);

// 4) 입력한 값이 실수인지 정수인지 알려주는 함수
// parseInt() : 정수로 바꿔주는 함수

// const intOrPoint = (num) => {
//   let result = "";
//   let integerNum = 0;
//   if(num % 1 != 0){
//     integerNum = parseInt(num)
//     console.log(`입력한 값은 ${num} 이기 때문에 실수 입니다. 정수로 변환시 ${integerNum} 입니다.`);
//   }else{
//     console.log(`입력한 값은 ${num} 이기 때문에 정수 입니다.`);
//   }
//   return result;
// }

// intOrPoint(34.3);

// 5) 입력받은 문자를 뒤집어주는 함수
// ex) "abcdefg" -> "gfedcba";

// const reverse = (content) => {
//   let result = "";
//   for(let i = 0; i <= content.length; i++){
//     if(i != 0){
//       result += content[content.length-i];
//     }
//   }
//   return result;
// }

// let result = reverse("abcdefg");
// console.log(result);


















