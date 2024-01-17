document.addEventListener('DOMContentLoaded', function() {
    var myButton = document.getElementById('myButton');
    var displayText = document.getElementById('displayText');
    var totalComplimentsElement = document.getElementById('totalCompliments');
    var badgesContainer = document.getElementById('badgesContainer');

    // Initialize total compliments and badges from local storage or set to 0
    var totalCompliments = parseInt(localStorage.getItem('totalCompliments')) || 0;
    var badges = JSON.parse(localStorage.getItem('badges')) || [];

    // Update the total compliment counter on page load
    totalComplimentsElement.textContent = 'Total Compliments Recieved: ' + totalCompliments;

    // Update badges on page load
    updateBadges();

    myButton.addEventListener('click', function() {
        // Increment the total compliment counter
        totalCompliments++;

        // Update the total compliment counter
        totalComplimentsElement.textContent = 'Total Compliments Recieved: ' + totalCompliments;

        // Check for badge eligibility
        checkForBadge(totalCompliments);

        // Update the total compliment counter and badges in local storage
        localStorage.setItem('totalCompliments', totalCompliments);
        localStorage.setItem('badges', JSON.stringify(badges));

        // Update badges on the page
        updateBadges();
    });

    // Function to show the Noty badge notification
    function showBadgeNotification(badgeName) {
        new Noty({
            text: `Congratulations! You've earned the "${badgeName}" badge!`,
            type: 'success',
            theme    : 'mint',
            timeout:3750,
        
    
        }).show();
    }

    // Function to show the popup
    function showPopup(message) {
        Swal.fire({
            title: 'Hooray!',
            text: message,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }

    // Function to check for badge eligibility
    function checkForBadge(totalCompliments) {
        const badgeMilestones = [5, 10, 25, 50, 100, 200];


        for (let i = 0; i < badgeMilestones.length; i++) {
            const milestone = badgeMilestones[i];
            if (totalCompliments >= milestone && !badges.includes(milestone)) {
                // Show the Noty badge notification
                showBadgeNotification(getBadgeName(milestone));
                // Add the badge to the badges array
                badges.push(milestone);
            }
        }
        updateBadges(); // Update badges on the page after checking for eligibility
    }

    // Function to update badges on the page
    function updateBadges() {
        badgesContainer.innerHTML = ''; // Clear existing badges

        badges.forEach(badge => {
            const badgeElement = document.createElement('div');
            badgeElement.className = 'badge';
            badgeElement.textContent = getBadgeName(badge);
            badgesContainer.appendChild(badgeElement);
        });
    }
    

    // Function to get the badge name based on the number of compliments
    function getBadgeName(compliments) {
        if (compliments >= 200) {
            return 'Teaching Pro';
        } else if (compliments >= 100) {
            return 'Semi-Pro Tutor';
        } else if (compliments >= 50) {
            return 'Classroom Innovator';
        } else if (compliments >= 25) {
            return 'Placement Princess';
        } else if (compliments >= 10) {
            return 'Classroom Apprentice';
        } else if (compliments >= 5) {
            return 'Teaching Newbie';
        } else {
            return ;
        }
    }
});

//localStorage.clear();