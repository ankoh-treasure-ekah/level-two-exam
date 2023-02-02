let watchContainer = document.querySelector('.time-container');
let hour = document.querySelector('span.hour');
let minutes = document.querySelector('span.minutes');
let seconds = document.querySelector('span.seconds');

function secondsControl() {
    if(seconds.innerHTML == "50"){
        seconds.innerHTML = '00';
        let CurrentMinute = +minutes.innerHTML + 1;
        if(minutes.innerHTML.startsWith('0')){
            if(String(CurrentMinute).length == 1){
                minutes.innerHTML = `0${CurrentMinute}`;
            }
            else {
                minutes.innerHTML = CurrentMinute;
            }
        }
        else{
            minutes.innerHTML = CurrentMinute;

        }
    }
}

function minutesControl() {
    if(minutes.innerHTML == '59'){
        minutes.innerHTML = '00';
        let CurrentHour = +hour.innerHTML + 1;
        if(hour.innerHTML.startsWith('0')){
            if(String(CurrentHour).length == 1){
                hour.innerHTML = `0${CurrentHour}`;
            }
            else {
                hour.innerHTML = CurrentHour;
            }
        }
        else{
            hour.innerHTML = CurrentHour;
        }
    }
}

function bgChanger() {
    let bg = +minutes.innerHTML%5 == 0 ? 'orange':'teal';
    watchContainer.style.background = bg;
}


const time = setInterval(() => {

    secondsControl();

    minutesControl();

    bgChanger();

    CurrentSeconds = +seconds.innerHTML + 1;
    if(seconds.innerHTML.startsWith('0')){
        if(String(CurrentSeconds).length == 1){
            seconds.innerHTML = `0${CurrentSeconds}`;
            return
            
        }
    }
    
    seconds.innerHTML = CurrentSeconds;
}, 1000)





