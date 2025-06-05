//your JS code here. If required.


// unknown

// script.js

document.getElementById("btn").addEventListener("click", () => {
  const input = document.getElementById("ip").value;
  const outputDiv = document.getElementById("output");

  // Clear previous output
  outputDiv.innerHTML = "";

  // Convert input to number
  const num = Number(input);

  // Validate input
  if (isNaN(num)) {
    outputDiv.innerHTML = "Please enter a valid number.";
    return;
  }

  // Function to simulate async operation with delay
  function delayPromise(operation, time) {
    return (value) =>
      new Promise((resolve) => {
        setTimeout(() => {
          const result = operation(value);
          outputDiv.innerHTML = `Result: ${result}`;
          resolve(result);
        }, time);
      });
  }

  // Start promise chain
  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.innerHTML = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    .then(
      delayPromise((x) => x * 2, 2000) // Multiply by 2
    )
    .then(
      delayPromise((x) => x - 3, 1000) // Subtract 3
    )
    .then(
      delayPromise((x) => x / 2, 1000) // Divide by 2
    )
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const finalResult = result + 10;
          outputDiv.innerHTML = `Final Result: ${finalResult}`;
          resolve(finalResult);
        }, 1000);
      });
    });
});
