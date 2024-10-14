// Function to reveal the surprise message
function revealMessage() {
    const message = document.getElementById('surpriseMessage');
    message.classList.remove('hidden');
    message.style.opacity = '1';

    // Optionally disable the button after click
    document.getElementById('inviteBtn').disabled = true;
    document.getElementById('inviteBtn').innerText = "See You Soon!";
}