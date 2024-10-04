// let user = {
//   name:"홍길동",
//   age:20,
//   heigth : 180,
//   mbti : "enfj"
// };

// user.money = 200000;
// user.name = "영길동";

// console.log(`이름은 ${user.name} 나이는 ${user.age} 입니다. 용돈은 ${user.money}원 입니다.`)
// console.log(user["age"]);
// let user2 = new Object(); // {}

// const post = {
//   id : 1,
//   title : "오늘은 금요일 공부중",
//   content : "자바스크립트 공부중",
//   name : "홍길동"
// }

// post.title = "와 불금엔 치킨";
// console.log(post.title);

// const porducts = {
//   porduct1 : "지우개",
//   porduct2 : "키보드",
//   porduct3 : "마우스",
//   porduct4 : "연필",
//   porduct5 : "공책",
//   porduct6 : "노트"
// }

// // 향상된 for, 빠른 for문, for in , for of
// for(let i in porducts){
//   console.log(porducts[i]);
// }


// 빠른 for문을 이용하여 모든 유저의 point를 누적한 결과를 출력하기

// const users = {
//   user1 : {
//     name : "홍딩동",
//     age : 20,
//     point : 3000
//   },
//   user2 : {
//     name : "이순신",
//     age : 30,
//     point : 5000
//   },
//   user3 : {
//     name : "장보고",
//     age : 25,
//     point : 10000
//   }
// }

// let total = 0;
// for(let i in users){
//     total += users[i].point;
// }

// console.log(total);


const user1 = {name: "홍길동"};
const user2 = {name: "이순신"};
const user3 = {name: "장보고"};
const user4 = {name: "김철수"};
const user5 = {name: "김영희"};
const user6 = {name: "흰둥이"};

// 프로토타입(Prototype)
// 객체 생성자 함수에 의해 생성되는 객체들이 공유하는 속성과 메소드를 저장하는 특수한 객체
function User(name,age){
  this.name = name;
  this.age = age;
}

const user7 = new User("홍길동",20)
const user8 = new User("이순신",30)
console.log(user7);
console.log(user8);