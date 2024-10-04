// 1번 문제
// https://jsonplaceholder.typicode.com/comments
// email 10개만 가져온 후 email에서 아이디만 가져오기
// ex) ["Eliseo@gardner.biz"] => ["Eliseo"]
// 아이디만 출력


// const getEmail = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/comments");
//     if(!response.ok) return;
//     const datas = await response.json();
//     return datas;
// }

// const emails = getEmail().then((data) => data.map((data) => data.email))
// .then((data) => data.slice(0,10))
// .then((data) => data.map((data) => data.split("@")[0]))
// .then((data) => data.forEach((data) => {console.log(data)}))
// .catch((error) => console.error(error));

// 2번 문제
// https://jsonplaceholder.typicode.com/users
// 이름만 가져와서 이름을 거꾸로 뒤집어서 출력하기
// ["Leanne Graham", ...] => ["maharG ennaeL", ...]

const getName = async () => {

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if(!response.ok) return 0;
  const datas = await response.json();
  return datas;
}

const names = getName().then((data) => data.map((data) => data.name))
.then((data) => data.map((data) =>{
  return data.split("").reverse().join("")
}))
.then(console.log)
.catch(console.error)
