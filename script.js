document.getElementById('register-form').addEventListener('submit', async (e) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const messageDiv = document.getElementById('message');

  // Placeholder for API call
  messageDiv.textContent = `Submitting: ${email}, Password: ${password}`;
});