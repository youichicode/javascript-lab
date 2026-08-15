// Switch compares the switch expression against each case using strict equality (===).
// The first matching case runs.
// If no case matches, the default case runs.

// The switch expression does NOT have to be true/false.
// It can be any value: string, number, boolean, etc.

const productPriceCheck = "Coca-Cola";

switch (productPriceCheck) {
  default:
    console.log("Unable to identify the product");
    break;
  case "10 Pencil Set":
    console.log("Pencil set is $10");
    break;
  case "Coca-Cola":
    console.log("Coca-Cola is $1.55");
    break;
}

const age = 15;

// age >= 18 produces either true or false.
// Therefore, switch receives a boolean value.

switch (age >= 18) {
  default:
    console.log("Unfortunately, You're not legal to get a driver's license");
    break;
  case true:
    console.log("Hey, You're already legal to get a driver's license!");
    break;
}
