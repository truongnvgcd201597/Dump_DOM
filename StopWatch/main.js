const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = 'stopped';

startStopBtn.addEventListener("click", ()=>{
   if(timerStatus === 'stopped'){
       timerInterval = window.setInterval(stopWatch, 1000);
       timerStatus = 'started';
       startStopBtn.innerText = 'STOP';
    }else{
        window.clearInterval(timerInterval);
        timerStatus = 'stopped';
        startStopBtn.innerText = 'START';
    }
})

resetBtn.addEventListener('click', ()=>{
   window.clearInterval(timerInterval);
   seconds = 00;
   minutes = 00;
   hours = 00;
   displayTimers.innerText = hours + ":" + minutes + ":" + seconds;

    startStopBtn.innerText = 'START';
})
function stopWatch(){
    seconds++;

    if(seconds / 60 == 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 == 1){
            minutes = 0;
            hours ++;
        }
    }

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    }else{
        leadingSeconds = seconds;
    }

    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    }else{
        leadingMinutes = minutes;
    }

    if(hours < 10){
        leadingHours = "0" + hours.toString();
    }else{
        leadingHours = hours;
    }

    let displayTimers = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}


