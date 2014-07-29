function simpleVibrate() {
  navigator.vibrate(200);
}

function threeThreeSevenVibrate() {
  // 三三七拍子
  navigator.vibrate([200, 100, 200, 100, 200, 200,
                     200, 100, 200, 100, 200, 200,
                     200, 100, 200, 100, 200, 100, 200, 100,
                     200, 100, 200, 100, 200, 200]);
}

function stopVibrate() {
  navigator.vibrate(0);
}
