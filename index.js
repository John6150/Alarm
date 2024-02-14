let hr = document.getElementById("hour")
let ring = document.getElementById("ring")
let tim = document.getElementById("tim")
let min = document.getElementById("min")
let now = new Date()
let nowHr = 0
let myHr = 0

function setAlarm() {
    myHr = (hr.value * 3600000) + (min.value * 60000)

    let timing = setInterval(() => {
        now = new Date()
        let nowHr2 = now.getHours() * 3600000 + now.getMinutes() * 60000 + now.getSeconds() * 1000

        nowHr = now.getHours()
        nowMin = now.getMinutes()

        // tim.innerHTML = ''
        tim.innerHTML = `Alarm sets off in ${(myHr - nowHr2) / 1000} sec`

        if (hr.value == nowHr && min.value == nowMin) {
            ring.play()
            console.log("Trigger");
            tim.innerHTML = `It's time`
        }

        // console.log("hey");
    }, 1000)
}

