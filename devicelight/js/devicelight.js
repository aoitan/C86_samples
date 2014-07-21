window.addEventListener('devicelight', function(event) {
  console.log('環境光センサの値は' + event.value + 'です');
  var brightness = '';
  var l10n = navigator.mozL10n;
  if (event.value > 35000) {
    brightness = l10n.get('SHINE');
  } else if (event.value > 10000) {
    brightness = l10n.get('CLOUDY');
  } else if (event.value > 1000) {
  } else if (event.value > 200) {
    brightness = l10n.get('ROOM');
  } else if (event.value > 100) {
    brightness = l10n.get('NIGHT');
  } else if (event.value > 10) {
    brightness = l10n.get('CANDLE');
  } else {
    brightness = l10n.get('MOONLIGHT');
  }
  var light_value = document.getElementById('light_value');
  light_value.innerHTML = event.value + '(' + brightness + ')';
});
