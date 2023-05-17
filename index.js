// Pop-up screen
const popup = document.getElementById("popup");

// Open the pop-up screen when the page loads
window.onload = function () {
  popup.style.display = "block";
};

// Close the pop-up screen when the user clicks the close button
function closePopup() {
  popup.style.display = "none";
}

// Handle form submission
const form = document.getElementById("team-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the team code and name from the form
  const teamCode = document.getElementById("team-code").value;
  const teamName = document.getElementById("team-name").value;

  // Store the team code and name in MongoDB
  fetch("/store-team", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ teamCode, teamName }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Close the pop-up screen
      closePopup();
    })
    .catch((error) => console.error(error));
});