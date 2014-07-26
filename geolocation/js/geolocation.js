var watchId;

function positionPrint(position) {
  var l10n = navigator.mozL10n;
  var _ = document.getElementById.bind(document);
  
  var coord_label = _('coord_label');
  var time_label = _('time_label');
  coord_label.innerHTML = l10n.get('coord_label');
  time_label.innerHTML = l10n.get('time_label');
  
  var coord = _('coord');
  var timestamp = _('timestamp');
  coord.innerHTML = 'lon=' + position.coords.longitude + ', lat=' + position.coords.latitude + ', acc=' + position.coords.accuracy;
  timestamp.innerHTML = new Date(position.timestamp);
}

function errorPrint(error) {
  console.log(error);
}

function startPositioning() {
  var geo = navigator.geolocation;

  // まず現在地を取る
  return this.getCurrentPosition().then((pos) => {
    positionPrint(pos);
    
    // 精度を上げるために監視を始める
    watchId = geo.watchPosition((position) => {
      positionPrint(pos);
    }, (error) => {
      errorPrint(error);
    }, {enableHighAccuracy: true});
    return watchId;
  }).catch((error) => {
    errorPrint(error);
  });
}

function getCurrentPosition() {
  var geo = navigator.geolocation;

  var getLocation = new Promise((resolve, reject) => {
    geo.getCurrentPosition((position) => {
      resolve(position);
    }, (error) => {
      reject(error);
    });
  });
  
  return getLocation;
}

document.addEventListener('visibilitychange', (event) => {
  if (document.hidden) {
    navigator.geolocation.clearWatch(watchId);
  } else {
    startPositioning();
  }
});

startPositioning();