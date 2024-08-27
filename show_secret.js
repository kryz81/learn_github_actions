const pass = process.env.PASSWORD;

if (pass === "12345!") {
  console.log("correct");
} else {
  console.log("incorrect");
}

console.log("password: " + pass);