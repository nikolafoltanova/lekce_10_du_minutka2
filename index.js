'use strict';

console.log('funguju!');

// minutka 2
const startTimer = (event) => {
    event.preventDefault() // zastaveni timeru
    
    let time = Number(document.querySelector('.time-input').value)
    let seconds = document.querySelector(".alarm__seconds")
    let alarm = document.querySelector('.alarm')
    seconds.textContent = String(time)
    let countdown = () => {
        if (time>0) {
            time--
            seconds.textContent = String(time)
        } else if (time <=0) {
            clearInterval(timer) // zastaveni timeru
            alarm.classList.add('alarm--ring')
            document.querySelector('audio').play()
        }
        else {
            console.log("Nefunguje mi to")
        }
    }
    let timer = setInterval(countdown,1000)
}

let button = document.querySelector(".button")
button.addEventListener("click", startTimer)