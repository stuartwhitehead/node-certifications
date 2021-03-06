function closure(greeting) {
  return (name) => `${greeting} ${name}!`
}

const welcome = closure("Welcome");
const goodbye = closure("Goodbye");

//GIT test.
console.log(welcome("Stuart"));
console.log(goodbye("Stuart"));