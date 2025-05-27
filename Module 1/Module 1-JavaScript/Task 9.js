// Using fetch with then/catch
const loadingSpinner = document.querySelector("#loading");

function fetchEvents() {
  loadingSpinner.style.display = "block";
  fetch("https://mockapi.io/events")  // replace with actual mock API URL
    .then(response => {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    })
    .then(data => {
      loadingSpinner.style.display = "none";
      console.log("Events fetched:", data);
      // renderEvents(data); // function to display events
    })
    .catch(error => {
      loadingSpinner.style.display = "none";
      console.error("Fetch error:", error);
    });
}

fetchEvents();

// Using async/await
async function fetchEventsAsync() {
  loadingSpinner.style.display = "block";
  try {
    const response = await fetch("https://mockapi.io/events");
    if (!response.ok) throw new Error("Network error");
    const data = await response.json();
    console.log("Events fetched async:", data);
    // renderEvents(data);
  } catch (error) {
    console.error("Fetch error async:", error);
  } finally {
    loadingSpinner.style.display = "none";
  }
}

fetchEventsAsync();
