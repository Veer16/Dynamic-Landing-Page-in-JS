// DOM Elements
const time = document.getElementById("time"),
    greetings = document.getElementById("greetings"),
    name = document.getElementById("name"),
    focus = document.getElementById('focus');
// Option

const showAmPm = true;
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
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

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

// Get Name 
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = "[Enter Name]";
    } else {
        name.textContent = localStorage.getItem('name');
    }
}
// Set Name
function setName(e) {
    // Check the key press
    if (e.type == 'keypress') {
        // check the keytype
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerHTML);
            name.blur();
        }
    } else {
        // Implementing Blur
        localStorage.setItem('name', e.target.innerHTML);
    }
}
// Get Focus 
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = "[Enter Focus]";
    } else {
        name.textContent = localStorage.getItem('focus');
    }
}
// Set Focus

function setFocus(e) {
    if (e.type = 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerHTML);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerHTML);
    }
}
//Event Listeners for the name and the focus
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
//Run Functions
showTime();
setBgGreet();
getName();
getFocus();