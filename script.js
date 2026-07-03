// Update the clock every second
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros for single-digit values
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("clock").innerText = hours + ":" + minutes + ":" + seconds;
    setTimeout(updateClock, 1000);
}

// Start the scare animation
function startTerror() {
    alert("You entered the haunted room!\n\nThe horror begins... 👻");
    document.body.style.background = "url('https://i.imgur.com/7eLCYpU.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "black";
    document.body.style.fontSize = "2em";
    document.body.style.fontFamily = "monospace";
    document.body.style.textShadow = "none";
    document.body.style.padding = "20px";

    // Scare message
    alert("You are not alone... 🕯️");
}

// Start clock on load
window.onload = function() {
    updateClock();
};
