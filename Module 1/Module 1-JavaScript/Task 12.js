const form = document.querySelector("#registrationForm");
const successMsg = document.querySelector("#successMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  successMsg.textContent = "";

  const { name, email, event: eventSelect } = form.elements;
  const userData = {
    name: name.value.trim(),
    email: email.value.trim(),
    event: eventSelect.value,
  };

  try {
    successMsg.textContent = "Submitting...";
    // Simulate delayed response with setTimeout wrapped in a Promise
    const fakeFetch = () =>
      new Promise((resolve) => setTimeout(() => resolve({ ok: true }), 1500));

    const response = await fakeFetch();

    // Normally you’d use:
    // const response = await fetch('https://mockapi.io/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(userData),
    // });

    if (response.ok) {
      successMsg.textContent = "Registration successful!";
      form.reset();
    } else {
      throw new Error("Registration failed. Please try again.");
    }
  } catch (error) {
    successMsg.textContent = error.message;
  }
});
