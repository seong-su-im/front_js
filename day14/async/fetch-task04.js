// https://jsonplaceholder.typicode.com/users
// city를 가져와서
// 모두 대문자로 바꾸고,
// 알파벳 중 A의 개수를 세서 콘솔에 출력

const getCity = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if(!response.ok) return;
  const datas = await response.json();
  return datas;
}

const data = getCity().then((data) => data.map((data) => data.address.city.toUpperCase()))
.then((data) => data.join("").split(""))
.then((data) => data.filter((data) => data === 'A').length)
.then(console.log)
.catch(console.error)