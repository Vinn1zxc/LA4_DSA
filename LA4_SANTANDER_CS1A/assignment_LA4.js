let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

console.log("Queue:", queue);

// Add customer
let name = prompt("Enter your name:");
queue.push(name);
alert("Hi " + name + "! Your number is " + (queue.indexOf(name) + 1));

console.log("Updated Queue:", queue);

// Service by number
let num = parseInt(prompt("Enter number to service:"));

if (num > 0 && num <= queue.length) {
  alert("Now serving: " + queue[num - 1]);
  queue.splice(num - 1, 1);
  console.log("Queue after servicing:", queue);
} else {
  alert("Invalid number.");
}