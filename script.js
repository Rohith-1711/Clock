setInterval(() => {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format and format with leading zeros
    document.getElementById("hrs").innerHTML = String(hours % 12 || 12).padStart(2, "0");
    document.getElementById("min").innerHTML = String(minutes).padStart(2, "0");
    document.getElementById("sec").innerHTML = String(seconds).padStart(2, "0");
    document.getElementById("ampm").innerHTML = ampm;
}, 1000);
