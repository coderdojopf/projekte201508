function resizeGame() {
  var gameArea = $('#gameArea')[0];
  var widthToHeight = 4 / 3;
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;
  var newWidthToHeight = newWidth / newHeight;

  if (newWidthToHeight > widthToHeight) {
    newWidth = newHeight * widthToHeight;
    gameArea.style.height = newHeight + 'px';
    gameArea.style.width = newWidth + 'px';
  } else {
    newHeight = newWidth / widthToHeight;
    gameArea.style.width = newWidth + 'px';
    gameArea.style.height = newHeight + 'px';
  }

  gameArea.style.marginTop = (-newHeight / 2) + 'px';
  gameArea.style.marginLeft = (-newWidth / 2) + 'px';

  var gameCanvas = $('#gameCanvas')[0];
  gameCanvas.width = newWidth;
  gameCanvas.height = newHeight;
}

window.addEventListener('resize', resizeGame, false)
window.addEventListener('orientationchange', resizeGame, false)
