
const dateInput = document.getElementById("date")
const batteryLevel = document.getElementById("battery-level");
const passwordInput = document.getElementById("password")
const body = document.querySelector("body")

//get battery percentage
navigator.getBattery().then((battery) => {
  const showBatteryLeve = () => {
    let level = Math.floor(battery.level * 100);
    batteryLevel.innerText = level;
  };

  showBatteryLeve();
  battery.ondischargingtimechange = () => {
    showBatteryLeve();
  };

  battery.onchargingtimechange = () => {
    showBatteryLeve();
  };
});

dateInput.innerText = moment().format("ddd D MMM h:mm A");

setInterval(() => {
  //set date
dateInput.innerText = moment().format("ddd D MMM h:mm A");
}, 1000*60 );
//1 minute



passwordInput.addEventListener('click', ()=>{
 body.requestFullscreen()
})