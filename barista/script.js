let count = Number(prompt("How many coffees would you like?"));
let total = 0;
let latteCount = 0;

for (let i = 1; i <= count; i++) {
  let type = prompt("Enter the type of coffee number " + i + " (latte / americano / matcha):").toLowerCase();

  switch (type) {
    case "latte":
      total += 100;
      latteCount++;
      break;
    case "americano":
      total += 80;
      break;
    case "matcha":
      total += 120;
      break;
    default:
      alert("Invalid coffee type!");
      i--; 
  }
}

console.log(count + " coffees ordered");
console.log("Initial price: " + total + " Toman");

if (count > 3) {
  let discount = total * 0.1;
  total -= discount;
  console.log("10% discount applied: " + discount + " Toman");
}

if (latteCount === count) {
  let loyaltyDiscount = total * 0.2;
  total -= loyaltyDiscount;
  console.log("Loyal to latte! Extra 20% discount applied: " + loyaltyDiscount + " Toman");
}

console.log("Final price: " + total + " Toman");
