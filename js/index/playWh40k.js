function playWh40k() {
  var sample = document.getElementById("wh40k-audio");
  sample.play();
}

function pauseWh40k() {
  var sample = document.getElementById("wh40k-audio");
  sample.pause();
  sample.currentTime = 0;
}
