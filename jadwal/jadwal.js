const timeTable = document.getElementById("timeTable")
const timeTableSubmit = document.getElementById("timeTableSubmit")

let timeTableValue = timeTable.value

timeTableSubmit.addEventListener('click', count => {
    timeTableValue = parseInt(timeTable.value) + 1

    const tbody = document.getElementById("result")

    // hapus isi lama
    tbody.innerHTML = ""

    for (let i = 1; i < timeTableValue; i++) {

        const tr = document.createElement("tr")

        const th = document.createElement("th")
        th.className = "jadwal"
        th.scope = "row"

        const div = document.createElement("div")
        div.className = "form-check"

        const inputCheck = document.createElement("input")
        inputCheck.className = "form-check-input"
        inputCheck.type = "checkbox"
        inputCheck.id = "checkDefault" + i

        const label = document.createElement("label")
        label.className = "form-check-label"
        label.htmlFor = "checkDefault" + i
        label.textContent = i

        div.appendChild(inputCheck)
        div.appendChild(label)
        th.appendChild(div)

        const tdText = document.createElement("td")
        const inputText = document.createElement("input")
        inputText.placeholder = "masukkan"
        inputText.type = "text"
        tdText.appendChild(inputText)

        const tdTime = document.createElement("td")
        const inputTime = document.createElement("input")
        inputTime.type = "time"
        tdTime.appendChild(inputTime)

        tr.appendChild(th)
        tr.appendChild(tdText)
        tr.appendChild(tdTime)

        tbody.appendChild(tr)
    }
})
