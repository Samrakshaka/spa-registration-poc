document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const messageDiv = document.getElementById('message');

  try {
    const response = await fetch('https://registration-api.your-username.workers.dev/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    messageDiv.style.color = response.ok ? 'green' : 'red';
    messageDiv.textContent = data.message;
  } catch (error) {
    messageDiv.style.color = 'red';
    messageDiv.textContent = 'Error: Could not connect to server';
  }
});
