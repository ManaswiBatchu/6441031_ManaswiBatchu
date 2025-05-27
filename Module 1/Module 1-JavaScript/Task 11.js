const form = document.querySelector("#registrationForm");
const successMsg = document.querySelector("#successMsg");

form.addEventListener("submit", e => {
  e.preventDefault();

  // Clear previous errors and success
  successMsg.textContent = "";
  form.querySelectorAll(".error").forEach(span => (span.textContent = ""));

  const { name, email, event: eventSelect } = form.elements;
  let valid = true;

  // Validate name
  if (!name.value.trim()) {
    form.querySelector("#nameError").textContent = "Name is required.";
    valid = false;
  }

  // Validate email (simple regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailRegex.test(email.value)) {
    form.querySelector("#emailError").textContent = "Valid email is required.";
    valid = false;
  }

  // Validate event selection
  if (!eventSelect.value) {
    form.querySelector("#eventError").textContent = "Please select an event.";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = `Thank you, ${name.value}! You registered for ${eventSelect.value}.`;
    form.reset();
  }
});
