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

updateTime();
setInterval(updateTime, 1000);
