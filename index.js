
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Define the reducer function
const batteries = (total, batch) => total + batch;

// Use the reducer function with reduce()
const totalBatteries = batteryBatches.reduce(batteries, 0);

console.log(totalBatteries); // Output: Sum of all batches

