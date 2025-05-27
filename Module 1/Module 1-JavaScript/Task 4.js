// Event storage
const events = [];

// Add a new event
function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
}

// Register user and update seats
function registerUser(event) {
  if (event.seats > 0) {
    event.seats--;
    console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
  } else {
    console.log(`Sorry, no seats left for ${event.name}.`);
  }
}

// Closure to track total registrations per category
function registrationTracker(category) {
  let totalRegistrations = 0;
  return function(event) {
    if (event.category === category) {
      totalRegistrations += 1;
      console.log(`Total registrations for ${category}: ${totalRegistrations}`);
    }
  };
}

// Higher-order function to filter events by a callback condition
function filterEventsByCategory(events, callback) {
  return events.filter(callback);
}

// Usage example:

// Adding events
addEvent("Community Cleanup", "2025-06-15", 10, "Environment");
addEvent("Tree Planting", "2025-07-20", 5, "Environment");
addEvent("Cooking Workshop", "2025-05-10", 8, "Lifestyle");

// Register users
registerUser(events[0]); // seats: 9
registerUser(events[1]); // seats: 4

// Create a tracker for "Environment" category
const trackEnvironmentRegs = registrationTracker("Environment");

// Track registrations for each event after registration
trackEnvironmentRegs(events[0]);
trackEnvironmentRegs(events[1]);
trackEnvironmentRegs(events[2]); // No output since different category

// Filter events dynamically using a callback
const environmentEvents = filterEventsByCategory(events, event => event.category === "Environment");
console.log(environmentEvents);
