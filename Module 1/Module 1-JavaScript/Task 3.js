const events = [
  { name: "Community Cleanup", date: "2025-06-15", seats: 10 },
  { name: "Tree Planting", date: "2024-12-01", seats: 0 },
  { name: "Beach Sweep", date: "2025-04-20", seats: 5 },
];

const today = new Date();

function isEventValid(event) {
  const eventDate = new Date(event.date);
  return eventDate >= today && event.seats > 0;
}

// Display valid events
events.forEach(event => {
  if (isEventValid(event)) {
    console.log(`Event: ${event.name}, Date: ${event.date}, Seats: ${event.seats}`);
  } else {
    // Hide past or full events (no console output or could log info)
    console.log(`Event "${event.name}" is not available.`);
  }
});

// Registration function with error handling
function register(event) {
  try {
    if (!isEventValid(event)) {
      throw new Error("Event is past or full");
    }
    event.seats--;
    console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
  } catch (error) {
    console.error(`Registration failed: ${error.message}`);
  }
}

// Example registrations
register(events[0]);  // Success
register(events[1]);  // Error (full event)
