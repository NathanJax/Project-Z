function playWitcher(){
    var sample = document.getElementById("witcher-audio");
    sample.play();
}

function pauseWitcher(){
    var sample = document.getElementById("witcher-audio");
    sample.pause();
    sample.currentTime = 0;
}