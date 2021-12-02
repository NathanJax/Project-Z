function playLeague(){
    var sample = document.getElementById("league-audio");
    sample.play();
}

function pauseLeague(){
    var sample = document.getElementById("league-audio");
    sample.pause();
    sample.currentTime = 0;
}