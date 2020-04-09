
const dateInput = document.getElementById("date")
const batteryLevel = document.getElementById("battery-level");
const passwordInput = document.getElementById("password")
const body = document.querySelector("body")

//get battery percentage
navigator.getBattery().then((battery) => {
  const showBatteryLeve = () => {
    let level = battery.level;
    if (level < 1) {
      level = level.toString().slice(2, 4);
    } else {
      level = 100;
    }
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


setInterval(() => {
  //set date
dateInput.innerText = moment().format("ddd D MMM h:mm A");
}, 1000);



passwordInput.addEventListener('click', ()=>{
 body.requestFullscreen()
})