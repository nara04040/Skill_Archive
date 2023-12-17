const readline = require("readline");
// readline모듈은 JS의 내장 모듈이다.
// 한 번에 한 줄씩 readable스트림에서 데이터를(process.stdin) 읽기위한 인터페이스를 제공한다.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What do you think of Node.js?", (answer) => {
//   // input이 answer 매개변수로 들어온다.
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.close();
// });

// readline의 조건문

let count = 0;

rl.on("line", (input) => {
  console.log(`Recived : ${input}`);
  count++;
  if (count === 3) {
    rl.close();
  }
});
