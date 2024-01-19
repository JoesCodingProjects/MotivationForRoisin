// notification.js

// Function to check if the user has seen the notification
function hasSeenNotification() {
    return localStorage.getItem('hasSeenNotification') === 'true';
}

// Function to set the flag indicating the user has seen the notification
function setNotificationSeen() {
    localStorage.setItem('hasSeenNotification', 'true');
}

// Function to show the notification
function showNotification() {
    new Noty({
        text: "Hi Roisin, anytime you want some motivation, Scan your keyring, click the button and AI will generate a qoute. You're going to be the best teacher and everyone is proud of you!- Your Nerdy BF, Joe xox  ",
        type: 'information',
        layout: 'center',
        timeout: false,
         // Set timeout to false so the notification won't automatically close
        closeWith: ['click'], // Close the notification when clicked
        callbacks: {
            onClose: function () {
                setNotificationSeen();
            }
        }
    }).show();
}

// Check if the user has seen the notification before
if (!hasSeenNotification()) {
    // If not, show the notification
    showNotification();
}


//localStorage.clear();