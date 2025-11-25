const waktuT12 = document.getElementById("waktuT12")
const cuaca = document.getElementById("cuaca")
const arahAngin = document.getElementById("arahAngin")
const kelembapan = document.getElementById("kelembapan")
const suhu = document.getElementById("suhu")

const aksesApiBmgk = "https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=73.12.04.1003"

// data bmkg
fetch(aksesApiBmgk)
    .then(res => res.json())
    .then(result => {
        console.log(result);

        waktuT12.value = result.data[0].cuaca[0][0].local_datetime;
        arahAngin.value = `${result.data[0].cuaca[0][0].wd_deg} derajat`;
        suhu.value = `${result.data[0].cuaca[0][0].t} derajat`;
        kelembapan.value = `${result.data[0].cuaca[0][0].hu}%`;
        cuaca.value = result.data[0].cuaca[0][0].weather_desc;
    })
