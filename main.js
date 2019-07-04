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
    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;

    // call this function every second
    setTimeout(showTime, 1000);

}
//Run 
showTime();