const waktuT12 = document.getElementById("waktuT12")
const cuaca = document.getElementById("cuaca")
const arahAngin = document.getElementById("arahAngin")
const kelembapan = document.getElementById("kelembapan")
const suhu = document.getElementById("suhu")
const prediksiCuaca = document.getElementById("prediksiCuaca")

const aksesApiBmgk = "https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=73.12.04.1003"

// data bmkg
fetch(aksesApiBmgk)
    .then(res => res.json())
    .then(result => {
        console.log(result);

        // waktuT12.value = result.data[0].cuaca[0][0].local_datetime;
        // arahAngin.value = `${result.data[0].cuaca[0][0].wd_deg} derajat`;
        // suhu.value = `${result.data[0].cuaca[0][0].t} derajat`;
        // kelembapan.value = `${result.data[0].cuaca[0][0].hu}%`;
        // cuaca.value = result.data[0].cuaca[0][0].weather_desc;

        let hariPrediksi = 1;
        let i = 0;
        const waktuPrediksi = result.data[0].cuaca[hariPrediksi];

        waktuPrediksi.forEach(waktuPrediksi => {
            const zonaWaktu = document.createElement("input");
            const namaZonaWaktu = document.createElement("h4");
            zonaWaktu.classList = "input"
            namaZonaWaktu.textContent = "waktu"
            zonaWaktu.value = result.data[0].cuaca[hariPrediksi][i].local_datetime
            prediksiCuaca.appendChild(namaZonaWaktu);
            prediksiCuaca.appendChild(zonaWaktu);


            const arahAngin = document.createElement("input");
            arahAngin.classList = "input"
            let arahAnginTrans = result.data[0].cuaca[hariPrediksi][i].wd_to
            if (arahAnginTrans == "E") {
                arahAnginTrans = "Timur"
            } else if (arahAnginTrans == "NE") {
                arahAnginTrans = "Timur Laut"
            } else if (arahAnginTrans == "SE") {
                arahAnginTrans = "Tenggara"
            } else if (arahAnginTrans == "NW") {
                arahAnginTrans = "Barat Laut"
            }
            arahAngin.value = arahAnginTrans
            prediksiCuaca.appendChild(arahAngin);


            const suhu = document.createElement("input");
            suhu.classList = "input"
            suhu.value = result.data[0].cuaca[hariPrediksi][i].t + "*C"
            prediksiCuaca.appendChild(suhu);


            const kelembaapan = document.createElement("input");
            kelembaapan.classList = "input"
            kelembaapan.value = result.data[0].cuaca[hariPrediksi][i].hu + "%"
            prediksiCuaca.appendChild(kelembaapan);


            const cuaca = document.createElement("input");
            cuaca.classList = "input"
            cuaca.value = result.data[0].cuaca[hariPrediksi][i].weather_desc
            prediksiCuaca.appendChild(cuaca);

            ++i
        });
    })