const events = [
  { name: "Cleanup", category: "Env", seats: 10 },
  { name: "Jazz Night", category: "Music", seats: 5 },
  { name: "Cooking", category: "Cooking", seats: 8 },
];

const container = document.querySelector("#eventsContainer");
const filter = document.querySelector("#categoryFilter");
const search = document.querySelector("#searchInput");

function render(list) {
  container.innerHTML = "";
  list.forEach(e => {
    const btn = document.createElement("button");
    btn.textContent = "Register";
    btn.disabled = e.seats === 0;
    btn.onclick = () => { e.seats--; render(filterEvents()); };

    const card = document.createElement("div");
    card.textContent = `${e.name} (${e.category}) Seats: ${e.seats}`;
    card.appendChild(btn);
    container.appendChild(card);
  });
}

function filterEvents() {
  const cat = filter.value.toLowerCase();
  const term = search.value.toLowerCase();
  return events.filter(e =>
    (cat === "" || e.category.toLowerCase() === cat) &&
    e.name.toLowerCase().includes(term)
  );
}

filter.onchange = () => render(filterEvents());
search.onkeyup = () => render(filterEvents());

render(events);
