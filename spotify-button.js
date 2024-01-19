// spotify-button.js

// Retrieve the totalCompliments from localStorage or default to 0
let totalCompliments = parseInt(localStorage.getItem('totalCompliments')) || 0;

// Function to update the totalCompliments count and button visibility
function updateTotalCompliments() {
  let totalCompliments = parseInt(localStorage.getItem('totalCompliments')) || 0;

    localStorage.setItem('totalCompliments', totalCompliments); // Update local storage

    // Check if count is at least 50
    if (totalCompliments >= 49) {
        document.querySelector('.center4').style.display = 'block';
    }
}

document.getElementById('myButton').addEventListener('click', () => {
    // Your existing button click logic
    updateTotalCompliments();
});

document.getElementById('spotifyButton').addEventListener('click', () => {
    window.location.href = 'https://open.spotify.com/playlist/1AG3pLrOXKnO6ZWOyqiza9?si=bd02766cc8c2436f';
});

// Initial check on page load
window.addEventListener('load', function() {
    if (totalCompliments >= 49) {
        document.querySelector('.center4').style.display = 'block';
    }
});

// Check on every interval (adjust the interval duration as needed)
setInterval(function () {
    if (totalCompliments >= 49) {
        document.querySelector('.center4').style.display = 'block';
    }
}, 1000); // Check every second, adjust as needed
