// 이름 : 여러분들의 성함
// 국어 : 80점
// 수학 : 70점
// 영어 : 90점
// 과학 : 20점

// 평균, 학점, 구하기
// if문을 사용해서 평균이 60점이면 합격, 60점 이하는 불합격을 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.

let name = "임성수";
let kor = 80;
let math = 70;
let eng = 90;
let science = 20;
let sum = kor+math+eng+science;
let avg = sum/4;
let result = "";
if(avg >= 60){
  result = "합격"
}else{
   result = "불합격"
}

console.log(`${name}님의 이번 총점은 ${sum}, 평균은 ${avg}점으로 (${result}) 입니다.`); 

//switch문
switch(10){
  case 1:
    console.log("1번");
    break;
  default:
    console.log("1번아님");
    break;
}

