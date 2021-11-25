function playlotr() {
  var sample = document.getElementById("lotr-audio");
  sample.play();
}

function pauselotr() {
  var sample = document.getElementById("lotr-audio");
  sample.pause();
  sample.currentTime = 0;
}
