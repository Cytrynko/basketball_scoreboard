let homeScore = document.getElementById("home-score")
let addOneHome = document.getElementById("home_add-one")
let addTwoHome = document.getElementById("home_add-two")
let addThreeHome = document.getElementById("home_add-three")

let guestScore = document.getElementById("guest-score")
let addOneGuest = document.getElementById("guest_add-one")
let addTwoGuest = document.getElementById("guest_add-two")
let addThreeGuest = document.getElementById("guest_add-three")

addOneHome.addEventListener("click", function() {
    homeScore.textContent++
})

addTwoHome.addEventListener("click", function() {
    homeScore.textContent = Number(homeScore.textContent) + 2
})

addThreeHome.addEventListener("click", function() {
    homeScore.textContent = Number(homeScore.textContent) + 3
})


addOneGuest.addEventListener("click", function() {
    guestScore.textContent++
})

addTwoGuest.addEventListener("click", function() {
    guestScore.textContent = Number(guestScore.textContent) + 2
})

addThreeGuest.addEventListener("click", function() {
    guestScore.textContent = Number(guestScore.textContent) + 3
})

let interval
let timeSeconds = document.getElementById("time-seconds")
let seconds = 0
let timeTens = document.getElementById("time-tens")
let tens = 0

let timeStart = document.getElementById("time-start")  
let timeStop = document.getElementById("time-stop") 
let timeReset = document.getElementById("time-reset")  

timeStart.addEventListener("click", function() {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

timeStop.addEventListener("click", function() {
    clearInterval(interval)
})

timeReset.addEventListener("click", function() {
    clearInterval(interval)
    seconds = "00"
    tens = "00"
    timeSeconds.innerHTML = seconds
    timeTens.innerHTML = tens
})

function startTimer() {
    tens++

    if(tens <= 9) {
        timeTens.innerHTML = "0" + tens
    }

    if(tens > 9) {
        timeTens.innerHTML = tens
    } 

    if(tens > 99) {
        seconds++
        timeSeconds.innerHTML = "0" + seconds
        tens = 0
        timeTens.innerHTML = "0" + 0
    }

    if(seconds > 9) {
        timeSeconds.innerHTML = seconds
    }
}