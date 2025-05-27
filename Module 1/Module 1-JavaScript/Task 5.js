// Define Event class
class Event {
  constructor(name, date, seats) {
    this.name = name;
    this.date = new Date(date);
    this.seats = seats;
  }

  // Method to check availability
  checkAvailability() {
    const today = new Date();
    return this.date >= today && this.seats > 0;
  }
}

// Create event instances
const event1 = new Event("Community Cleanup", "2025-06-15", 10);
const event2 = new Event("Tree Planting", "2024-12-01", 0);

// Check availability
console.log(`${event1.name} available?`, event1.checkAvailability()); // true
console.log(`${event2.name} available?`, event2.checkAvailability()); // false

// List object keys and values
console.log(Object.entries(event1)); 
// Output example: [["name", "Community Cleanup"], ["date", Date Object], ["seats", 10]]
