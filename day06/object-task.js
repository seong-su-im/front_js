// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.

function User(name,age,point){
  this.name = name;
  this.age = age;
  this.point = point;
}

const uesr1 = new User("홍길동",30,3500);
const uesr2 = new User("이순신",22,0);
const uesr3 = new User("장보고",66,9500);

const mart = {
  uesr1 : uesr1,
  uesr2 : uesr2,
  uesr3 : uesr3
}

console.log(mart)

// 유저의 이름만 모두 출력한다.

for(let i in mart){
  console.log(mart[i].name);
}

// 유저의 포인트를 모두 출력한다.

for(let i in mart){
  console.log(mart[i].point);
}