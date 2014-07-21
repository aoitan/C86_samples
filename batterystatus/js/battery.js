var battery = navigator.battery || navigator.mozBattery;
var _id = document.getElementById.bind(document);

function levelChange() {
  var value = _id('level_value');
  value.innerHTML = battery.level * 100; // parcent
}

function chargingChange() {
  var value = _id('charging_value');
  value.innerHTML = battery.charging;
}

function chargingTimeChange() {
  var value = _id('chargingtime_value');
  value.innerHTML = battery.chargingTime;
}

function dischargingTimeChange() {
  var value = _id('dischargingtime_value');
  value.innerHTML = battery.dischargingTime;
}

// イベント追加
battery.addEventListener("levelchange", levelChange);
battery.addEventListener("chargingchange", chargingChange);
battery.addEventListener("chargingtimechange", chargingTimeChange);
battery.addEventListener("dischargingtimechange", dischargingTimeChange);

// 初回表示
levelChange();
chargingChange();
chargingTimeChange();
dischargingTimeChange();
