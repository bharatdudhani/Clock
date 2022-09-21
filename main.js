function theTime() {
    const dateTime = new Date();
    const time = dateTime.toLocaleTimeString();
    document.body.innerHTML = `<div class="clock"><span>${time}</span></div>`
}

setInterval(theTime, 1000);
