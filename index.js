function updateClock(){
    let now= new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds = now.getSeconds();

    let AmPm= hours>=12? "PM" : "AM";
    
    hours = hours % 12 || 12;

    minutes = minutes < 10 ? "0"+minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time= `${hours}:${minutes}:${seconds} ${AmPm}`;

    let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    let date = now.toLocaleDateString("en-US", options);

    document.getElementById("clock").textContent = time;
    document.getElementById("date").textContent = date;

}

setInterval(updateClock, 1000);
updateClock();