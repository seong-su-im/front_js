// 1) 1~10까지 Array객체에 담은 후 짝수만 출력하기
// const arr1 = new Array(10).fill(0);
// let result = arr1.map((data,i,datas)=> i+1).filter((data)=> data % 2 == 0);
// result.forEach((data) => {
//   console.log(data);
// })

// 2) 한글을 숫자로
// ex) "일이삼사" -> "1234"
// const hangles = "공일이삼사오육칠팔구";
// const input = "일칠사오";
// console.log(input.split('').map((data)=> hangles.indexOf(data)).join(''));

// 3) 숫자를 한글로
// const hangles = "공일이삼사오육칠팔구";
// const input = "3452";
// console.log(input.split('').map((data)=> hangles.charAt(data)).join(''));

// 4) 1~100까지 합을 출력
// 100칸짜리 배열을 만든다.
const arr4 = new Array(100).fill(0);
let result = 0;
arr4.map((data,i) => i+1).forEach((data) => result += data);
console.log(result);

// 5) 문자열을 반대로 출력하기 .reverse()
// "apple"

// let stringA = "apple"; // 문자열 생성
// let arr3 = stringA.split('').reverse().join(''); 
// console.log(arr3);

// 6)전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1111-4455 -> 010-****-4455

// function phones(numbers){
   
//    let arr1 = numbers.split('-'); // 매개변수를 기준으로 잘라서 배열로 리턴한다.
//    arr1[1] = arr1[1].replaceAll("1","*"); // 1번 인덱스에 변경한 값을 저장한다.
//    return arr1.join('-'); //배열의 모든 요소들을 연결해서 하나의 문자열로 만드는 메서드
// }

// console.log(phones("010-1111-4455"));