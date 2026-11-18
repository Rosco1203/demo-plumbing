document.getElementById('demo-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-msg').textContent =
    'Thanks! This is a demo, so nothing was sent. On a live site this goes straight to the office by email.';
});
