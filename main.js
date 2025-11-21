const endPoint = "http://192.168.1.29"

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