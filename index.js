const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const seconds = document.getElementById("seconds")
setInterval(function(){
    let d = new Date()
    let hourTime = d.getHours()
    let minuteTime = d.getMinutes()
    let secondTime = d.getSeconds()
    hour.style.transform = `rotate(${hourTime*30+minuteTime/2}deg)`
    minute.style.transform = `rotate(${minuteTime*6+secondTime/10}deg)`
    seconds.style.transform = `rotate(${secondTime*6}deg)`
}, 1000)