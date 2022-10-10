// const a = 1;
// const variablesFunc = () => {
//   const b = 5;
//   console.log("func", b);
// };
// // this is function calling
// /*variablesFunc();
// console.log("outer", a);*/
// console.log("this is comment");

function sumFunc() {
//   const a = Number.parseFloat(prompt("Enter value1"));
//   const b = prompt("Enter value2");
//   console.log(a == b);
//   console.log(a === b);
//   console.log(a < b);
//   console.log(a > b);
//   console.log(a != b);
//   console.log(a <= b);
//   console.log(a >= b);
//   console.log(a || b);
//   console.log(a && b);
//   if (a == 10 || a == 20) {
//     console.log("a is equal to 10 or 20");
//   }
//   if (a == 10 && b == 20) {
//     console.log("a is equal to 10 and b is equal to 20");
//   }
//      console.log(a + b);
  const a = Number.parseInt(prompt("Enter value1"));
  const b = Number.parseInt(prompt("Enter value2"));
  console.log(Math.round(a/b)>0?Math.round(a/b):0);
}

sumFunc();
