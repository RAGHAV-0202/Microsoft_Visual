

// const startBtn = document.querySelector('#start');
// const resetBtn = document.querySelector('#reset');

let seconds = 0 ;
let minutes = 0 ;
let hours = 0 ;
let ms = 0;

let zeroSeconds = 0
let zeroMinutes = 0
let zeroHours = 0
let zeroMS = 0

let timerInterval = null;
let timeStatus = "Stopped"



function stopWatch() {

    ms++
    if((ms /100) === 1) {
        ms = 0;
        seconds ++
    
        if( (seconds / 60) === 1 ) {
            seconds = 0; 
            minutes ++;

            if( (minutes / 60) === 1 ) {
                minutes = 0; 
                hours ++;
                }
        }
    } 

    if(ms < 10) {
        zeroMS = '0' + ms.toString();
    }else {
        zeroMS = ms
    }
    if(seconds < 10) {
        zeroSeconds  = "0" + seconds.toString();
    }else {
        zeroSeconds = seconds
    }
    
    if(minutes < 10) {
        zeroMinutes  = "0" + minutes.toString();
    }else {
        zeroMinutes = minutes
    }


    if(hours < 10) {
        zeroHours  = "0" + hours.toString();
    }else {
        zeroHours = hours
    }


    let displayTimer = document.getElementById('main-time').innerText  = zeroHours + ':' + zeroMinutes + ':' + zeroSeconds 
    let asdhjialjd = document.getElementById('miliS').innerText = zeroMS
}
;
// window.setInterval(start, 1000)
const startBTNdiv = document.getElementById('start')

function start(){
    
    if(timeStatus === "Stopped") {
        timerInterval = window.setInterval(stopWatch, 10)

        startBTNdiv.innerHTML = '<i class="fa-solid fa-pause fa-shake" style="--fa-animation-iteration-count: 1"></i>'
        startBTNdiv.classList.add('pause')
        startBTNdiv.classList.remove('start')

        timeStatus = 'started';       
    } else{
        window.clearInterval(timerInterval)
        document.getElementById('start').innerHTML = '<i class="fa-solid fa-play fa-shake" style="--fa-animation-iteration-count: 1"></i>'
        startBTNdiv.classList.add('start')
        startBTNdiv.classList.remove('pause')
        timeStatus = 'Stopped'
    }
}


function stop() {
    document.querySelector('#reset').innerHTML = '<i class="fa-solid fa-arrow-rotate-left fa-shake" style="--fa-animation-iteration-count: 1"> </i>'

    if(timeStatus === 'started') {
        start()
        timeStatus === 'Stopped'
    }else {
        timeStatus = 'Stopped';

        startBTNdiv.classList.add('start')
        startBTNdiv.classList.remove('pause')

        document.querySelector('#main-time').innerText = '00:00:00'
        document.querySelector('#miliS').innerText = '00'
        seconds = 0 ;
        minutes = 0 ;
        hours = 0 ;
    }
}