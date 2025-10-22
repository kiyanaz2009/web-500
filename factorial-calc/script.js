let num = prompt("enter a number:");
num = Number(num);

let result = 1;

for (let i = 1; i <= num; i++) {
  result *= i;
}

alert("Factorial of " + num + " is: " + result);