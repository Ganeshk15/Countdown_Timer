let countdownInterval;
let eventDate;

// Function to start countdown
function setCountdown() {
    clearInterval(countdownInterval); // Clear previous countdown if running
    const inputDate = document.getElementById("event-input").value;
    
    if (!inputDate) {
        alert("Please select a date and time!");
        return;
    }
    
    eventDate = new Date(inputDate).getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours;
            document.getElementById("minutes").textContent = minutes;
            document.getElementById("seconds").textContent = seconds;
        } else {
            document.querySelector(".countdown").innerHTML = "<h2>🎉 Event Started! 🎊</h2>";
            clearInterval(countdownInterval);
        }
    }

    // Update countdown every second
    countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Function to reset countdown
function resetCountdown() {
    clearInterval(countdownInterval); // Stop any ongoing countdown
    document.getElementById("event-input").value = ""; // Clear input field
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.querySelector(".countdown").innerHTML = "<h2>⏳ Countdown Timer</h2>"; // Reset message
}

// Function to edit the title
function editTitle() {
    const titleInput = document.getElementById("event-title");
    const newTitle = prompt("Enter the new title for your countdown timer:", titleInput.value);
    
    if (newTitle && newTitle.trim() !== "") {
        titleInput.value = newTitle;
    }
}
