function updateTime() {
  //Mexico city
  let mexicoElement = document.querySelector("#mx");
  let mexicoDateElement = mexicoElement.querySelector("#date");
  let mexicoTimeElement = mexicoElement.querySelector("#time");

  let mexicoTime = moment().tz("America/Mexico_City");

  mexicoDateElement.innerHTML = mexicoTime.format("MMMM Do YYYY");
  mexicoTimeElement.innerHTML = mexicoTime.format("hh:mm:ss a");

  //Amsterdam
  let amsterdamElement = document.querySelector("#ams");
  let amsterdamDateElement = amsterdamElement.querySelector("#date");
  let amsterdamTimeElement = amsterdamElement.querySelector("#time");

  let amsterdamTime = moment().tz("Europe/Amsterdam");

  amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
  amsterdamTimeElement.innerHTML = amsterdamTime.format("hh:mm:ss a");
}

//cities from select element
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".time-zones");

  let cityName = cityTimeZone.replace("_", "").split("/")[1];

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  citiesElement.innerHTML = `
    <div class="city">
        <div id="flag">🌎</div>
        <div>
            <h2>${cityName}</h2>
            <div id="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div id="time">${cityTime.format("hh:mm:ss a")}</div>
    </div>`;
}
let citiesSelectElement = document.querySelector("#select-city");
citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
