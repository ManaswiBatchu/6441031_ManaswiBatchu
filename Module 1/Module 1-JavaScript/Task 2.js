// Event details
const eventName = "Community Cleanup";
const eventDate = "2025-06-15";
let availableSeats = 25;

// Display event info using template literals
console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);

// Simulate a registration - decrease seats by 1
availableSeats--;

// Log updated seats
console.log(`Seats left after registration: ${availableSeats}`);
