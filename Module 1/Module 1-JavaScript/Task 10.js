const events = [
  { id: 1, name: "Cleanup", category: "Env", seats: 10 },
  { id: 2, name: "Jazz Night", category: "Music", seats: 5 },
  { id: 3, name: "Cooking", category: "Cooking", seats: 8 },
];

// Function with default parameter and destructuring
const filterEvents = (eventsList = [], category = "") => {
  const eventsCopy = [...eventsList]; // clone using spread
  return eventsCopy.filter(({ category: cat }) => !category || cat === category);
};

// Usage example
const musicEvents = filterEvents(events, "Music");
console.log(musicEvents);
