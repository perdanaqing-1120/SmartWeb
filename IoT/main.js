const endPoint = "http://192.168.1.29"
const kelembapan = document.getElementById("kelembapan")
const suhu = document.getElementById("suhu")

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

setInterval(() => {
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
}, 4000);

setInterval(() => {
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

}, 2000)
