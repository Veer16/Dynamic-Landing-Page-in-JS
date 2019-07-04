// DOM Elements
const time = document.getElementById("time"),
    greetings = document.getElementById("greetings"),
    name = document.getElementById("name"),
    focus = document.getElementById('focus');

//Show time

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //Set am and pm
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12 hour format
    hour = hour % 12 || 12;

    //Output the time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    // call this function every second
    setTimeout(showTime, 1000);

}

// Add zero

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greetings

function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url(img/morning.jpg)";
        greetings.textContent = "Good Morning!"
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url(img/afternoon.jpg)";
        greetings.textContent = "Good Afternoon!"
    } else {
        // Night
        document.body.style.backgroundImage = "url(img/night.jpg)";
        greetings.textContent = "Good Night!";
        document.body.style.color = "white";
    }
}
//Run Functions
showTime();
setBgGreet();