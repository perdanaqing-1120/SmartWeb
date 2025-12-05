// setup
const statusWiFi = document.getElementById("status")
const kelembapan = document.getElementById("kelembapan")
const outputAlarmCondition = document.getElementById("outputAlarmCondition")
const suhu = document.getElementById("suhu")
const endPoint = "http://192.168.1.29"

// status
setInterval(() => {
    fetch(`${endPoint}/checkConnect`)
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response.text()
        })
        .then(data => {
            statusWiFi.value = "Connected"
        })
        .catch(err => {
            console.log(err.message);
            statusWiFi.value = "Connect..."
        })
}, 2000);

// lampu
function on() {
    console.log("aktif");
    fetch(`${endPoint}/on`, {
        method: "POST"
    })
        .then(response => response.text())
        .then(result => { return })
}

function off() {
    fetch(`${endPoint}/off`, {
        method: "POST"
    })
        .then(response => response.text())
        .then(result => { return })
}

// sensor
let count = false

setInterval(() => {
    count = !count

    if (count) {
        // suhu
        fetch(`${endPoint}/suhu`, {
            method: "POST"
        })
            .then(response => response.text())
            .then(result => {
                if (result > 0) {
                    suhu.value = result
                }
            })
    } else {
        // kelembapan
        fetch(`${endPoint}/kelembapan`, {
            method: "POST"
        })
            .then(response => response.text())
            .then(result => {
                if (result > 0) {
                    kelembapan.value = result
                }
            })
    }
}, 2000);

// set timer
function alarmONOFF() {
    fetch(`${endPoint}/alarmONOFF`)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            outputAlarmCondition.value = result;
        })
}

function alarmRESET() {
    fetch(`${endPoint}/alarmRESET`)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            outputAlarmCondition.value = result;
        })
}