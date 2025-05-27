// Array to store community events
const communityEvents = [
  { name: "Workshop on Baking", category: "Cooking" },
  { name: "Jazz Night", category: "Music" },
  { name: "Guitar Lessons", category: "Music" },
];

// Add new events using .push()
communityEvents.push({ name: "Painting Class", category: "Art" });
communityEvents.push({ name: "Open Mic", category: "Music" });

// Use .filter() to show only music events
const musicEvents = communityEvents.filter(event => event.category === "Music");

// Use .map() to format display cards
const displayCards = communityEvents.map(event => `${event.name}`);

// Output results
console.log(musicEvents);
/* [
  { name: "Jazz Night", category: "Music" },
  { name: "Guitar Lessons", category: "Music" },
  { name: "Open Mic", category: "Music" }
] */

console.log(displayCards);
/* [
  "Workshop on Baking",
  "Jazz Night",
  "Guitar Lessons",
  "Painting Class",
  "Open Mic"
] */
