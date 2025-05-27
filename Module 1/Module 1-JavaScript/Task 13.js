form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form submission started");

  const { name, email, event: eventSelect } = form.elements;

  const userData = {
    name: name.value.trim(),
    email: email.value.trim(),
    event: eventSelect.value,
  };

  console.log("User data:", userData);

  try {
    console.log("Sending registration request...");

    // Simulate fetch with delay
    const fakeFetch = () =>
      new Promise((resolve) => setTimeout(() => resolve({ ok: true }), 1500));

    const response = await fakeFetch();

    // To debug real fetch, replace above with:
    // const response = await fetch('https://mockapi.io/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(userData),
    // });

    console.log("Response received:", response);

    if (response.ok) {
      console.log("Registration successful");
      successMsg.textContent = "Registration successful!";
      form.reset();
    } else {
      console.error("Registration failed", response);
      throw new Error("Registration failed. Please try again.");
    }
  } catch (error) {
    console.error("Error during registration:", error);
    successMsg.textContent = error.message;
  }

  console.log("Form submission ended");
});
