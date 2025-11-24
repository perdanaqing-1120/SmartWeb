// setup
const endPoint = "http://192.168.1.29"
const statusWiFi = document.getElementById("status")
const kelembapan = document.getElementById("kelembapan")
const suhu = document.getElementById("suhu")

// status
setInterval(() => {
    fetch(`${endPoint}/connect`)
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response.text()
        })
        .then(data => {
            statusWiFi.value = data
        })
        .catch(err => {
            console.log(err.message);
            statusWiFi.value = "Connections"
        })
}, 2000);

// lampu
function on() {
    console.log("aktif");
    fetch(`${endPoint}/on`, {
        method: "POST"
    })
        .then(response => response.text())
        .then(result => console.log(result))
}

function off() {
    fetch(`${endPoint}/off`, {
        method: "POST"
    })
        .then(response => response.text())
        .then(result => console.log(result))
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
}, 2500);
