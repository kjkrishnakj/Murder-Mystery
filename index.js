// Code to validate team code and start the quiz

const form = document.querySelector('form');
const input = document.querySelector('#team-code');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const teamCode = input.value.trim();
  if (teamCode.length !== 6) {
    alert('Invalid team code. Please enter a 6-digit code.');
  } else {
    // Code to start the quiz and other stages
  }
});