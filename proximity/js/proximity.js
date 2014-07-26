window.addEventListener('userproximity', userHandler);
window.addEventListener('deviceproximity', deviceHandler);

var interval;

function startVibrate() {
  interval = setInterval(() => {
    navigator.vibrate([200, 200]);
  }, 400);
}

function userHandler(event) {
  if (event.near) {
    // 近かったらバイブする
    startVibrate();
  } else {
    // 近くなかったらバイブ止める
    navigator.vibrate(0);
    if (interval) {
      clearInterval(interval);
    }
  }
}

function deviceHandler(event) {
  var _ = document.getElementById.bind(document);
  
  var max = _('max_value');
  var min = _('min_value');
  var val = _('val_value');
  
  max.textContent = event.max;
  min.textContent = event.min;
  val.textContent = event.value;
}