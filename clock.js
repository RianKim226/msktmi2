const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h3");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const day = date.getDate();
    const month = date.getMonth();    
    const years = date.getFullYear();
    
    clockTitle.innerText = `${years}-${month + 1 < 10 ? `0${month+1}` : month+1}-${day < 10 ? `0${day}` : day} ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();