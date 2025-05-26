let customerTable = {};
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

for (let i = 0; i < customers.length; i++) {
  customerTable[i + 1] = customers[i];
}

console.log("Customer Table:", customerTable);

// Add new customer
let name = prompt("Enter your name:");
let newKey = Object.keys(customerTable).length + 1;
customerTable[newKey] = name;
alert("Hi " + name + "! Your number is " + newKey);

console.log("Updated Table:", customerTable);

// Service by number
let num = parseInt(prompt("Enter number to service:"));

if (customerTable[num]) {
  alert("Now serving: " + customerTable[num]);
  delete customerTable[num];
  console.log("Table after servicing:", customerTable);
} else {
  alert("Invalid number.");
}