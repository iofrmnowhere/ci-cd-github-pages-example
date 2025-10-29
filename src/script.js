// Intentionally missing a semicolon to trigger ESLint 'semi' rule
console.log('Script loaded')

document.getElementById('greet').addEventListener('click', () => {
  alert('Hello — fix the lint error to deploy!');
});
