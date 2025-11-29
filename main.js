const btnradio1 = document.getElementById("btnradio1")
const btnradio2 = document.getElementById("btnradio2")

const waktuT12 = document.getElementById("waktuT12")
const cuaca = document.getElementById("cuaca")
const arahAngin = document.getElementById("arahAngin")
const kelembapan = document.getElementById("kelembapan")
const suhu = document.getElementById("suhu")
const prediksiCuaca = document.getElementById("prediksiCuaca")

const aksesApiBmgk = "https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=73.12.04.1003"

let hariPrediksiCount = 0;

function hariPrediksi(hari) {
    hariPrediksiCount = hari;
    prediksiCuaca.innerHTML = ""; // reset tampilan
    let i = 0; // reset index tiap klik

    fetch(aksesApiBmgk)
        .then(res => res.json())
        .then(result => {            

            const dataHari = result.data[0].cuaca[hariPrediksiCount];

            dataHari.forEach(item => {
                // Waktu
                const labelWaktu = document.createElement("h4");
                labelWaktu.textContent = "Waktu";
                labelWaktu.className = "mt-4";
                const inputWaktu = document.createElement("input");
                inputWaktu.className = "input"
                inputWaktu.readOnly = true;
                inputWaktu.value = item.local_datetime;
                prediksiCuaca.appendChild(labelWaktu);
                prediksiCuaca.appendChild(inputWaktu);

                // Arah angin
                const arah = document.createElement("input");
                arah.className = "input";
                arah.readOnly = true;

                let arahAnginTrans = item.wd;
                if (arahAnginTrans == "E") arahAnginTrans = "Timur";
                else if (arahAnginTrans == "N") arahAnginTrans = "Utara";
                else if (arahAnginTrans == "W") arahAnginTrans = "Barat";
                else if (arahAnginTrans == "S") arahAnginTrans = "Selatan";
                else if (arahAnginTrans == "NE") arahAnginTrans = "Timur Laut";
                else if (arahAnginTrans == "SE") arahAnginTrans = "Tenggara";
                else if (arahAnginTrans == "NW") arahAnginTrans = "Barat Laut";
                else if (arahAnginTrans == "SW") arahAnginTrans = "Barat Daya";

                arah.value = arahAnginTrans;
                prediksiCuaca.appendChild(arah);

                // Suhu
                const suhuEl = document.createElement("input");
                suhuEl.className = "input";
                suhuEl.readOnly = true;
                suhuEl.value = item.t + "°C";
                prediksiCuaca.appendChild(suhuEl);

                // Kelembapan
                const kelembapanEl = document.createElement("input");
                kelembapanEl.className = "input";
                kelembapanEl.readOnly = true;
                kelembapanEl.value = item.hu + "%";
                prediksiCuaca.appendChild(kelembapanEl);

                // Cuaca
                const cuacaEl = document.createElement("input");
                cuacaEl.className = "input";
                cuacaEl.readOnly = true;
                cuacaEl.value = item.weather_desc;
                prediksiCuaca.appendChild(cuacaEl);

                i++;
            });
        });
}
hariPrediksi(0)