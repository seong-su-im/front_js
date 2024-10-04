// 1) 1~10까지 누적합 구하기

// const arr1 = new Array(10).fill(0);
// let total = 0;
// arr1.map((data,i)=>i+1).forEach((data)=> total += data);
// console.log(total);

// 2) 1~50까지 짝수만 배열에 담고 배열 안에 값에 3을 곱한 값으로 변경 후 출력하기

// const arr2 = new Array(50).fill(0);
// console.log(arr2.map((data,i)=>i+1).filter((data,i)=> data % 2 == 0).map((data)=>data*3));


// 3) 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬 후 출력하기

// const arr3 = "10,20,30,40,50";
// console.log(arr3.split(',').reverse().join(','));

// 4) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기

// const arr4 = new Array(10).fill(0);
// let arr5 = arr4.map((data,i) => i+1).map((data)=>data > 5 ? data*2 : data);
// console.log(arr5);


// 5) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기
// ex) let arrTask1 = 1*3*5*7*9...

//  const arr5 = new Array(30).fill(0);
//  let arr6 = arr5.map((data,i)=> i+1).filter((data) => data % 2 == 1 ).join('*');
//  console.log(arr6);

// 6) arrTask1에 들어간 값에 "*"을 제거한 후 배열에 담아 arrTask1의 기존의 값을 2배로 변경 후
// 모든 값을 출력하기

//  console.log(arr6.split('*').map((data)=>data*2));

// 7) 1~20까지 배열에 담고 배열의 들어간 값 중 뒤에서 5개 값을 더한 후 출력

// const arr9 = new Array(20).fill(0);
// let total = 0;
// let arr10 = arr9.map((data,i)=> i+1).splice(-5,5).forEach((data)=> total+= data);
// console.log(total);