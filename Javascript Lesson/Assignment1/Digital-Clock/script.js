let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

setInterval(() => {
    let time = new Date();
    hours.textContent = String(time.getHours()).padStart(2, "0");
    minutes.textContent = String(time.getMinutes()).padStart(2, "0");
    seconds.textContent = String(time.getSeconds()).padStart(2, "0");
}, 1000);
