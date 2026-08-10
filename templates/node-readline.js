const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter Something: ", (input) => {
  console.log(`You entered: ${input}`);
  console.log(`Type: ${typeof input}`);

  rl.close();
});
