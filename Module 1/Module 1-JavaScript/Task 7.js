// Sample events array
const events = [
  { id: 1, name: "Community Cleanup", seats: 10 },
  { id: 2, name: "Tree Planting", seats: 5 },
];

// Get container element where events will be displayed
const eventsContainer = document.querySelector("#eventsContainer");

// Function to create and display event cards
function renderEvents() {
  // Clear existing content
  eventsContainer.innerHTML = "";

  events.forEach(event => {
    // Create card div
    const card = document.createElement("div");
    card.className = "event-card";

    // Event name
    const title = document.createElement("h3");
    title.textContent = event.name;

    // Seats info
    const seatsInfo = document.createElement("p");
    seatsInfo.textContent = `Seats available: ${event.seats}`;

    // Register button
    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.seats === 0;

    // Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel Registration";
    cancelBtn.disabled = event.seats === 10; // Assuming 10 max seats

    // Register click handler
    registerBtn.addEventListener("click", () => {
      if (event.seats > 0) {
        event.seats--;
        updateUI();
      }
    });

    // Cancel click handler
    cancelBtn.addEventListener("click", () => {
      if (event.seats < 10) {
        event.seats++;
        updateUI();
      }
    });

    // Append elements to card
    card.appendChild(title);
    card.appendChild(seatsInfo);
    card.appendChild(registerBtn);
    card.appendChild(cancelBtn);

    // Append card to container
    eventsContainer.appendChild(card);
  });
}

// Update UI after register/cancel actions
function updateUI() {
  renderEvents();
}

// Initial render
renderEvents();
