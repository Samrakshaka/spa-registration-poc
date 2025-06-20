document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const messageDiv = document.getElementById('message');
  const submitButton = document.querySelector('button[type="submit"]');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    messageDiv.style.color = 'red';
    messageDiv.textContent = 'Invalid email format';
    return;
  }
  if (password.length < 6) {
    messageDiv.style.color = 'red';
    messageDiv.textContent = 'Password must be at least 6 characters';
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'Registering...';
  messageDiv.textContent = '';

  try {
    const response = await fetch('https://registration-api.your-username.workers.dev/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    messageDiv.style.color = response.ok ? 'green' : 'red';
    messageDiv.textContent = data.message;
	if (response.ok) {
	  document.getElementById('register-form').reset();
	}
  } catch (error) {
    messageDiv.style.color = 'red';
    messageDiv.textContent = 'Error: Could not connect to server';
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Register';
  }
});
